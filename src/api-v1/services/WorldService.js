
export default class WorldService {
    getWorlds(name, callback) {
        console.log("test")
        return callback(null, name);
    }
}