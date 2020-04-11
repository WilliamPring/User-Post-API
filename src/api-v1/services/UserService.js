import getUserProfile from '../query/getUser'
export default class UserService {
    createNewUser(payload, callback) {
        return callback(null, payload);
    }
    async getUser(userName, callback) {
        try {
            const data = await getUserProfile("Bento")
            callback(null, data)
        } catch (e) {
            console.log(e)
            callback(e)
        }
    }
}