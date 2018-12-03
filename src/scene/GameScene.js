import Config from "../config";
import {App} from "../main";
import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";
import EventMgr from "../mgr/EventMgr";
import Scene from "./Scene";
import {Circle, Vec2, World} from "../libs/planck-wrapper";
import {Container, resources, Sprite, Text, TextStyle, Texture} from "../libs/pixi-wrapper";

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
        this.registerEvent("AteItem", this.onAteItem);

        window.addEventListener("keydown", this.onKeydown.bind(this));

        this.gameContainer = new Container();
        this.addChild(this.gameContainer);
        let scale = App.sceneHeight / Config.designHeight;
        this.gameContainer.scale.set(scale, scale);
        this.gameContainer.position.set.x = (App.sceneWidth - scale * Config.designWidth) / 2;
        this.gameContainer.interactive = true;
        this.gameContainer.buttonMode = true;
        this.gameContainer.on("pointerdown", this.onClickGameContainer.bind(this));

        this.cameraContainer = new Container();
        this.gameContainer.addChild(this.cameraContainer);

        this.createBottomMask();

        this.createFPSText();

        this.createScoreText();

        this.gameStatus = "end";
        this.gameLoopFunc = this.pause.bind(this);
        App.ticker.add(this.gameLoop.bind(this));
    }

    onShow() {
        this.updateScoreText(0);

        this.isContactFatalEdge = false;

        this.cameraContainer.removeChildren();
        this.cameraContainer.position.set(0, 0);

        this.birdList = [];

        this.bikeAccFrame = undefined;

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
        ];
    }

    onRestart() {
        this.onShow();
    }

    onLoadedAllRes() {
        this.world = new World({gravity: Vec2(0, this.gravity)});

        this.world.on("begin-contact", this.onBeginContact.bind(this));
        this.world.on("pre-solve", this.onPreSolve.bind(this));

        this.createBg();

        this.closeViewContainer = new Container();
        this.cameraContainer.addChild(this.closeViewContainer);

        this.initGameContent();

        this.gameStatus = "play";
        this.gameLoopFunc = this.play.bind(this);
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
            if (this.jumpCount < Config.jumpMaxCount) {
                let velocity = this.bikeBody.getLinearVelocity();
                this.bikeBody.setLinearVelocity(Vec2(velocity.x, 0));
                this.bikeBody.applyForceToCenter(Vec2(0, this.jumpForce));
                this.bikeSprite.rotation = Utils.angle2radius(Config.bikeJumpingRotation);
                this.jumping = true;
                this.jumpCount += 1;
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
                if (this.gameStatus === "play") {
                    this.gameLoopFunc = this.pause.bind(this);
                    this.gameStatus = "pause";
                } else if (this.gameStatus === "pause") {
                    this.gameLoopFunc = this.play.bind(this);
                    this.gameStatus = "play";
                }
                break;
            }
        }
    }

    onAteItem(type) {
        switch (type) {
            case "GoldCoin": {
                this.updateScoreText(this.score + 1);
                break;
            }
            case "AccGem": {
                this.accelerateBike();
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

    createScoreText() {
        let style = new TextStyle({
            fill: "white",
            stroke: "#ff3300",
            strokeThickness: 1,
        });
        this.scoreText = new Text("", style);
        this.scoreText.anchor.set(1, 0);
        this.scoreText.position.set(App.sceneWidth, 0);
        this.addChild(this.scoreText);
    }

    createBg() {
        this.bgList = [];
        this.bgTextureList.forEach((texturePath, bgIndex) => {
            let container = new Container();
            this.cameraContainer.addChild(container);
            let texture = resources[texturePath].texture;
            let bg = {container};
            for (let i = 0; i < 2; i++) {
                let sprite = new Sprite(texture);
                container.addChild(sprite);
                sprite.position.set(i * texture.width, this.bgY[bgIndex]);
                bg[i === 0 ? "before" : "after"] = sprite;
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
                let maxY = path[1];
                for (let i = 1; i < path.length; i += 2) {
                    if (path[i] > maxY) {
                        maxY = path[i];
                    }
                }
                let bottomY = maxY + App.sceneHeight / 3 * 2;
                path = [path[0], bottomY]
                    .concat(path)
                    .concat([path[path.length - 2], bottomY]);
                let road = new Road(this.world, path, this.sideTexture, this.topTexture,);
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
            default : {
                let item = new Item(data, this.world);
                this.closeViewContainer.addChild(item.sprite);
                break;
            }
        }
    }

    createBike(pp) {
        let rp = GameUtils.physicsPos2renderPos(pp);

        this.bikeSprite = new Sprite(resources[Config.bikeAtlasPath].textures["0"]);
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
    }

    gameLoop(delta) {
        this.gameLoopFunc(delta);
    }

    play(delta) {
        this.fpsText.text = `FPS:${Math.floor(delta * Config.fps)}`;

        this.world.step(1 / Config.fps);

        let velocity = this.bikeBody.getLinearVelocity();
        let bikePhysicsPos = this.bikeBody.getPosition();

        this.syncBikeSprite(velocity, bikePhysicsPos);

        this.syncBirdSprite();

        this.judgeGameLose(velocity, bikePhysicsPos);

        this.judgeGameWin(bikePhysicsPos);

        this.moveCamera();

        this.moveBg();

        this.cleanPartOutOfView();

        if (this.dynamicCreateRoad) {
            this.dynamicCreateRoad();
        }

        this.keepBikeMove(velocity);

        this.keepBirdMove();
    }

    pause() {
    }

    updateScoreText(score) {
        this.score = score;
        this.scoreText.text = `SCORE:${this.score}`;
    }

    accelerateBike() {
        this.bikeAccFrame = 0;
    }

    syncBikeSprite(velocity, bikePhysicsPos) {
        let bikeRenderPos = GameUtils.physicsPos2renderPos(bikePhysicsPos);
        this.bikeSprite.position.set(bikeRenderPos.x, bikeRenderPos.y);
        if (this.gameStatus === "end") {
            this.bikeSprite.rotation = this.bikeBody.getAngle();
        } else if (!this.jumping) {
            this.bikeSprite.rotation = -Math.atan(velocity.y / velocity.x);

            this.bikeFrame += 1;
            if (this.bikeFrame >= this.bikeFrameCount) {
                this.bikeFrame = 0;
            }
            this.bikeSprite.texture = resources[Config.bikeAtlasPath].textures[`${this.bikeFrame}`];
        }
    }

    judgeGameLose(velocity, bikePhysicsPos) {
        if (this.gameStatus === "play" && bikePhysicsPos.y < Config.bikeGameOverHeight) {
            this.gameStatus = "end";
            App.showScene("GameOverScene", "Game Over");
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
            let oldCameraX = this.cameraContainer.position.x;
            let oldCameraY = this.cameraContainer.position.y;

            this.cameraContainer.position.x = Config.bikeLeftMargin - this.bikeSprite.position.x;

            let bikeY = this.cameraContainer.position.y + this.bikeSprite.position.y;
            if (bikeY < Config.bikeCameraMinY) {
                this.cameraContainer.position.y = Config.bikeCameraMinY - this.bikeSprite.position.y;
            } else if (bikeY > Config.bikeCameraMaxY) {
                this.cameraContainer.position.y = Config.bikeCameraMaxY - this.bikeSprite.position.y;
            }

            let cameraMoveX = this.cameraContainer.position.x - oldCameraX;
            let cameraMoveY = this.cameraContainer.position.y - oldCameraY;

            this.cameraContainer.children.forEach((child, index) => {
                child.position.x -= cameraMoveX * this.horizontalParallaxDepth[index];
                child.position.y -= cameraMoveY * this.verticalParallaxDepth[index];
            });
        }
    }

    moveBg() {
        this.bgList.forEach(item => {
            if (item.container.x + item.before.x + item.before.width < -this.cameraContainer.x) {
                item.before.position.x = item.after.x + item.after.width;
                let temp = item.before;
                item.before = item.after;
                item.after = temp;
            }
        });
    }

    cleanPartOutOfView() {
        this.closeViewContainer.children.forEach(child => {
            if (child.part && child.part.getRightBorderX() < -this.cameraContainer.position.x) {
                child.part.destroy();
            }
        });
    }

    keepBikeMove(velocity) {
        if (this.gameStatus === "play") {
            if (this.bikeAccFrame !== undefined) {
                if (this.bikeAccFrame >= Config.accFrame) {
                    this.bikeAccFrame = undefined;
                    this.bikeBody.setLinearVelocity(Vec2(this.bikeCommonVelocity, velocity.y));
                } else {
                    this.bikeBody.setLinearVelocity(Vec2(this.bikeAccVelocity, velocity.y));
                    this.bikeAccFrame++;
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
            if (-this.cameraContainer.position.x + Config.designWidth >= rp.x - bird.sprite.texture.width / 2) {
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
}
