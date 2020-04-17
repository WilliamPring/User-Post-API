//import getUserProfile from '../query/getUser'
import {createUser, getUser } from '../query'
import {isNull} from 'lodash'
export default class UserService {
    async createUser(payload, callback) {
        try {
            const data = await createUser(payload)
            console.log("DATA", data)
            if (isNull(data)) return callback({statusCode: 400, message: "User Exist Already"})
            return callback(null, data);
        } catch (e) {
            console.log(e)
            callback(e)
        }
    }
    async updateUserFollower(payload, callback) {

    }
    async getUser(userName, callback) {
        try {
            console.log(userName)
            const data = await getUser(userName)
            console.log(data)
            callback(null, data)
        } catch (e) {
            console.log(e)
            callback(e)
        }
    }
}