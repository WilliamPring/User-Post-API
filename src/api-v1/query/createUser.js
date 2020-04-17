import {apiClient} from '../../utils'
import {get} from 'lodash'
import config from 'config'
const graphqlUrl = config.get('graphqlUrl');

const getUser = `
mutation($input: UserInput!) {
    CreateUser(input: $input) {
        userName
        uuid
        name
    }
  }
`


const createUser = user => apiClient
    .post(graphqlUrl, {
        query: getUser,
        variables: {
            input: user
        }
    }).then(({data}) => get(data, 'data.CreateUser', null))

export default createUser;