import {apiClient} from '../../utils'
import {get} from 'lodash'
import config from 'config'
const graphqlUrl = config.get('graphqlUrl');

const createUserReview = `
mutation($userName: String!, $restaurantID: String!, $reviewSummary: String!, $reviewRating: Int!, $foods: [String]) {
    CreateUserReview(userName:  $userName, restaurantID: $restaurantID, reviewSummary: $reviewSummary, reviewRating: $reviewRating, foods: $foods) {
        foods
        starRating
        reviewSummary
        _id
    }

  }
`
// MATCH (review:Review {uuid:2})
// DETACH DELETE review



const createReview = async (userName, restaurantID,  reviewSummary, reviewRating, foods) => {
    return await apiClient
        .post(graphqlUrl, {
            query: createUserReview,
            variables: {
                userName, restaurantID,  reviewSummary, reviewRating, foods
            }
        }).then(({data}) => get(data, 'data.CreateUserReview', null))
}
export default createReview;