import axios from 'axios'
import https from 'https'
export const genericCallback = (err, data, res) => {
    if(err && err.statusCode) {
        res.status(err.statusCode).send(err)
    } else if(err) {
        res.status(err);
    } else {
        res.status(200).json(data)
    }
};


export const apiClient = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})