import {apiClient} from '../../utils'
import {get} from 'lodash'
import config from 'config'
const graphqlUrl = config.get('graphqlUrl');

const getUser = `
mutation($userName: String!, $followerUserName: String!) {
    AddFollower(userName: $userName, followerUserName: $followerUserName) {
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


const createFollowing = (userName, usernameFollow ) => apiClient
    .post(graphqlUrl, {
        query: getUser,
        variables: {
            userName: userName,
            followerUserName: usernameFollow
        }
    }).then(({data}) => get(data, 'data.AddFollower', null))

export default createFollowing;