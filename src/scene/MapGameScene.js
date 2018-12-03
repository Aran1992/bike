import Config from "../config";
import {App} from "../main";
import GameScene from "./GameScene";
import {resources, Sprite} from "../libs/pixi-wrapper";
import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";

export default class MapGameScene extends GameScene {
    onShow(mapIndex) {
        this.mapIndex = mapIndex;
        this.mapConfig = Config.mapList[mapIndex];
        super.onShow();
    }

    initEnvironment() {
        this.bikeCommonVelocity = this.mapConfig.bikeVelocity || Config.bikeVelocity;
        this.bikeAccVelocity = this.mapConfig.bikeAccVelocity || Config.bikeAccVelocity;
        this.gravity = this.mapConfig.gravity || Config.gravity;
        this.jumpForce = this.mapConfig.jumpForce || Config.jumpForce;
        this.bgTextureList = this.mapConfig.texture.bg;
        this.sideTexture = this.mapConfig.texture.side;
        this.topTexture = this.mapConfig.texture.top;
        this.horizontalParallaxDepth = this.mapConfig.horizontalParallaxDepth;
        this.verticalParallaxDepth = this.mapConfig.verticalParallaxDepth;
        this.bgY = this.mapConfig.bgY || Config.bgY;
    }

    getResPathList() {
        return super.getResPathList()
            .concat(this.mapConfig.texture.bg)
            .concat([
                this.mapConfig.texture.side,
                this.mapConfig.texture.top,
                Config.mapBasePath + this.mapConfig.scenePath + ".scene",
            ]);
    }

    onRestart() {
        this.onShow(this.mapIndex);
    }

    initGameContent() {
        let pathList = this.getRoadPathList();

        let lastPath = Utils.getLast(pathList);
        this.finalPoint = {
            x: (lastPath[lastPath.length - 6] + lastPath[lastPath.length - 4]) / 2,
            y: (lastPath[lastPath.length - 5] + lastPath[lastPath.length - 3]) / 2,
        };

        this.createMap();

        this.createFinalFlag();

        let pp = GameUtils.renderPos2PhysicsPos({x: pathList[0][2] + Config.bikeLeftMargin, y: pathList[0][3]});
        pp.x += Config.bikeRadius;
        pp.y += Config.bikeRadius;
        this.createBike(pp);
    }

    getRoadPathList() {
        let json = JSON.parse(resources[Config.mapBasePath + this.mapConfig.scenePath + ".scene"].data);
        return json.child
            .filter(data => data.type === "Lines")
            .map(data => {
                let path = data.props.points.split(",").map((intStr, i) => {
                    let value = parseInt(intStr);
                    if (i % 2 === 0) {
                        value += data.props.x;
                    } else {
                        value += data.props.y;
                    }
                    return value;
                });
                let maxY = path[1];
                for (let i = 1; i < path.length; i += 2) {
                    if (path[i] > maxY) {
                        maxY = path[i];
                    }
                }
                let bottomY = maxY + App.sceneHeight / 3 * 2;
                path = [path[0], bottomY].concat(path);
                path = path.concat([path[path.length - 2], bottomY]);
                return path;

            });
    }

    createMap() {
        let json = JSON.parse(resources[Config.mapBasePath + this.mapConfig.scenePath + ".scene"].data);
        GameUtils.sortSceneChildrenByX(json.child);
        json.child.forEach(data => this.createPart(data));
    }

    createFinalFlag() {
        let sprite = new Sprite(resources[Config.finalFlagImagePath].texture);
        sprite.anchor.set(0.5, 1);
        sprite.scale.set(0.5, 0.5);
        sprite.position.set(this.finalPoint.x, this.finalPoint.y);
        this.closeViewContainer.addChild(sprite);
    }
}
