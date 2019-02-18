import Config from "../config";
import RunOption from "../../run-option";
import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";
import EventMgr from "../mgr/EventMgr";
import MusicMgr from "../mgr/MusicMgr";
import DataMgr from "../mgr/DataMgr";
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
import GroundStab from "../item/GroundStab";
import UpDownPlatform from "../item/UpDownPlatform";
import Road2 from "../item/Road2";
import DeadLine from "../item/DeadLine";
import RollingStone from "../item/RollingStone";
import EditorItem from "../item/EditorItem";

export default class GameScene extends Scene {
    onCreate() {
        this.initContactHandleTable();

        this.registerEvent("Restart", this.onRestart);
        this.registerEvent("Reborn", this.onReborn);
        this.registerEvent("AteItem", this.onAteItem);

        window.addEventListener("keydown", this.onKeydown.bind(this));

        this.gameContainer = new Container();
        this.addChildAt(this.gameContainer, 0);
        let scale = App.sceneHeight / Config.designHeight;
        this.gameContainer.scale.set(scale, scale);
        this.gameContainer.x = (App.sceneWidth - scale * Config.designWidth) / 2;
        this.gameContainer.interactive = true;
        this.gameContainer.buttonMode = true;
        this.gameContainer.on("pointerdown", this.onClickGameContainer.bind(this));
        this.gameContainer.on("pointermove", this.onPointerMove.bind(this));
        this.gameContainer.on("pointerup", this.onPointerUp.bind(this));
        this.gameContainer.on("pointerupoutside", this.onPointerUp.bind(this));

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

        this.ui.pauseButton.visible = false;
        this.ui.surrenderButton.visible = false;
        this.onClick(this.ui.confirmButton, this.onClickConfirmButton.bind(this));
        this.ui.rebornPanel.visible = false;
        this.portableItemButtonList = [1, 2].map(i => this.ui[`portableItemButton${i}`]);
        this.portableItemButtonList.forEach((button, i) => this.onClick(button, () => this.onClickPortableItem(i)));

        this.gameStatus = "end";
        this.gameLoopFunc = this.pause.bind(this);
        App.ticker.add(this.gameLoop.bind(this));

        this.ui.matchRacetrack.visible = false;
    }

    onShow() {
        clearTimeout(this.deadCompleteTimer);

        this.distance = 0;
        this.ui.diamondText.text = 0;
        this.updateCoinText(0);

        this.isContactFatalEdge = false;

        this.dragBackPos = undefined;
        this.startDragBikeBack = undefined;
        this.startAdjustBikeHeight = undefined;
        this.startY = undefined;
        this.startFloat = undefined;
        this.bikeFloatFrame = undefined;

        this.cameraContainer.removeChildren();
        this.cameraContainer.position.set(0, 0);

        this.birdList = [];
        this.roadList = [];
        this.itemList = [];

        this.portableItemButtonList.forEach(button => button.children.length === 2 && button.removeChildAt(1));

        if (Config.enableCameraAutoZoom) {
            this.autoZoomContainer.scale.set(1, 1);
            this.autoZoomContainer.position.set(0, 0);
        }

        this.initEnvironment();

        App.loadResources(this.getResPathList(), this.onLoadedBaseRes.bind(this));
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
            .concat(Utils.values(Config.sceneItemImagePath))
            .concat(Utils.values(Config.emitterPath))
            .concat(Utils.values(Config.imagePath))
            .concat(Utils.values(Config.bikeJumpingAnimation).map(item => item.atlasPath));
    }

    onRestart() {
        if (this.emitter) {
            this.emitter.destroy();
            this.emitter = undefined;
        }
        this.enemyList.forEach(enemy => enemy.destroy());
        this.itemList.forEach(item => item.destroy && item.destroy());
        this.onShow();
    }

    onReborn() {
        this.startDragBikeBack = true;
        this.rebornDragVelocity = Utils.calcPointDistance(this.bikeBody.getPosition(), this.dragBackPos) / Config.rebornDragDuration / Config.fps;
        this.bikeBubbleSprite.visible = true;
        this.bikeBody.setStatic();
        this.bikeBody.setAngle(0);
        this.bikeSprite.rotation = 0;
        this.gameLoopFunc = this.play.bind(this);
    }

    onLoadedGameRes() {
        this.world = new World({gravity: Vec2(0, this.gravity)});

        this.world.on("begin-contact", this.onBeginContact.bind(this));
        this.world.on("pre-solve", this.onPreSolve.bind(this));

        this.createBg();

        this.closeViewContainer = this.cameraContainer.addChild(new Container());
        this.road2Container = this.closeViewContainer.addChild(new Container());
        this.underBikeContianer = this.closeViewContainer.addChild(new Container());
        this.bikeContainer = this.closeViewContainer.addChild(new Container());

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
            MusicMgr.playBGM(this.bgmPath);
        });
    }

    initContactHandleTable() {
        this.chtable = {
            player: {
                is: (fixture) => {
                    return fixture.getBody() === this.bikeBody;
                },
                preSolve: (contact, anotherFixture,) => {
                    if (this.gameStatus === "end") {
                        return contact.setEnabled(false);
                    }
                    if (this.chtable.enemy.is(anotherFixture)) {
                        contact.setEnabled(false);
                    } else if (this.chtable.item.is(anotherFixture)) {
                        contact.setEnabled(false);
                        let body = anotherFixture.getBody();
                        let ud = body.getUserData();
                        if (ud.sprite.visible) {
                            ud.sprite.visible = false;
                            EventMgr.dispatchEvent("AteItem", body.getUserData().type);
                        }
                    } else if (this.chtable.npc.is(anotherFixture)) {
                        contact.setEnabled(false);
                        this.isContactFatalEdge = true;
                    } else if (this.chtable.road2.is(anotherFixture)) {
                        let {p1, p2} = anotherFixture.getUserData();
                        if (Utils.getDistanceFromPointToLine(this.bikeBody.getPosition(), p1, p2) < Config.bikeRadius - Config.pixel2meter) {
                            contact.setEnabled(false);
                        }
                    }
                },
                beginContact(contact, anotherFixture,) {
                    let ud = anotherFixture.getUserData();
                    if (this.chtable.road.is(anotherFixture) || (ud && ud.resetJumpStatus)) {
                        this.resetJumpStatus();
                    }
                    if (this.chtable.obstacle.is(anotherFixture)) {
                        this.isContactFatalEdge = true;
                    } else {
                        let ud = anotherFixture.getUserData();
                        if (ud && ud.isFatal) {
                            this.isContactFatalEdge = true;
                        }
                    }
                },
            },
            enemy: {
                is: (fixture) => {
                    let ud = fixture.getBody().getUserData();
                    if (ud) {
                        return this.enemyList.find(enemy => enemy === ud);
                    }
                },
                preSolve: (contact, anotherFixture, selfFixture) => {
                    selfFixture.getBody().getUserData().onPreSolve(contact, anotherFixture, selfFixture);
                },
                beginContact(contact, anotherFixture, selfFixture) {
                    selfFixture.getBody().getUserData().onBeginContact(contact, anotherFixture, selfFixture);
                }
            },
            npc: {
                is: (fixture) => {
                    let ud = fixture.getBody().getUserData();
                    if (ud) {
                        return ud.type === "BlackBird";
                    }
                },
                preSolve: (contact,) => {
                    contact.setEnabled(false);
                },
            },
            road: {
                is: (fixture) => {
                    let ud = fixture.getBody().getUserData();
                    if (ud) {
                        return ud.type === "Road";
                    }
                },
            },
            road2: {
                is: (fixture) => {
                    let ud = fixture.getBody().getUserData();
                    if (ud) {
                        return ud.type === "Road2";
                    }
                },
            },
            item: {
                is: (fixture) => {
                    let ud = fixture.getBody().getUserData();
                    if (ud) {
                        return ["AccGem", "ItemAccGem", "GoldCoin",].find(type => type === ud.type);
                    }
                },
            },
            obstacle: {
                is: (fixture) => {
                    let ud = fixture.getBody().getUserData();
                    if (ud) {
                        return ["BigFireWall", "SmallFireWall"].find(type => type === ud.type);
                    }
                }
            },
            editorItem: {
                is: (fixture) => {
                    let ud = fixture.getBody().getUserData();
                    return ud && ud instanceof EditorItem;
                },
                preSolve(contact, anotherFixture, selfFixture) {
                    selfFixture.getBody().getUserData().onPreSolve(contact, anotherFixture, selfFixture);
                },
                beginContact(contact, anotherFixture, selfFixture) {
                    selfFixture.getBody().getUserData().onBeginContact(contact, anotherFixture, selfFixture);
                }
            }
        };
    }

    onPreSolve(contact) {
        let fa = contact.getFixtureA();
        let fb = contact.getFixtureB();
        for (let type in this.chtable) {
            if (this.chtable.hasOwnProperty(type)) {
                let item = this.chtable[type];
                if (item.preSolve) {
                    if (item.is(fa)) {
                        this.callByScene(item.preSolve, contact, fb, fa);
                    } else if (item.is(fb)) {
                        this.callByScene(item.preSolve, contact, fa, fb);
                    }
                }
            }
        }
    }

    onBeginContact(contact) {
        let fa = contact.getFixtureA();
        let fb = contact.getFixtureB();
        for (let type in this.chtable) {
            if (this.chtable.hasOwnProperty(type)) {
                let item = this.chtable[type];
                if (item.beginContact) {
                    if (item.is(fa)) {
                        this.callByScene(item.beginContact, contact, fb, fa);
                    } else if (item.is(fb)) {
                        this.callByScene(item.beginContact, contact, fa, fb);
                    }
                }
            }
        }
    }

    callByScene(handle, ...args) {
        handle.bind(this)(...args);
    }

    onClickGameContainer(event) {
        if (this.gameStatus === "play") {
            if (this.startFloat) {
                this.startFloat = false;
                this.bikeBubbleSprite.visible = false;
            } else if (this.jumpCount < Config.jumpCommonMaxCount
                || this.jumpExtraCountdown > 0) {
                let velocity = this.bikeBody.getLinearVelocity();
                this.bikeBody.setLinearVelocity(Vec2(velocity.x, 0));
                this.bikeBody.applyForceToCenter(Vec2(0, this.jumpForce));
                this.jumping = true;
                this.jumpCount++;
                this.jumpExtraCountdown = this.bikeJumpExtraCountdown[this.jumpCount - Config.jumpCommonMaxCount];
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
                let jumpAnimation = Config.bikeJumpingAnimation[this.jumpCount];
                if (jumpAnimation === undefined) {
                    let lastKey;
                    for (let count in Config.bikeJumpingAnimation) {
                        lastKey = count;
                    }
                    if (lastKey && this.jumpCount > lastKey) {
                        jumpAnimation = Config.bikeJumpingAnimation[lastKey];
                    }
                }
                if (jumpAnimation) {
                    this.jumpingAnimationFrames = GameUtils.getFrames(jumpAnimation.atlasPath);
                    this.jumpingAnimationIndex = 0;
                    this.jumpingAnimationInterval = jumpAnimation.interval;
                } else {
                    this.bikeSprite.rotation = Utils.angle2radius(Config.bikeJumpingRotation);
                    this.jumpingAnimationFrames = undefined;
                    this.jumpingAnimationIndex = undefined;
                }
            }
        } else if (this.gameStatus === "end" && this.startAdjustBikeHeight) {
            this.startY = event.data.global.y;
        }
    }

    onKeydown(event) {
        switch (event.code) {
            case "ArrowUp": {
                this.onClickGameContainer();
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
                this.underBikeContianer.addChild(road.sprite);
                break;
            }
            case "Road2": {
                let path = data.props.points.split(",").map((intStr, i) => {
                    let value = parseInt(intStr);
                    if (i % 2 === 0) {
                        value += data.props.x;
                    } else {
                        value += data.props.y;
                    }
                    return value;
                });
                let road2 = new Road2(this.road2Container, this.world, path, this.sideTexture2, this.topTexture2);
                this.roadList.push(road2);
                break;
            }
            case "GoldCoin": {
                let item = new GoldCoin(data, this.world);
                this.underBikeContianer.addChild(item.sprite);
                break;
            }
            case "AccGem": {
                let item = new AccGem(data, this.world);
                this.underBikeContianer.addChild(item.sprite);
                break;
            }
            case "BigFireWall": {
                let item = new BigFireWall(data, this.world);
                this.underBikeContianer.addChild(item.sprite);
                break;
            }
            case "SmallFireWall": {
                let item = new SmallFireWall(data, this.world);
                this.underBikeContianer.addChild(item.sprite);
                break;
            }
            case "BlackBird": {
                let item = new BlackBird(data, this.world);
                this.birdList.push(item);
                this.underBikeContianer.addChild(item.sprite);
                break;
            }
            case "ItemAccGem": {
                let item = new Item(data, this.world);
                this.underBikeContianer.addChild(item.sprite);
                break;
            }
            case "GroundStab": {
                let item = new GroundStab(this.underBikeContianer, this.world, data);
                this.itemList.push(item);
                break;
            }
            // todo 弄一个比较智能的创建方式
            case "UpDownPlatform": {
                let item = new UpDownPlatform(this, this.underBikeContianer, this.world, data);
                this.itemList.push(item);
                break;
            }
            case "DeadLine": {
                let item = new DeadLine(this.underBikeContianer, this.world, data);
                this.itemList.push(item);
                break;
            }
            case "RollingStone": {
                let item = new RollingStone(this, this.underBikeContianer, this.world, data);
                this.itemList.push(item);
                break;
            }
            default : {
                let item = new Item(data, this.world);
                this.underBikeContianer.addChild(item.sprite);
                break;
            }
        }
    }

    createBike(pp) {
        let rp = GameUtils.physicsPos2renderPos(pp);

        this.bikeSprite = new Sprite();
        this.bikeContainer.addChild(this.bikeSprite);
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.scale.set(Config.bikeScale, Config.bikeScale);
        this.bikeSprite.position.set(rp.x, rp.y);

        let id = DataMgr.get(DataMgr.selectedBike, 0);
        let config = Config.bikeList.find(config => config.id === id);
        this.bikeDecorateSprite = new Sprite(resources[config.imagePath].texture);
        this.bikeSprite.addChild(this.bikeDecorateSprite);
        this.bikeDecorateSprite.anchor.set(...config.anchor);
        this.bikeDecorateSprite.scale.set(...config.scale);
        this.bikeDecorateSprite.position.set(...config.position);

        if (config.velocityPercent) {
            this.playerCommonVelocity = this.bikeCommonVelocity * config.velocityPercent;
            this.playerAccVelocity = this.bikeAccVelocity * config.velocityPercent;
        }
        let density;
        if (config.densityPercent) {
            density = Config.bikeDensity * config.densityPercent;
        } else {
            density = Config.bikeDensity;
        }

        this.bikeBubbleSprite = new Sprite(resources[Config.imagePath.bubble].texture);
        this.bikeSprite.addChild(this.bikeBubbleSprite);
        this.bikeBubbleSprite.anchor.set(0.5, 0.5);
        this.bikeBubbleSprite.scale.set(1 / Config.bikeScale, 1 / Config.bikeScale);
        this.bikeBubbleSprite.visible = false;

        this.bikeBody = this.world.createDynamicBody();
        this.bikeBody.createFixture(Circle(Config.bikeRadius), {density: density, friction: 1,});
        this.bikeBody.setPosition(pp);
        this.bikeBody.setLinearVelocity(Vec2(this.playerCommonVelocity, 0));

        this.bikeJumpExtraCountdown = config.bikeJumpExtraCountdown || Config.bikeJumpExtraCountdown;

        this.resetBikeStatus();
    }

    resetBikeStatus() {
        this.jumpCount = 0;
        this.jumping = false;

        this.isContactFatalEdge = false;

        this.bikeFrames = GameUtils.getFrames(Config.bikeAtlasPath, "bike");
        this.bikeFrame = 0;
        this.bikeSprite.texture = this.bikeFrames[this.bikeFrame];

        this.bikeAccSprite = this.underBikeContianer.addChild(new Sprite());
        this.bikeAccSprite.anchor.set(0.5, 1);
        this.bikeAccSprite.visible = false;
        this.bikeAccFrame = undefined;
    }

    gameLoop(delta) {
        this.gameLoopFunc(delta);
    }

    play(delta) {
        if (this.fpsText) {
            this.fpsText.text = `FPS:${Math.floor(delta * Config.fps)}`;
        }

        let oldX = this.bikeBody.getPosition().x;

        this.world.step(1 / Config.fps);

        let velocity = this.bikeBody.getLinearVelocity();
        let bikePhysicsPos = this.bikeBody.getPosition();

        this.syncBikeSprite(velocity, bikePhysicsPos);

        this.syncBirdSprite();

        this.itemList.forEach(item => item.update && item.update());

        if (this.syncEnemySprite) {
            this.syncEnemySprite();
        }

        this.judgeGameLose(velocity, bikePhysicsPos);

        this.judgeGameWin(bikePhysicsPos);

        this.moveCamera();

        this.scrollBg();

        if (this.dynamicCreateRoad) {
            this.cleanPartOutOfView();
            this.dynamicCreateRoad();
            this.showDistance();
        }

        this.keepBikeMove(velocity);

        this.keepBirdMove();

        if (this.keepEnemyMove) {
            this.keepEnemyMove();
        }

        this.jumpExtraCountdown -= 1;

        if (Config.enableCameraAutoZoom) {
            this.autoZoomCamera();
        }

        if (this.bikeSprite) {
            this.emitter.updateOwnerPos(this.bikeSprite.x, this.bikeSprite.y);
            this.emitter.update(delta / 60);
        }

        if (this.gameStatus === "play") {
            let newX = this.bikeBody.getPosition().x;
            this.distance += newX - oldX;
            this.ui.distanceText.text = Math.floor(this.distance) + "m";
        }

        if (this.startDragBikeBack) {
            this.dragBikeBack();
        }
    }

    pause() {
    }

    updateCoinText(score) {
        this.coin = score;
        this.ui.coinText.text = this.coin;
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
            if (this.startFloat) {
                this.bikeAccSprite.visible = true;
                this.bikeAccSprite.texture = resources[Config.startImagePath.ui].textures[`cd-${Math.ceil(this.bikeFloatFrame / Config.fps)}.png`];
                this.bikeAccSprite.position.set(this.bikeSprite.x, this.bikeSprite.y - this.bikeSprite.height / 2);
            } else if (this.bikeAccFrame !== undefined) {
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
            if (this.jumping) {
                if (this.jumpingAnimationFrames) {
                    this.jumpingAnimationIndex++;
                    let frameIndex = Math.floor(this.jumpingAnimationIndex / this.jumpingAnimationInterval);
                    let frame = this.jumpingAnimationFrames[frameIndex];
                    if (frame === undefined) {
                        frame = this.jumpingAnimationFrames[this.jumpingAnimationFrames.length - 1];
                    }
                    this.bikeSprite.texture = frame;
                }
            } else {
                this.bikeSprite.rotation = -Math.atan(velocity.y / velocity.x);
                this.bikeFrame++;
                if (this.bikeFrame >= this.bikeFrames.length) {
                    this.bikeFrame = 0;
                }
                this.bikeSprite.texture = this.bikeFrames[this.bikeFrame];
            }
        }
    }

    judgeGameLose(velocity, bikePhysicsPos) {
        if (this.gameStatus === "play") {
            let lowestRoadTopY = this.findLowestRoadTopY(-this.cameraContainer.x);
            if (bikePhysicsPos.y < GameUtils.renderY2PhysicsY(lowestRoadTopY) - Config.bikeGameOverOffsetHeight) {
                this.onDead();
            }
        }
        if (this.gameStatus === "play" && this.isContactFatalEdge) {
            this.bikeBody.setLinearVelocity(Vec2(0, 0));
            this.bikeBody.setAngularVelocity(Config.bikeGameOverAngularVelocity);
            this.bikeBody.applyForceToCenter(Vec2(-5000, 10000));
            this.onDead();
        }
    }

    judgeGameWin(bikePhysicsPos) {
        if (this.gameStatus === "play"
            && this.finalPoint
            && bikePhysicsPos.x > GameUtils.renderPos2PhysicsPos(this.finalPoint).x) {
            this.gameWin();
        }
    }

    moveCamera() {
        if (this.gameStatus === "play" || this.startAdjustBikeHeight) {
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

    findLowestRoadTopY(viewLeft) {
        let list = this.roadList;
        let viewRight = viewLeft + Config.designWidth;
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

    findAdjustHeight(viewLeft) {
        let list = this.roadList;
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            if (item.getRightBorderX() > viewLeft) {
                if (item.getLeftBorderX() <= viewLeft) {
                    return item.getTopPosInTargetX(viewLeft);
                } else {
                    return item.getLeftTopPoint();
                }
            }
        }
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

    keepBikeMove(velocity) {
        if (this.gameStatus === "play") {
            if (this.startFloat) {
                if (this.bikeFloatFrame === 0) {
                    this.startFloat = false;
                    this.bikeBubbleSprite.visible = false;
                } else {
                    this.bikeFloatFrame--;
                }
                this.bikeBody.applyForceToCenter(Vec2(0, -this.gravity * this.bikeBody.getMass()));
                this.bikeBody.setLinearVelocity(Vec2(Config.rebornFloatVelocity, 0));
            } else if (this.bikeAccFrame !== undefined) {
                if (this.bikeAccFrame === 0) {
                    this.bikeAccFrame = undefined;
                    this.bikeBody.setLinearVelocity(Vec2(this.playerCommonVelocity, velocity.y));
                } else {
                    this.bikeBody.setLinearVelocity(Vec2(this.playerAccVelocity, velocity.y));
                    this.bikeAccFrame--;
                }
            } else {
                this.bikeBody.setLinearVelocity(Vec2(this.playerCommonVelocity, velocity.y));
            }
        }
    }

    syncBirdSprite() {
        this.birdList.forEach(bird => {
            if (bird.body) {
                let pos = GameUtils.physicsPos2renderPos(bird.body.getPosition());
                bird.sprite.position.set(pos.x, pos.y);
            }
        });
    }

    keepBirdMove() {
        this.birdList.forEach(bird => {
            let rp = bird.sprite.position;
            if (-this.cameraContainer.x + Config.designWidth >= rp.x - bird.sprite.texture.width / 2) {
                if (!bird.showed) {
                    MusicMgr.playSound(Config.soundPath.birdAppear);
                    bird.showed = true;
                    bird.createBody();
                }
                if (!bird.upDown) {
                    let velocity = bird.body.getLinearVelocity();
                    bird.body.setLinearVelocity(Vec2(-20, velocity.y));
                }
                let gravity = -2.5 * this.gravity;
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
            let targetScale = vx === this.playerCommonVelocity ? Config.cameraAutoZoomCommonScale : 1;
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

    onClickPortableItem(i) {
        let button = this.portableItemButtonList[i];
        if (button.children.length === 2) {
            this.accelerateBike();
            button.removeChildAt(1);
        }
    }

    showPortableItem() {
        this.portableItemButtonList.some(button => {
            if (button.children.length === 1) {
                let sprite = new Sprite(resources[Config.imagePath.itemAccGem].texture);
                button.addChild(sprite);
                sprite.anchor.set(0.5, 0.5);
                sprite.position.set(button.width / 2, button.height / 2);
                return true;
            }
        });
    }

    onDead() {
        MusicMgr.playSound(Config.soundPath.die);
        this.gameStatus = "end";
        let pos = this.bikeBody.getPosition();
        this.dragBackPos = {x: pos.x, y: pos.y};
    }

    dragBikeBack() {
        let velocity = this.rebornDragVelocity;
        let targetPos = this.dragBackPos;
        let curPos = this.bikeBody.getPosition();
        let radius = Utils.calcRadius(curPos, targetPos);
        let moveX = velocity * Math.cos(radius);
        let moveY = velocity * Math.sin(radius);
        let {value: x, final: fx} = Utils.successive(curPos.x, targetPos.x, moveX);
        let {value: y, final: fy} = Utils.successive(curPos.y, targetPos.y, moveY);
        let newPos = Vec2(x, y);
        this.bikeBody.setPosition(newPos);
        if (fx && fy) {
            this.onDragBackEnded();
        }
    }

    onDragBackEnded() {
        this.startDragBikeBack = false;
        this.startAdjustBikeHeight = true;
        this.ui.rebornPanel.visible = true;
    }

    onPointerMove(event) {
        if (this.startAdjustBikeHeight && this.startY !== undefined) {
            let moveY = event.data.global.y - this.startY;
            this.startY = event.data.global.y;
            let curPos = this.bikeBody.getPosition();
            let newY = this.bikeSprite.position.y + moveY;
            let rect = {
                x: -this.cameraContainer.x,
                y: GameUtils.physicsPos2renderPos(this.dragBackPos).y - Config.designHeight,
                width: Config.designWidth,
                height: Config.designHeight
            };
            if (Utils.isPointInRect({x: -this.cameraContainer.x, y: newY}, rect)) {
                this.bikeBody.setPosition(Vec2(curPos.x, curPos.y + -moveY * Config.pixel2meter));
            }
        }
    }

    onPointerUp() {
        if (this.startAdjustBikeHeight && this.startY !== undefined) {
            this.startY = undefined;
        }
    }

    onClickConfirmButton() {
        this.ui.rebornPanel.visible = false;
        this.startAdjustBikeHeight = false;
        this.gameStatus = "play";
        this.bikeBody.setDynamic();
        this.resetBikeStatus();
        this.startFloat = true;
        this.bikeFloatFrame = Config.rebornFloatFrame;
    }

    settle() {
        let coin = DataMgr.get(DataMgr.coin, 0) + Math.floor(this.coin * GameUtils.getBikeConfig("coinPercent"));
        DataMgr.set(DataMgr.coin, coin);
        let distance = DataMgr.get(DataMgr.distance, 0) + Math.floor(Math.floor(this.distance) * GameUtils.getBikeConfig("distancePercent"));
        DataMgr.set(DataMgr.distance, distance);
    }

    isItemXInView(item) {
        return item.getLeftBorderX() < -this.cameraContainer.x + Config.designWidth;
    }

    resetJumpStatus() {
        this.jumping = false;
        this.jumpCount = 0;
    }
}

GameScene.sceneFilePath = "myLaya/laya/pages/View/GameScene.scene";
