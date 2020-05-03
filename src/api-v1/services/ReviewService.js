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
        const data = await createReview(userName, resterantId, reviewSummary, reviewRating, foods);


        // const data = {
        //   uuid: '9cf35ce7-0b3f-4d4f-89c9-85e501ca46ff',
        //   foods: [ 'Green Curry', 'Yellow Curry' ],
        //   starRating: 2,
        //   reviewSummary: 'Decent and not ba',
        //   _id: '13',
        //   restaurant: {
        //     uuid: 'c516e849-8936-483f-867e-c7e164b81daf',
        //     name: 'Sabai Sabai',
        //     location: {
        //         name: 'Toronto',
        //         municipality: {
        //         provienceState: "Ontario",
        //         country: {
        //           name: "Canada"
        //         }
        //       }
        //     }
        //   }
        // }
        console.log(data)
        console.log(imagesCollections)
        imageProcessingQueue(imagesCollections, userName, resterantId ,data.uuid, data.restaurant)
        return callback(null, data)
      } catch(e) {
          console.log(e)
      }
    }
    async createImagesForReview(payload, callback) {


        return callback(null, null)
    }
}