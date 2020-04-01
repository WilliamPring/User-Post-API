
export default class WorldService {
    getWorlds(name) {
        return worlds[name] ? [worlds[name]] : [];
    }
}