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

    static renderY2PhysicsY(ry) {
        return (Config.designHeight - ry) * Config.pixel2meter;
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

    static sortSceneChildrenByX(children) {
        children.sort((a, b) => {
            let ax = GameUtils.getSceneChildX(a);
            let bx = GameUtils.getSceneChildX(b);
            if (ax < bx) {
                return true;
            } else if (ax > bx) {
                return false;
            } else {
                return a.compId < b.compId;
            }
        });
    }

    static getSceneChildX(child) {
        if (GameUtils.getItemType(child) === "Road") {
            return child.props.points.split(",")[0] + child.props.x;
        } else {
            return child.props.x;
        }
    }
}
