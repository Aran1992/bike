import Config from "../config";
import GameScene from "./GameScene";
import {resources, Sprite, Texture} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";
import SceneHelper from "../mgr/SceneHelper";
import {Vec2} from "../libs/planck-wrapper";
import MusicMgr from "../mgr/MusicMgr";

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
        this.sceneFilePathList = [];
        [this.sceneConfig.roadSectionList, this.sceneConfig.infiniteRoadSectionList]
            .forEach(rsList => {
                let pathList = rsList.reduce((list, diff) => {
                    diff.list.forEach(roadSectionID => {
                        let roadSection = Config.roadSections[roadSectionID];
                        roadSection.forEach(name =>
                            list.push(`${Config.endlessMode.baseScenePath}${name}.scene.json`));
                    });
                    return list;
                }, []);
                this.sceneFilePathList = this.sceneFilePathList.concat(pathList);
            });
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
        SceneHelper.loadSceneRes(this.sceneFilePathList, this.onLoadedGameRes.bind(this), true);
    }

    onRestart() {
        this.onShow(this.sceneIndex);
    }

    initGameContent() {
        this.createPart({
            label: "Road",
            props: {
                points: [0, Config.designHeight / 2, Config.startRoadLength, Config.designHeight / 2].join(","),
                x: 0,
                y: 0,
            }
        });

        this.mapWidth = Config.startRoadLength;
        this.offsetX = Config.startRoadLength;
        this.offsetY = Config.designHeight / 2;

        this.createBike(GameUtils.renderPos2PhysicsPos({
            x: Config.designWidth / 2,
            y: Config.designHeight / 2 - Config.bikeRadius * Config.meter2pixel
        }));

        this.enemyList = [];

        this.diffIndex = -1;
        this.roadSectionList = this.sceneConfig.roadSectionList;
        this.preparePartList();
    }

    createRoadSection(json, offsetX, offsetY) {
        json.child.forEach(data => {
            data.props.x += offsetX;
            data.props.y += offsetY;
            this.createPart(data);
        });
        this.roadList.sort((a, b) => a.getLeftBorderX() - b.getLeftBorderX());
    }

    dynamicCreateRoad() {
        if (this.mapWidth <= -this.cameraContainer.x + Config.designWidth) {
            if (this.partList.length === 0) {
                this.preparePartList();
            }
            let item = this.partList.pop();
            this.createRoadSection(item, this.offsetX, this.offsetY);
            this.mapWidth += item.props.width;
            this.offsetX += item.props.width;
            this.offsetY += item.props.height;
        }
    }

    preparePartList() {
        if (this.roadSectionList[this.diffIndex + 1]) {
            this.diffIndex++;
        } else {
            this.diffIndex = 0;
            this.roadSectionList = this.sceneConfig.infiniteRoadSectionList;
        }
        let roadSection = this.roadSectionList[this.diffIndex];
        let rsListID = Utils.randomChoose(roadSection.list);
        let rsList = Config.roadSections[rsListID].map(name =>
            Utils.clone(resources[`${Config.endlessMode.baseScenePath}${name}.scene.json`].data));

        this.player.velocity.setBasicValueRate(roadSection.velocity);
        this.bikeBody.setLinearVelocity(Vec2(this.player.velocity.value, this.bikeBody.getLinearVelocity().y));

        this.partList = [];
        let sumLength = 0;
        let roadSectionLength = roadSection.length;
        while (roadSectionLength > sumLength) {
            if (rsList.length === 0) {
                rsList = Config.roadSections[rsListID].map(name =>
                    Utils.clone(resources[`${Config.endlessMode.baseScenePath}${name}.scene.json`].data));
            }
            let index = Math.floor(Math.random() * rsList.length);
            let item = rsList.splice(index, 1)[0];
            this.partList.push(item);
            sumLength += item.props.width;
        }
    }

    showDistance() {
        if (this.distance >= this.nextNoticeDistance) {
            App.showNotice(App.getText("You have ridden ${distance} meters", {distance: this.nextNoticeDistance}));
            this.nextDistanceIndex++;
            this.nextNoticeDistance = this.sceneConfig.distanceNotice[this.nextDistanceIndex];
        }
    }

    cleanPartOutOfView() {
        this.underBikeContianer.children.forEach(({part}) => {
            if (part && part.getRightBorderX() < -this.cameraContainer.x) {
                part.destroy();
                [this.roadList, this.birdList, this.itemList].forEach(list => {
                    if (list.indexOf(part) !== -1) {
                        Utils.removeItemFromArray(list, part);
                    }
                });
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

    randomEffect() {
        let weights = [];
        let effects = [];
        for (let effect in this.itemRandomTable) {
            if (this.itemRandomTable.hasOwnProperty(effect)) {
                weights.push(this.itemRandomTable[effect]);
                effects.push(effect);
            }
        }
        return effects[Utils.randomWithWeight(weights)];
    }

    onLoadedGameRes() {
        super.onLoadedGameRes();
        this.showGuideAnimation();
    }

    play(delta) {
        super.play(delta);
        if (this.gaSprite) {
            this.onGuideAnimation();
        }
    }

    showGuideAnimation() {
        this.gaSprite = this.addChild(new Sprite());
        this.gaSprite.anchor.set(0.5, 0.5);
        this.gaSprite.x = window.App.sceneWidth / 2;
        this.gaStep = -1;
        this.gaSpriteTextureList = [
            Config.imagePath.start3,
            Config.imagePath.start2,
            Config.imagePath.start1,
        ];
        this.startAction();
    }

    startAction() {
        this.guideActionList = [
            () => this.actionCallback(() => {
                this.ui.guidePanel.visible = true;
                window.App.showMask();
            }),
            () => this.actionMove(),
            () => this.actionCallback(() => MusicMgr.playSound(Config.soundPath.guideCountDown)),
            () => this.actionDelay(),
            () => this.actionMove(),
            () => this.actionCallback(() => MusicMgr.playSound(Config.soundPath.guideCountDown)),
            () => this.actionDelay(),
            () => this.actionMove(),
            () => this.actionCallback(() => MusicMgr.playSound(Config.soundPath.guideCountDown)),
            () => this.actionDelay(),
            () => this.actionScale(),
            () => this.actionCallback(() => MusicMgr.playSound(Config.soundPath.guideStartGo, () => {
                MusicMgr.playBGM(this.bgmPath, true);
            })),
            () => this.actionDelay(),
            () => this.actionFadeout(),
            () => this.actionCallback(() => {
                this.gaSprite.destroy();
                this.gaSprite = undefined;
                this.ui.guidePanel.visible = false;
                window.App.hideMask();
            }),
        ];
        this.onActionEnded();
    }

    onGuideAnimation() {
        switch (this.action) {
            case "move": {
                this.onMoveAction();
                break;
            }
            case "scale": {
                this.onScaleAction();
                break;
            }
            case "delay": {
                this.onDelayAction();
                break;
            }
            case "fadeout": {
                this.onFadeoutAction();
                break;
            }
        }
    }

    onMoveAction() {
        this.gaSprite.y += this.gaVelocity;
        if (this.gaSprite.y >= App.sceneHeight / 2) {
            this.onActionEnded();
        }
    }

    onScaleAction() {
        this.gaSprite.scale.x -= this.gaVelocity;
        this.gaSprite.scale.y -= this.gaVelocity;
        if (this.gaSprite.scale.x <= 1) {
            this.onActionEnded();
        }
    }

    onDelayAction() {
        this.delay++;
        if (this.delay > Config.guideAction.delayFrame) {
            this.onActionEnded();
        }
    }

    onFadeoutAction() {
        this.gaSprite.alpha -= this.gaVelocity;
        if (this.gaSprite.alpha <= 0) {
            this.onActionEnded();
        }
    }

    onActionEnded() {
        let action = this.guideActionList.shift();
        if (action) {
            action();
        }
    }

    actionMove() {
        this.action = "move";
        this.gaStep++;
        this.gaSprite.texture = Texture.from(this.gaSpriteTextureList[this.gaStep]);
        this.gaSprite.y = -this.gaSprite.height / 2;
        this.gaVelocity = App.sceneHeight / 2 / (Config.fps - Config.guideAction.delayFrame);
    }

    actionScale() {
        this.action = "scale";
        this.gaSprite.texture = Texture.from(Config.imagePath.startGo);
        this.gaSprite.scale.set(Config.guideAction.startScale, Config.guideAction.startScale);
        this.gaVelocity = (Config.guideAction.startScale - 1) / (Config.fps - Config.guideAction.delayFrame);
    }

    actionFadeout() {
        this.action = "fadeout";
        this.gaVelocity = 1 / (Config.fps - Config.guideAction.delayFrame);
    }

    actionDelay() {
        this.action = "delay";
        this.delay = 0;
    }

    actionCallback(handler) {
        handler();
        this.onActionEnded();
    }
}
