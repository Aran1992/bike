import Config from "../config";
import RunOption from "../../run-option";
import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";
import EventMgr from "../mgr/EventMgr";
import MusicMgr from "../mgr/MusicMgr";
import Scene from "./Scene";
import {Circle, Vec2, World} from "../libs/planck-wrapper";
import {Container, Emitter, Graphics, resources, Sprite, Text, TextStyle, Texture} from "../libs/pixi-wrapper";

import Road from "../item/Road";
import Item from "../item/Item";
import GoldCoin from "../item/GoldCoin";
import AccGem from "../item/AccGem";
import SmallFireWall from "../item/SmallFireWall";
import BigFireWall from "../item/BigFireWall";
import BlackBird from "../item/BlackBird";

export default class GameScene extends Scene {
    onCreate() {
        this.registerEvent("Restart", this.onRestart);
        this.registerEvent("Continue", this.onContinue);
        this.registerEvent("AteItem", this.onAteItem);

        window.addEventListener("keydown", this.onKeydown.bind(this));

        this.gameContainer = new Container();
        this.addChild(this.gameContainer);
        let scale = App.sceneHeight / Config.designHeight;
        this.gameContainer.scale.set(scale, scale);
        this.gameContainer.x = (App.sceneWidth - scale * Config.designWidth) / 2;
        this.gameContainer.interactive = true;
        this.gameContainer.buttonMode = true;
        this.gameContainer.on("pointerdown", this.onClickGameContainer.bind(this));

        if (RunOption.debug) {
            let scale = 0.5;
            this.gameContainer.scale.set(scale, scale);
            this.gameContainer.position.set(this.gameContainer.x + Config.designWidth * (1 - scale) / 2,
                Config.designHeight * (1 - scale) / 2);
        }

        this.cameraContainer = new Container();
        if (Config.enableCameraAutoZoom) {
            this.autoZoomContainer = new Container();
            this.gameContainer.addChild(this.autoZoomContainer);
            this.autoZoomContainer.addChild(this.cameraContainer);
        } else {
            this.gameContainer.addChild(this.cameraContainer);
        }

        this.createBottomMask();

        // this.createFPSText();

        this.createPauseButton();
        this.createDistancePanel();
        this.createDiamondPanel();
        this.createCoinPanel();
        // this.createItemPanel();

        this.createPortableItem();

        this.gameStatus = "end";
        this.gameLoopFunc = this.pause.bind(this);
        App.ticker.add(this.gameLoop.bind(this));
    }

    createPauseButton() {
        let sprite = new Sprite(resources[Config.startImagePath.ui].textures["button-pause.png"]);
        sprite.buttonMode = true;
        sprite.interactive = true;
        sprite.on("pointerdown", this.onClickPauseButton.bind(this));
        this.addChild(sprite);
        this.pauseButton = sprite;
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

    createIconNumPanel(x, y, iconName) {
        let panel = new Sprite(resources[Config.startImagePath.ui].textures["bottom-num.png"]);
        this.addChild(panel);
        panel.position.set(x, y);

        let icon = new Sprite(resources[Config.startImagePath.ui].textures[iconName]);
        panel.addChild(icon);
        icon.anchor.set(0, 0.5);
        icon.scale.set(0.5, 0.5);
        icon.position.set(0, panel.height / 2);

        let text = new Text("123456789");
        panel.addChild(text);
        text.anchor.set(0, 0.5);
        text.position.set(icon.width, panel.height / 2);

        return {panel, icon, text};
    }

    createDistancePanel() {
        let {panel, text} = this.createIconNumPanel(this.pauseButton.width, 0, "text-m.png");
        this.distancePanel = panel;
        this.distanceText = text;
    }

    createDiamondPanel() {
        let {panel, text} = this.createIconNumPanel(this.distancePanel.x + this.distancePanel.width, 0, "icon-diamond.png");
        this.diamondPanel = panel;
        this.diamondeText = text;
    }

    createCoinPanel() {
        let {panel, text} = this.createIconNumPanel(this.diamondPanel.x + this.diamondPanel.width, 0, "icon-coin.png");
        this.coinPanel = panel;
        this.coinText = text;
    }

    onShow() {
        this.updateCoinText(0);

        this.isContactFatalEdge = false;

        this.cameraContainer.removeChildren();
        this.cameraContainer.position.set(0, 0);

        this.birdList = [];
        this.roadList = [];

        this.bikeAccFrame = undefined;

        if (Config.enableCameraAutoZoom) {
            this.autoZoomContainer.scale.set(1, 1);
            this.autoZoomContainer.position.set(0, 0);
        }

        this.initEnvironment();

        App.loadResources(this.getResPathList(), this.onLoadedAllRes.bind(this));
    }

    getResPathList() {
        return [
            Config.bikeAtlasPath,
            Config.finalFlagImagePath,
            Config.goldCoinAniJson,
            Config.accGemAniJson,
            Config.fireWallAniJson,
            Config.birdAniJson,
        ]
            .concat(Utils.values(Config.soundPath))
            .concat(Utils.values(Config.emitterPath))
            .concat(Utils.values(Config.imagePath));
    }

    onRestart() {
        if (this.emitter) {
            this.emitter.destroy();
            this.emitter = undefined;
        }
        this.onShow();
    }

    onContinue() {
        this.onClickPauseButton();
    }

    onLoadedAllRes() {
        this.world = new World({gravity: Vec2(0, this.gravity)});

        this.world.on("begin-contact", this.onBeginContact.bind(this));
        this.world.on("pre-solve", this.onPreSolve.bind(this));

        this.createBg();

        this.closeViewContainer = new Container();
        this.cameraContainer.addChild(this.closeViewContainer);

        this.emitter = new Emitter(
            this.cameraContainer,
            [Texture.fromImage(Config.imagePath.bikeParticle)],
            resources[Config.emitterPath.bike].data
        );
        this.emitter.emit = false;

        if (RunOption.debug) {
            let graphics = new Graphics();
            this.gameContainer.addChild(graphics);
            graphics.lineStyle(10, 0xffd900, 1);
            graphics.moveTo(0, 0);
            graphics.lineTo(Config.designWidth, 0);
            graphics.lineTo(Config.designWidth, Config.designHeight);
            graphics.lineTo(0, Config.designHeight);
            graphics.lineTo(0, 0);
        }

        this.initGameContent();

        this.adjustInitCameraBg();

        this.gameStatus = "play";
        this.gameLoopFunc = this.play.bind(this);

        MusicMgr.pauseBGM();
        MusicMgr.playSound(Config.soundPath.startLevel, () => {
            if (this.gameStatus !== "end") {
                MusicMgr.playBGM(this.bgmPath);
            }
        });
    }

    onBeginContact(contact) {
        let fixtureList = [
            contact.getFixtureA(),
            contact.getFixtureB(),
        ];
        let index = fixtureList.map(fixture => fixture.getBody()).indexOf(this.bikeBody);
        if (index !== -1) {
            fixtureList.splice(index, 1);
            let userData = fixtureList[0].getBody().getUserData();
            if (userData && userData.type === "Road") {
                this.jumping = false;
                this.jumpCount = 0;
            }
            userData = fixtureList[0].getUserData();
            if (userData && userData.isFatal) {
                this.isContactFatalEdge = true;
            }
        }
    }

    onPreSolve(contact) {
        if (this.gameStatus === "end") {
            return contact.setEnabled(false);
        }
        let bodyList = [
            contact.getFixtureA().getBody(),
            contact.getFixtureB().getBody(),
        ];
        let index = bodyList.indexOf(this.bikeBody);
        if (index !== -1) {
            bodyList.splice(index, 1);
            let body = bodyList[0];
            let userData = body.getUserData();
            if (userData) {
                switch (userData.type) {
                    case "AccGem":
                    case "ItemAccGem":
                    case "GoldCoin": {
                        if (body.isAwake()) {
                            EventMgr.dispatchEvent("AteItem", userData.type);
                        }
                        contact.setEnabled(false);
                        body.setAwake(false);
                        body.getUserData().sprite.visible = false;
                        break;
                    }
                    case "BigFireWall":
                    case "SmallFireWall": {
                        this.isContactFatalEdge = true;
                        break;
                    }
                }
            }
        } else if (bodyList.find(b => b.getUserData() && b.getUserData().type === "BlackBird")) {
            contact.setEnabled(false);
        }
    }

    onClickGameContainer() {
        if (this.gameStatus === "play") {
            if (this.jumpCount < Config.jumpCommonMaxCount
                || this.jumpExtraCountdown > 0) {
                let velocity = this.bikeBody.getLinearVelocity();
                this.bikeBody.setLinearVelocity(Vec2(velocity.x, 0));
                this.bikeBody.applyForceToCenter(Vec2(0, this.jumpForce));
                this.bikeSprite.rotation = Utils.angle2radius(Config.bikeJumpingRotation);
                this.jumping = true;
                this.jumpCount += 1;
                this.jumpExtraCountdown = Config.bikeJumpExtraCountdown[this.jumpCount - Config.jumpCommonMaxCount];
                switch (this.jumpCount) {
                    case 1:
                        MusicMgr.playSound(Config.soundPath.firstJump);
                        break;
                    case 2:
                        MusicMgr.playSound(Config.soundPath.secondJump);
                        this.emitter.playOnce();
                        break;
                    default:
                        MusicMgr.playSound(Config.soundPath.extraJump);
                        this.emitter.playOnce();
                }
            }
        }
    }

    onKeydown(event) {
        switch (event.code) {
            case "ArrowUp": {
                this.onClickGameContainer();
                break;
            }
            case "Space": {
                this.onClickPauseButton();
                break;
            }
        }
    }

    onAteItem(type) {
        switch (type) {
            case "GoldCoin": {
                this.updateCoinText(this.coin + 1);
                MusicMgr.playSound(Config.soundPath.eatGoldCoin);
                break;
            }
            case "AccGem": {
                this.accelerateBike();
                MusicMgr.playSound(Config.soundPath.eatAccGem);
                break;
            }
            case "ItemAccGem": {
                this.showPortableItem();
                MusicMgr.playSound(Config.soundPath.eatAccGem);
                break;
            }
        }
    }

    createBottomMask() {
        let canvas = Utils.createLinearGradientMask(Config.designWidth, Config.maskHeight, Config.maskColorStop);
        let texture = Texture.fromCanvas(canvas);
        let sprite = new Sprite(texture);
        sprite.anchor.set(0, 1);
        sprite.position.set(0, Config.designHeight);
        this.gameContainer.addChild(sprite);
    }

    createFPSText() {
        let style = new TextStyle({
            fill: "white",
            stroke: "#ff3300",
            strokeThickness: 1,
        });
        this.fpsText = new Text("FPS:0", style);
        this.fpsText.anchor.set(0, 0);
        this.addChild(this.fpsText);
    }

    createBg() {
        this.bgList = [];
        this.bgTextureList.forEach((texturePath, bgIndex) => {
            let container = new Container();
            this.cameraContainer.addChild(container);
            let texture = resources[texturePath].texture;
            let color = Utils.getTexturePointColor(texture, texture.width - 1, texture.height - 1);
            let bg = {container};
            let scale = this.bgScale[bgIndex];
            for (let i = 0; i < 2; i++) {
                let sprite = new Sprite(texture);
                container.addChild(sprite);
                sprite.scale.set(scale, scale);
                sprite.position.set(i * texture.width * scale, this.bgY[bgIndex]);
                bg[i === 0 ? "before" : "after"] = sprite;
                if (bgIndex === this.bgTextureList.length - 1) {
                    let graphics = new Graphics();
                    graphics.beginFill(color);
                    graphics.drawRect(0, 0, texture.width, Config.bgOffsetHeight);
                    graphics.endFill();
                    sprite.addChild(graphics);
                    graphics.position.set(0, texture.height);
                } else {
                    let graphics = new Graphics();
                    graphics.beginFill(color);
                    graphics.drawRect(0, 0, texture.width, Config.designHeight);
                    graphics.endFill();
                    sprite.addChild(graphics);
                    graphics.position.set(0, texture.height);
                }
            }
            this.bgList.push(bg);
        });
    }

    createPart(data) {
        let type = GameUtils.getItemType(data);
        switch (type) {
            case "Road": {
                let path = data.props.points.split(",").map((intStr, i) => {
                    let value = parseInt(intStr);
                    if (i % 2 === 0) {
                        value += data.props.x;
                    } else {
                        value += data.props.y;
                    }
                    return value;
                });
                let road = new Road(this.world, path, this.sideTexture, this.topTexture,);
                this.roadList.push(road);
                this.closeViewContainer.addChild(road.sprite);
                break;
            }
            case "GoldCoin": {
                let item = new GoldCoin(data, this.world);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
            case "AccGem": {
                let item = new AccGem(data, this.world);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
            case "BigFireWall": {
                let item = new BigFireWall(data, this.world);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
            case "SmallFireWall": {
                let item = new SmallFireWall(data, this.world);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
            case "BlackBird": {
                let item = new BlackBird(data, this.world);
                this.birdList.push(item);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
            case "ItemAccGem": {
                let item = new Item(data, this.world);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
            default : {
                let item = new Item(data, this.world);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
        }
    }

    createBike(pp) {
        let rp = GameUtils.physicsPos2renderPos(pp);

        let texture = resources[Config.bikeAtlasPath].textures["0"];
        this.bikeSprite = new Sprite(texture);
        this.closeViewContainer.addChild(this.bikeSprite);
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.scale.set(Config.bikeScale, Config.bikeScale);
        this.bikeSprite.position.set(rp.x, rp.y);

        this.bikeBody = this.world.createDynamicBody();
        this.bikeBody.createFixture(Circle(Config.bikeRadius), {density: Config.bikeDensity, friction: 1,});
        this.bikeBody.setPosition(pp);
        this.bikeBody.setLinearVelocity(Vec2(this.bikeCommonVelocity, 0));

        this.jumpCount = 0;
        this.bikeFrameCount = Utils.keys(resources[Config.bikeAtlasPath].textures).length;
        this.bikeFrame = 0;

        this.bikeAccSprite = new Sprite();
        this.bikeAccSprite.visible = false;
        this.closeViewContainer.addChild(this.bikeAccSprite);
        this.bikeAccSprite.anchor.set(0.5, 1);
    }

    gameLoop(delta) {
        this.gameLoopFunc(delta);
    }

    play(delta) {
        if (this.fpsText) {
            this.fpsText.text = `FPS:${Math.floor(delta * Config.fps)}`;
        }

        this.world.step(1 / Config.fps);

        let velocity = this.bikeBody.getLinearVelocity();
        let bikePhysicsPos = this.bikeBody.getPosition();

        this.syncBikeSprite(velocity, bikePhysicsPos);

        this.syncBirdSprite();

        this.judgeGameLose(velocity, bikePhysicsPos);

        this.judgeGameWin(bikePhysicsPos);

        this.moveCamera();

        this.scrollBg();

        this.cleanPartOutOfView();

        if (this.dynamicCreateRoad) {
            this.dynamicCreateRoad();
        }

        this.keepBikeMove(velocity);

        this.keepBirdMove();

        this.jumpExtraCountdown -= 1;

        if (Config.enableCameraAutoZoom) {
            this.autoZoomCamera();
        }

        if (this.bikeSprite) {
            this.emitter.updateOwnerPos(this.bikeSprite.x, this.bikeSprite.y);
            this.emitter.update(delta / 60);
        }
    }

    pause() {
    }

    updateCoinText(score) {
        this.coin = score;
        this.coinText.text = this.coin;
    }

    accelerateBike() {
        this.bikeAccFrame = Config.accFrame;
    }

    syncBikeSprite(velocity, bikePhysicsPos) {
        let bikeRenderPos = GameUtils.physicsPos2renderPos(bikePhysicsPos);
        this.bikeSprite.position.set(bikeRenderPos.x, bikeRenderPos.y);
        if (this.gameStatus === "end") {
            this.bikeSprite.rotation = this.bikeBody.getAngle();
            this.bikeAccSprite.visible = false;
        } else {
            if (this.bikeAccFrame !== undefined) {
                this.bikeAccSprite.visible = true;
                if (this.bikeAccFrame <= 5 * Config.fps) {
                    this.bikeAccSprite.texture = resources[Config.startImagePath.ui].textures[`cd-${Math.ceil(this.bikeAccFrame / Config.fps)}.png`];
                    this.bikeAccSprite.position.set(this.bikeSprite.x, this.bikeSprite.y - this.bikeSprite.height / 2);
                } else {
                    this.bikeAccSprite.texture = resources[Config.startImagePath.ui].textures["speed-up.png"];
                    this.bikeAccSprite.position.set(this.bikeSprite.x + 32, this.bikeSprite.y - this.bikeSprite.height / 2);
                }
            } else {
                this.bikeAccSprite.visible = false;
            }
            if (!this.jumping) {
                this.bikeSprite.rotation = -Math.atan(velocity.y / velocity.x);
                this.bikeFrame += 1;
                if (this.bikeFrame >= this.bikeFrameCount) {
                    this.bikeFrame = 0;
                }
                this.bikeSprite.texture = resources[Config.bikeAtlasPath].textures[`${this.bikeFrame}`];
            }
        }
    }

    judgeGameLose(velocity, bikePhysicsPos) {
        if (this.gameStatus === "play") {
            let lowestRoadTopY = this.findLowestRoadTopY();
            if (bikePhysicsPos.y < GameUtils.renderY2PhysicsY(lowestRoadTopY) - Config.bikeGameOverOffsetHeight) {
                this.gameStatus = "end";
                App.showScene("GameOverScene", "Game Over");
            }
        }
        if (this.gameStatus === "play" && this.isContactFatalEdge) {
            this.gameStatus = "end";
            this.bikeBody.setLinearVelocity(Vec2(0, 0));
            this.bikeBody.setAngularVelocity(Config.bikeGameOverAngularVelocity);
            this.bikeBody.applyForceToCenter(Vec2(-5000, 10000));
            App.showScene("GameOverScene", "Game Over");
        }
    }

    judgeGameWin(bikePhysicsPos) {
        if (this.gameStatus === "play"
            && this.finalPoint
            && bikePhysicsPos.x > GameUtils.renderPos2PhysicsPos(this.finalPoint).x) {
            this.gameStatus = "win";
            App.showScene("GameOverScene", "Game Win");
        }
    }

    moveCamera() {
        if (this.gameStatus === "play") {
            let oldCameraX = this.cameraContainer.x;
            let oldCameraY = this.cameraContainer.y;

            this.cameraContainer.x = Config.bikeLeftMargin - this.bikeSprite.x;

            let bikeY = this.cameraContainer.y + this.bikeSprite.y;
            if (bikeY < Config.bikeCameraMinY) {
                this.cameraContainer.y = Config.bikeCameraMinY - this.bikeSprite.y;
            } else if (bikeY > Config.bikeCameraMaxY) {
                this.cameraContainer.y = Config.bikeCameraMaxY - this.bikeSprite.y;
            }

            let cameraMoveX = this.cameraContainer.x - oldCameraX;
            let cameraMoveY = this.cameraContainer.y - oldCameraY;

            let lastIndex = this.bgList.length - 1;
            let lastBg = this.bgList[lastIndex];
            let bgY = this.bgY[lastIndex];
            let scale = this.bgScale[lastIndex];
            let bgOriginHeight = lastBg.before.height + (lastBg.before.children[0] ? lastBg.before.children[0].height : 0);
            let bgHeight = bgY + bgOriginHeight * scale;
            let vpd = this.verticalParallaxDepth[lastIndex] === undefined ? 1 : this.verticalParallaxDepth[lastIndex];
            if (lastBg.container.y + bgHeight - vpd * cameraMoveY < Config.designHeight - this.cameraContainer.y
                || lastBg.container.y + Config.bgMinHeightInView - vpd * cameraMoveY > Config.designHeight - this.cameraContainer.y) {
                this.bgList.forEach((bg, index) => {
                    let hpd = this.horizontalParallaxDepth[index] === undefined ? 1 : this.horizontalParallaxDepth[index];
                    bg.container.position.x -= cameraMoveX * hpd;
                    bg.container.position.y -= cameraMoveY;
                });
            } else {
                this.bgList.forEach((bg, index) => {
                    let hpd = this.horizontalParallaxDepth[index] === undefined ? 1 : this.horizontalParallaxDepth[index];
                    let vpd = this.verticalParallaxDepth[index] === undefined ? 1 : this.verticalParallaxDepth[index];
                    bg.container.position.x -= cameraMoveX * hpd;
                    bg.container.position.y -= cameraMoveY * vpd;
                });
            }
        }
    }

    findLowestRoadTopY() {
        let list = this.roadList;
        let viewLeft = -this.cameraContainer.x;
        let viewRight = -this.cameraContainer.x + Config.designWidth;
        let lowestRoadTopY;
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            if (item.getRightBorderX() > viewLeft) {
                lowestRoadTopY = item.getLowestTopY();
                for (; i < list.length; i++) {
                    item = list[i];
                    if (item.getLeftBorderX() >= viewRight) {
                        break;
                    } else {
                        let y = item.getLowestTopY();
                        if (y > lowestRoadTopY) {
                            lowestRoadTopY = y;
                        }
                    }
                }
                break;
            }
        }
        return lowestRoadTopY;
    }

    scrollBg() {
        this.bgList.forEach((item, index) => {
            if (item.container.x + item.before.x + item.before.width * this.bgScale[index] < -this.cameraContainer.x) {
                item.before.x = item.after.x + item.after.width * this.bgScale[index];
                let temp = item.before;
                item.before = item.after;
                item.after = temp;
            }
        });
    }

    cleanPartOutOfView() {
        this.closeViewContainer.children.forEach(child => {
            if (child.part && child.part.getRightBorderX() < -this.cameraContainer.x) {
                child.part.destroy();
                if (child.part instanceof Road) {
                    Utils.removeItemFromArray(this.roadList, child.part);
                } else if (child.part instanceof BlackBird) {
                    Utils.removeItemFromArray(this.birdList, child.part);
                }
            }
        });
    }

    keepBikeMove(velocity) {
        if (this.gameStatus === "play") {
            if (this.bikeAccFrame !== undefined) {
                if (this.bikeAccFrame === 0) {
                    this.bikeAccFrame = undefined;
                    this.bikeBody.setLinearVelocity(Vec2(this.bikeCommonVelocity, velocity.y));
                } else {
                    this.bikeBody.setLinearVelocity(Vec2(this.bikeAccVelocity, velocity.y));
                    this.bikeAccFrame--;
                }
            } else {
                this.bikeBody.setLinearVelocity(Vec2(this.bikeCommonVelocity, velocity.y));
            }
        }
    }

    syncBirdSprite() {
        this.birdList.forEach(bird => {
            let pos = GameUtils.physicsPos2renderPos(bird.body.getPosition());
            bird.sprite.position.set(pos.x, pos.y);
        });
    }

    keepBirdMove() {
        this.birdList.forEach(bird => {
            let rp = GameUtils.physicsPos2renderPos(bird.body.getPosition());
            if (-this.cameraContainer.x + Config.designWidth >= rp.x - bird.sprite.texture.width / 2) {
                if (!bird.showed) {
                    MusicMgr.playSound(Config.soundPath.birdAppear);
                }
                bird.showed = true;
                let velocity = bird.body.getLinearVelocity();
                bird.body.setLinearVelocity(Vec2(-20, velocity.y));
                let gravity = -6.25 * this.gravity;
                if (bird.body.getPosition().y < bird.baseY) {
                    bird.body.applyForceToCenter(Vec2(0, gravity * 5));
                } else {
                    bird.body.applyForceToCenter(Vec2(0, gravity * 0.75));
                }
            }
        });
    }

    initGameContent() {

    }

    initEnvironment() {

    }

    autoZoomCamera() {
        if (this.gameStatus === "play") {
            let baseX = Config.bikeLeftMargin;
            let baseY = Config.designHeight / 2;
            let stepScale = Config.cameraAutoZoomScaleSpeed;
            let vx = this.bikeBody.getLinearVelocity().x;
            let targetScale = vx === this.bikeCommonVelocity ? Config.cameraAutoZoomCommonScale : 1;
            let curScale = this.autoZoomContainer.scale.x;
            let diff = targetScale - curScale;
            let scale;
            if (diff < 0) {
                scale = curScale - stepScale;
                if (scale < targetScale) {
                    scale = targetScale;
                }
            } else if (diff === 0) {
                scale = curScale;
            } else {
                scale = curScale + stepScale;
                if (scale > targetScale) {
                    scale = targetScale;
                }
            }
            this.autoZoomContainer.scale.set(scale, scale);
            this.autoZoomContainer.position.set(baseX - baseX * scale, baseY - baseY * scale);
        }
    }

    adjustInitCameraBg() {
        this.cameraContainer.x = Config.bikeLeftMargin - this.bikeSprite.x;

        let bikeY = this.cameraContainer.y + this.bikeSprite.y;
        if (bikeY < Config.bikeCameraMinY) {
            this.cameraContainer.y = Config.bikeCameraMinY - this.bikeSprite.y;
        } else if (bikeY > Config.bikeCameraMaxY) {
            this.cameraContainer.y = Config.bikeCameraMaxY - this.bikeSprite.y;
        }

        this.bgList.forEach((bg) => {
            bg.container.position.x = -this.cameraContainer.y;
            bg.container.position.y = -this.cameraContainer.y;
        });
    }

    createPortableItem() {
        this.portableItemButtonList = [];
        for (let i = 0; i < 2; i++) {
            let sprite = new Sprite(resources[Config.startImagePath.ui].textures["bottom-item.png"]);
            this.addChild(sprite);
            sprite.anchor.set(0.5, 0.5);
            let [x, y] = Config.portableItemButtonPosList[i];
            sprite.position.set(x, App.sceneHeight - y);
            sprite.buttonMode = true;
            sprite.interactive = true;
            sprite.on("pointerdown", () => this.onClickPortableItem(i));
            this.portableItemButtonList.push(sprite);
        }
    }

    onClickPortableItem(i) {
        let button = this.portableItemButtonList[i];
        if (button.children.length !== 0) {
            this.accelerateBike();
            button.removeChildren();
        }
    }

    showPortableItem() {
        this.portableItemButtonList.some(button => {
            if (button.children.length === 0) {
                let sprite = new Sprite(resources[Config.imagePath.itemAccGem].texture);
                button.addChild(sprite);
                sprite.anchor.set(0.5, 0.5);
                sprite.position.set(0, 0);
                return true;
            }
        });
    }
}
