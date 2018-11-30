import Config from "../config";
import GameScene from "./GameScene";
import {resources} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";

export default class EndlessGameScene extends GameScene {
    onShow(sceneIndex) {
        this.sceneIndex = sceneIndex;
        this.sceneConfig = Config.endlessMode.sceneList[sceneIndex];
        super.onShow();
    }

    initEnvironment() {
        this.bikeCommonVelocity = this.sceneConfig.bikeVelocity || Config.bikeVelocity;
        this.bikeAccVelocity = this.sceneConfig.bikeAccVelocity || Config.bikeAccVelocity;
        this.gravity = this.sceneConfig.gravity || Config.gravity;
        this.jumpForce = this.sceneConfig.jumpForce || Config.jumpForce;
        this.bgTextureList = this.sceneConfig.texture.bg;
        this.sideTexture = this.sceneConfig.texture.side;
        this.topTexture = this.sceneConfig.texture.top;
        this.horizontalParallaxDepth = this.sceneConfig.horizontalParallaxDepth;
        this.verticalParallaxDepth = this.sceneConfig.verticalParallaxDepth;
    }

    getResPathList() {
        return super.getResPathList()
            .concat(this.sceneConfig.texture.bg)
            .concat([
                this.sceneConfig.texture.side,
                this.sceneConfig.texture.top,
            ])
            .concat(this.sceneConfig.roadSectionList.reduce((list, diff) =>
                list.concat(diff.map(section =>
                    `${Config.endlessMode.baseScenePath}${section.scenePath}.scene`)), []));
    }

    onRestart() {
        this.onShow(this.sceneIndex);
    }

    initGameContent() {
        this.diffIndex = 0;
        let roadSectionList = this.sceneConfig.roadSectionList[this.diffIndex].map(section =>
            JSON.parse(resources[`${Config.endlessMode.baseScenePath}${section.scenePath}.scene`].data));

        this.partList = [];
        while (roadSectionList.length !== 0) {
            let index = Math.floor(Math.random() * roadSectionList.length);
            let item = roadSectionList.splice(index, 1)[0];
            this.partList.push(item);
        }

        this.createPart({
            label: "Road",
            props: {
                points: [0, Config.designHeight / 2, Config.designWidth, Config.designHeight / 2].join(","),
                x: 0,
                y: 0,
            }
        });

        this.mapWidth = Config.designWidth;
        this.offsetX = Config.designWidth;
        this.offsetY = Config.designHeight / 2;

        this.createBike(GameUtils.renderPos2PhysicsPos({
            x: Config.designWidth / 2,
            y: Config.designHeight / 2 - Config.bikeRadius * Config.meter2pixel
        }));
    }

    createRoadSection(json, offsetX, offsetY) {
        json.child.forEach(data => {
            data.props.x += offsetX;
            data.props.y += offsetY;
            this.createPart(data);
        });
    }

    dynamicCreateRoad() {
        if (this.mapWidth <= -this.cameraContainer.x + Config.designWidth) {
            if (this.partList.length === 0) {
                if (this.sceneConfig.roadSectionList[this.diffIndex + 1]) {
                    this.diffIndex++;
                }
                let list = this.sceneConfig.roadSectionList[this.diffIndex].map(section =>
                    JSON.parse(resources[`${Config.endlessMode.baseScenePath}${section.scenePath}.scene`].data));
                this.partList = [];
                while (list.length !== 0) {
                    let index = Math.floor(Math.random() * list.length);
                    let item = list.splice(index, 1)[0];
                    this.partList.push(item);
                }
            }
            let item = this.partList.pop();
            this.createRoadSection(item, this.offsetX, this.offsetY);
            this.mapWidth += item.props.width;
            this.offsetX += item.props.width;
            this.offsetY += item.props.height;
        }
    }
}

