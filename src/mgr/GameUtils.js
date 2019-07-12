import Config from "../config";
import {Vec2} from "../libs/planck-wrapper";
import DataMgr from "./DataMgr";
import Utils from "./Utils";
import {filters, resources} from "../libs/pixi-wrapper";

let grayFilter = new filters.ColorMatrixFilter();
grayFilter.greyscale(0.5);

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

    static isItemType(config, type) {
        return config.label.split("//").indexOf(type) !== -1;
    }

    static getItemProp(config, prop) {
        let propStr = config.label.split("//").find(str => str.startsWith(prop));
        if (propStr) {
            return propStr.split(":")[1];
        }
    }

    static getBikeConfig(key, id, level) {
        if (id === undefined) {
            id = DataMgr.get(DataMgr.selectedBike, 0);
        }
        if (level === undefined) {
            level = DataMgr.get(DataMgr.bikeLevelMap, {})[id] || 0;
        }
        let config = Config.bikeList.find(bike => bike.id === id);
        let value = (config[key] || Config.bike[key])[level];

        Config.home.types.forEach(type => {
            Config.home[type].forEach(item => {
                if (item.unlockRewards
                    && item.unlockRewards.length !== 0
                    && !DataMgr.isHomeItemLocked(type, item.id)) {
                    value += item.unlockRewards[key];
                }
            });
        });

        return Math.floor(value * 100) / 100;
    }

    static getHomeConfig(key) {
        let value = 0;
        Config.home.types.forEach(type => {
            Config.home[type].forEach(item => {
                if (item.unlockRewards
                    && item.unlockRewards.length !== 0
                    && !DataMgr.isHomeItemLocked(type, item.id)) {
                    value += item.unlockRewards[key];
                }
            });
        });
        return value;
    }

    static getFrames(jsonPath, animationName) {
        if (animationName === undefined) {
            animationName = Utils.keys(resources[jsonPath].data.animations)[0];
        }
        return resources[jsonPath].data.animations[animationName].map(texturePath => resources[jsonPath].textures[texturePath]);
    }

    static moveToTargetPos(src, dst, velocity) {
        let radians = Utils.calcRadians(src, dst);
        let moveX = velocity * Math.cos(radians);
        let moveY = velocity * Math.sin(radians);
        let {value: x, final: fx} = Utils.successive(src.x, dst.x, moveX);
        let {value: y, final: fy} = Utils.successive(src.y, dst.y, moveY);
        return {x, y, final: fx && fy};
    }

    static getBikeDsc(config) {
        return App.getText("BikeDsc", {
            index: config.index,
            speed: Math.floor(config.velocityPercent * 100),
            jump: Math.floor((2 - config.densityPercent) * 100),
            highJump: App.getText(config.highJump),
            size: App.getText(config.size),
        });
    }

    static greySprite(sprite, grey) {
        if (grey) {
            sprite.filters = [grayFilter];
        } else {
            sprite.filters = [];
        }
    }

    static findChildByName(item, name) {
        for (let i = 0; i < item.children.length; i++) {
            let child = item.children[i];
            if (child.uiname === name) {
                return child;
            } else {
                let find = GameUtils.findChildByName(child, name);
                if (find) {
                    return find;
                }
            }
        }
    }
}
