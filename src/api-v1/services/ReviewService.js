import {uploadImage} from './utils'
export default class ReviewService {
    getWorlds(name, callback) {
        console.log("test")
        return callback(null, name);
    }
    async createReview(payload, callback) {
      //  const data = uploadImage("Bento", 'latias', payload.images[0].urlBase64);


        return callback(null, null)
    }
}