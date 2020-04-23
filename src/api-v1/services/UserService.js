//import getUserProfile from '../query/getUser'
import {createUser, getUser, createFollowing } from '../query'
import {isNull, get, isEmpty} from 'lodash'
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

    async updateUser(payload, callback) {
        try {
            return callback(null, null );
        } catch (e) {
            console.log(e)
            callback(e)
        }
    }

    async updateUserFollower(userName, followerUserName, callback) {
        try {
            console.log(userName, followerUserName)
            const data = await createFollowing(userName, followerUserName.username);
            console.log(data)
            return callback(null, data);
        } catch(e) {
            console.log(e)
        }
    }

    async removeUserFollower(userName, unfollowUser, callback) {
        try {
            console.log(userName, unfollowUser)
            const data = await createFollowing(userName, unfollowUser.username);
            console.log(data)
            return callback(null, data);
        } catch(e) {
            console.log(e)
        }
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