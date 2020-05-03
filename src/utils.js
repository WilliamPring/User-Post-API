import axios from 'axios'
import https from 'https'
import config from 'config'
import {forEach, isArray, merge} from 'lodash'
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



export const imageProcessingQueue = (imagesCollection, userName, restaurantId , reviewId, restaurant) => {
    const queue = config.get('Queue');
    const ampqUrl = `amqp://${queue.user}:${queue.secret}@${queue.url}`
    connect(ampqUrl, (err, conn) => {
        if(err) {throw err}
        conn.createChannel((errCh, channel) => {
            const exchange = queue.topic.image;
            channel.assertExchange(exchange, 'topic', { durable: false } )
            if(!isArray(imagesCollection)) {
                console.log(restaurant)
             const headers = {
                 name: imagesCollection.name,
                 restaurantId,
                 reviewId,
                 userName,
                 mimetype: imagesCollection.mimetype,
                 restaurantName: restaurant.name,
                 restaurantLocation: restaurant.location.name
             }
             console.log(headers)
             channel.publish(exchange, '#', imagesCollection.data, {headers})
            } else {
                forEach(imagesCollection.images, (value)=> {
                    const {data, mv, ...headers } = value;
                    channel.publish(exchange, '#', data, {headers})
                })
            }
        })
    });
}

