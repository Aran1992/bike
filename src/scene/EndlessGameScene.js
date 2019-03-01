import Config from "../config";
import GameScene from "./GameScene";
import {resources} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import Road from "../item/Road";
import Utils from "../mgr/Utils";
import BlackBird from "../item/BlackBird";
import SceneHelper from "../mgr/SceneHelper";
import EditorItem from "../item/EditorItem";

export default class EndlessGameScene extends GameScene {
    onCreate() {
        super.onCreate();
        this.registerEvent("Continue", this.onContinue);
        this.ui.pauseButton.visible = true;
        this.onClick(this.ui.pauseButton, this.onClickPauseButton.bind(this));
    }

    onShow(sceneIndex) {
        this.sceneIndex = sceneIndex;
        this.sceneConfig = Config.endlessMode.sceneList[sceneIndex];
        this.nextDistanceIndex = 0;
        let config = this.sceneConfig.distanceNotice;
        this.nextNoticeDistance = config && config[this.nextDistanceIndex];
        this.diamondReborn = false;
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
        this.sideTexture2 = this.sceneConfig.texture.side2;
        this.topTexture2 = this.sceneConfig.texture.top2;
        this.horizontalParallaxDepth = this.sceneConfig.horizontalParallaxDepth;
        this.verticalParallaxDepth = this.sceneConfig.verticalParallaxDepth;
        this.bgY = this.sceneConfig.bgY || Config.bgY;
        this.bgmPath = this.sceneConfig.bgmPath || Config.defaultBgmPath;
        this.bgScale = this.sceneConfig.bgScale || Config.defaultBgScale;
        this.itemRandomTable = this.sceneConfig.itemRandomTable || Config.defaultItemRandomTable;
    }

    getResPathList() {
        this.sceneFilePathList = this.sceneConfig.roadSectionList.reduce((list, diff) =>
            list.concat(diff.map(section =>
                `${Config.endlessMode.baseScenePath}${section.scenePath}.scene`)), []);
        return super.getResPathList()
            .concat(this.sceneConfig.texture.bg)
            .concat([
                this.sceneConfig.texture.side,
                this.sceneConfig.texture.top,
                this.sceneConfig.texture.side2,
                this.sceneConfig.texture.top2,
            ])
            .concat(this.sceneFilePathList);
    }

    onLoadedBaseRes() {
        SceneHelper.loadSceneRes(this.sceneFilePathList, this.onLoadedGameRes.bind(this));
    }

    onRestart() {
        this.onShow(this.sceneIndex);
    }

    initGameContent() {
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

        this.enemyList = [];

        this.diffIndex = 0;
        let roadSectionList = this.sceneConfig.roadSectionList[this.diffIndex].map(section =>
            JSON.parse(resources[`${Config.endlessMode.baseScenePath}${section.scenePath}.scene`].data));

        this.partList = [];
        let sumLength = 0;
        let config = this.sceneConfig.roadSectionLengthList[this.diffIndex];
        while (config > sumLength) {
            if (roadSectionList.length === 0) {
                roadSectionList = this.sceneConfig.roadSectionList[this.diffIndex].map(section =>
                    JSON.parse(resources[`${Config.endlessMode.baseScenePath}${section.scenePath}.scene`].data));
            }
            let index = Math.floor(Math.random() * roadSectionList.length);
            let item = roadSectionList.splice(index, 1)[0];
            this.partList.push(item);
            sumLength += item.props.width;
        }
        setTimeout(() => {
            this.onAteItem("Magnet");
        }, 5);
    }

    createRoadSection(json, offsetX, offsetY) {
        json.child.forEach(data => {
            data.props.x += offsetX;
            data.props.y += offsetY;
            this.createPart(data);
        });
        this.roadList.sort((a, b) => {
            let ax = a.getLeftBorderX();
            let bx = b.getLeftBorderX();
            if (ax < bx) {
                return -1;
            } else if (ax > bx) {
                return 1;
            }
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
                let config = this.sceneConfig.roadSectionLengthList[this.diffIndex];
                let sumLength = 0;
                while (config > sumLength) {
                    if (list.length === 0) {
                        list = this.sceneConfig.roadSectionList[this.diffIndex].map(section =>
                            JSON.parse(resources[`${Config.endlessMode.baseScenePath}${section.scenePath}.scene`].data));
                    }
                    let index = Math.floor(Math.random() * list.length);
                    let item = list.splice(index, 1)[0];
                    this.partList.push(item);
                    sumLength += item.props.width;
                }
            }
            let item = this.partList.pop();
            this.createRoadSection(item, this.offsetX, this.offsetY);
            this.mapWidth += item.props.width;
            this.offsetX += item.props.width;
            this.offsetY += item.props.height;
        }
    }

    showDistance() {
        if (this.distance >= this.nextNoticeDistance) {
            App.showNotice(`You have ridden ${this.nextNoticeDistance} meters`);
            this.nextDistanceIndex++;
            this.nextNoticeDistance = this.sceneConfig.distanceNotice[this.nextDistanceIndex];
        }
    }

    cleanPartOutOfView() {
        this.underBikeContianer.children.forEach(child => {
            if (child.part && child.part.getRightBorderX() < -this.cameraContainer.x) {
                child.part.destroy();
                if (child.part instanceof Road) {
                    Utils.removeItemFromArray(this.roadList, child.part);
                } else if (child.part instanceof BlackBird) {
                    Utils.removeItemFromArray(this.birdList, child.part);
                } else if (child.part instanceof EditorItem) {
                    Utils.removeItemFromArray(this.itemList, child.part);
                }
            }
        });
    }

    gameOver() {
        App.showScene("GameOverScene", {
            distance: Math.floor(this.distance),
            coin: this.coin,
            diamondReborn: this.diamondReborn
        });
        this.diamondReborn = true;
    }

    onDead() {
        super.onDead();
        this.deadCompleteTimer = setTimeout(() => {
            this.gameOver();
            this.gameLoopFunc = this.pause.bind(this);
        }, Config.bike.deadCompleteTime);
    }

    onClickPauseButton() {
        if (this.gameStatus === "play") {
            this.gameLoopFunc = this.pause.bind(this);
            this.gameStatus = "pause";
            App.showScene("PauseScene");
        } else if (this.gameStatus === "pause") {
            this.gameLoopFunc = this.play.bind(this);
            this.gameStatus = "play";
            App.hideScene("PauseScene");
        }
    }

    onContinue() {
        this.onClickPauseButton();
    }
}
