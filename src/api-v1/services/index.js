//import worldsService from './worldsService'
import WorldService from './WorldService'
import UserService from './UserService'
export default({
    worldService: new WorldService(),
    userService: new UserService()
})