import Config from "../config";
import {Vec2} from "../libs/planck-wrapper";
import Utils from "./Utils";
import {resources} from "../libs/pixi-wrapper";

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
                return -1;
            } else if (ax > bx) {
                return 1;
            } else {
                return a.compId - b.compId;
            }
        });
    }

    static getSceneChildX(child) {
        if (GameUtils.getItemType(child) === "Road") {
            return parseInt(child.props.points.split(",")[0]) + child.props.x;
        } else {
            return child.props.x;
        }
    }

    static getFrames(jsonPath) {
        return Utils.values(resources[jsonPath].data.animations)[0].map(texturePath => resources[jsonPath].textures[texturePath]);
    }

    // static createScene(sceneData) {
    //     let sceneContainer = new Container();
    //     sceneData.child.forEach(child => {
    //         let data = child.props;
    //         switch (child.type) {
    //             case "Panel": {
    //                 let anchorX = 0.5,
    //                     anchorY = 0.5,
    //                     scaleX = 1,
    //                     scaleY = 1,
    //                     x = 0,
    //                     y = 0,
    //                     width = 100,
    //                     height = 100;
    //                 let container = new Container();
    //                 container.x = x;
    //                 container.y = y;
    //                 container.width = width;
    //                 container.height = height;
    //                 let mask = new Graphics();
    //                 mask.beginFill();
    //                 mask.drawRect(0, 0, width, height);
    //                 mask.endFill();
    //                 container.mask = mask;
    //                 break;
    //             }
    //             case "Sprite": {
    //                 break;
    //             }
    //             case "Text": {
    //                 break;
    //             }
    //         }
    //     });
    //     return sceneContainer;
    // }
}
