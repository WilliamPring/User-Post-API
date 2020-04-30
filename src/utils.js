import axios from 'axios'
import https from 'https'
import config from 'config'
//var amqp = require('amqplib/callback_api');
import { connect } from 'amqplib/callback_api'
export const genericCallback = (err, data, res) => {
    if(err && err.statusCode) {
        res.status(err.statusCode).send(err)
    } else if(err) {
        res.status(err);
    } else {
        res.status(200).json(data)
    }
};
//amqp.connect('amqp://admin:pass@localhost', function(error0, connection) {
export const apiClient = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})

export const imageProcessingQueue = (images) => {
    const queue = config.get('Queue');
    console.log(queue)
    const ampqUrl = `amqp://${queue.user}:${queue.secret}@${queue.url}`
    connect(ampqUrl, (err, conn) => {
        if(err) {throw err}
        conn.createChannel((errCh, channel) => {
            const exchange = queue.topic.image;
            channel.assertExchange(exchange, 'topic', { durable: false } )
            channel.publish(exchange, '#', Buffer.from("Hello World"))
        })
    });
}

