import Config from "../config";
import {Vec2} from "../libs/planck-wrapper";

export default class GameUtils {
    static physicsPos2renderPos(pp) {
        return {
            x: pp.x * Config.meter2pixel,
            y: Config.designHeight - pp.y * Config.meter2pixel
        };
    }

    static renderPos2PhysicsPos(rp) {
        return Vec2(
            rp.x * Config.pixel2meter,
            (Config.designHeight - rp.y) * Config.pixel2meter
        );
    }

    static hexString2Int(str) {
        return parseInt(str.replace("#", ""), 16);
    }

    static pointsStr2path(str) {
        return str.split(",").map(str => parseInt(str));
    }

    static path2vertices(path) {
        let list = [];
        for (let i = 0; i < path.length; i += 2) {
            list.push(Vec2(path[i], path[i + 1]));
        }
        return list;
    }

    static getItemType(config) {
        return config.label.split("//")[0];
    }
}
