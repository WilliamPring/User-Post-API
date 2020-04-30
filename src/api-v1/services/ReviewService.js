import {uploadImage, } from './utils'
import {createReview} from '../query'
import {imageProcessingQueue} from '../../utils'
export default class ReviewService {
    getWorlds(name, callback) {
        console.log("test")
        return callback(null, name);
    }
    async createReview(payload, images, callback) {
      //  const data = uploadImage("Bento", 'latias', payload.images[0].urlBase64);
      try {
        // const {resterantId, userName, reviewSummary, foods, reviewRating} = payload;
        // console.log(foods)
        // const data = await createReview(userName, resterantId, reviewSummary, reviewRating, foods);
        // console.log(data)
        imageProcessingQueue(images)
        return callback(null, null)
      } catch(e) {
          console.log(e)
      }
    }
    async createImagesForReview(payload, callback) {


        return callback(null, null)
    }
}