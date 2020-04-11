import {apiClient} from '../../utils'
import {get} from 'lodash'
import config from 'config'
const graphqlUrl = config.get('graphqlUrl');

const getUser = `
    query($filter: _UserFilter) {
        User(filter: $filter) {
        _id
        userName
        name
        followers {
            userName
        }
        following {
            userName
        }
    }
  }
`


const getUserProfile = userName => apiClient
    .post(graphqlUrl, {
        query: getUser,
        variables: {
            filter: {userName}
        }
    }).then(({data}) => get(data, 'data.User[0]'))

export default getUserProfile;