//import worldsService from './worldsService'
import WorldService from './WorldService'
import UserService from './UserService'
import ReviewService from './ReviewService'
export default({
    worldService: new WorldService(),
    userService: new UserService(),
    reviewService: new ReviewService()
})