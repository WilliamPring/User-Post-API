import {apiClient} from '../../utils'
import {get} from 'lodash'
import config from 'config'
const graphqlUrl = config.get('graphqlUrl');

const getUser = `
mutation($userName: String!, $followerUserName: String!) {
    RemoveFollower(userName: $userName, followerUserName: $followerUserName) {
        userName
        uuid
        name
        followers {
            userName
            uuid
        }
    }
  }
`


const removeFollower = (userName, unFollowerUser ) => apiClient
    .post(graphqlUrl, {
        query: getUser,
        variables: {
            userName: userName,
            followerUserName: unFollowerUser
        }
    }).then(({data}) => get(data, 'data.RemoveFollower', null))

export default removeFollower;