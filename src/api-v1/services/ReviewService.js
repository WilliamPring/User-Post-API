import {uploadImage, } from './utils'
import {createReview} from '../query'
import {imageProcessingQueue, generateUniqueImageName} from '../../utils'
export default class ReviewService {
    getWorlds(name, callback) {
        console.log("test")
        return callback(null, name);
    }
    async createReview(payload, imagesCollections, callback) {
      try {
        const {resterantId, userName, reviewSummary, foods, reviewRating} = payload;
        // console.log(foods)
        //const data = await createReview(userName, resterantId, reviewSummary, reviewRating, foods);
        const data = {
          uuid: '1856c2ee-311c-46a2-a642-d82cb387fb06',
          foods: [ 'Green Curry', 'Yellow Curry' ],
          starRating: 2,
          reviewSummary: 'Decent and not ba',
          _id: '2'
        }

        console.log(data)
        console.log(imagesCollections)
        imageProcessingQueue(imagesCollections, userName, resterantId ,data.uuid)
        return callback(null, null)
      } catch(e) {
          console.log(e)
      }
    }
    async createImagesForReview(payload, callback) {


        return callback(null, null)
    }
}