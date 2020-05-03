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
        restaurant {
            uuid
            name
            location {
              name
              municipality {
                provienceState
                cities {
                  name
                }
                country {
                  name
                }
              }
            }
        }
    }
  }
`

const getUUID = `
query($id: ID!) {
    getUUID(id: $id)
}
`




const createReview = async (userName, restaurantID,  reviewSummary, reviewRating, foods) => {
    const userReview = await apiClient
        .post(graphqlUrl, {
            query: createUserReview,
            variables: {
                userName, restaurantID,  reviewSummary, reviewRating, foods
            }
        }).then(({data}) => get(data, 'data.CreateUserReview', null))


    return apiClient
    .post(graphqlUrl, {
        query: getUUID,
        variables: {
            id: userReview._id
        }
    }).then(({data}) => {
        console.log(data)
        const uuid = get(data, 'data.getUUID', null)
        console.log(uuid)
        return {
            uuid,
            ...userReview
        };
    });
}
export default createReview;