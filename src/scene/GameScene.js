import Config from "../config";
import RunOption from "../../run-option";
import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";
import MusicMgr from "../mgr/MusicMgr";
import DataMgr from "../mgr/DataMgr";
import Scene from "./Scene";
import {Circle, Vec2, World} from "../libs/planck-wrapper";
import {Container, Emitter, Graphics, resources, Sprite, Text, TextStyle, Texture} from "../libs/pixi-wrapper";

import Road from "../item/Road";
import Item from "../item/Item";
import SmallFireWall from "../item/SmallFireWall";
import BigFireWall from "../item/BigFireWall";
import BlackBird from "../item/BlackBird";
import GroundStab from "../item/GroundStab";
import UpDownPlatform from "../item/UpDownPlatform";
import Road2 from "../item/Road2";
import DeadLine from "../item/DeadLine";
import RollingStone from "../item/RollingStone";
import FireBall from "../item/FireBall";
import EatableItem from "../item/EatableItem";
import EventMgr from "../mgr/EventMgr";
import BananaPeel from "../item/BananaPeel";
import Effect from "../item/Effect";
import Value from "../item/Value";

export default class GameScene extends Scene {
    onCreate() {
        this.initContactHandleTable();
        this.initEffectTable();

        this.registerEvent("Restart", this.onRestart);
        this.registerEvent("Reborn", this.onReborn);
        this.registerEvent("AteItem", this.onAteItem);
        this.registerEvent("UseItem", this.onUseItem);

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

        this.ui.itemUseHistoryLabel.text = "";
    }

    onShow() {
        this.ui.blockSightSprite.visible = false;

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
        this.ui.sealMask.visible = false;

        if (Config.enableCameraAutoZoom) {
            this.autoZoomContainer.scale.set(1, 1);
            this.autoZoomContainer.position.set(0, 0);
        }

        this.effectRemainFrame = {};

        this.itemUseHistory = [];
        if (this.itemUseHistoryDisappearTimer) {
            this.itemUseHistoryDisappearTimer.forEach(timer => clearTimeout(timer));
        }
        this.itemUseHistoryDisappearTimer = [];
        this.ui.itemUseHistoryLabel.text = "";

        this.targetCameraPos = undefined;

        this.playerName = "{{YourselfName}}";

        this.initEnvironment();

        App.loadResources(this.getResPathList(), this.onLoadedBaseRes.bind(this));
    }

    getResPathList() {
        let effectResPathList = [];
        let resNameList = ["imagePath", "userUsedEffectPath", "bearerSufferedEffectPath", "bearerBuffEffectPath", "buffIconImagePath"];
        for (let effect in Config.effect) {
            if (Config.effect.hasOwnProperty(effect)) {
                let data = Config.effect[effect];
                resNameList.forEach(resName => data[resName] && effectResPathList.push(data[resName]));
            }
        }
        return [
            Config.bikeAtlasPath,
            Config.finalFlagImagePath,
            Config.goldCoinAniJson,
            Config.accGemAniJson,
            Config.fireWallAniJson,
            Config.birdAniJson,
            Config.effect.BananaPeel.peelPrefabPath,
            Config.startImagePath.ui,
            this.bgmPath,
        ]
            .concat(Utils.values(Config.soundPath))
            .concat(Utils.values(Config.sceneItemImagePath))
            .concat(Utils.values(Config.emitterPath))
            .concat(Utils.values(Config.imagePath))
            .concat(effectResPathList)
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
        this.bikeSelfContainer.rotation = 0;
        this.gameLoopFunc = this.play.bind(this);
    }

    onLoadedGameRes() {
        this.world = new World({gravity: Vec2(0, this.gravity)});

        this.world.on("begin-contact", this.onBeginContact.bind(this));
        this.world.on("pre-solve", this.onPreSolve.bind(this));

        this.createBg();

        this.closeViewContainer = this.cameraContainer.addChild(new Container());
        this.road2Container = this.closeViewContainer.addChild(new Container());
        if (RunOption.showDeadLine) {
            this.deadLine = this.road2Container.addChild(new Graphics());
            this.deadLine.beginFill();
            this.deadLine.lineStyle(4, 0xff0000, 1);
            this.deadLine.moveTo(0, 0);
            this.deadLine.lineTo(Config.designWidth, 0);
            this.deadLine.endFill();
        }
        this.underBikeContianer = this.closeViewContainer.addChild(new Container());
        this.bikeContainer = this.closeViewContainer.addChild(new Container());

        this.emitter = new Emitter(
            this.bikeContainer,
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
            MusicMgr.playBGM(this.bgmPath, true);
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
                    } else if (this.chtable.road2.is(anotherFixture)) {
                        let {p1, p2} = anotherFixture.getUserData();
                        if (Utils.getDistanceFromPointToLine(this.bikeBody.getPosition(), p1, p2) < Config.bikeRadius - Config.pixel2meter) {
                            contact.setEnabled(false);
                        }
                    }
                },
                beginContact(contact, anotherFixture,) {
                    let item = anotherFixture.getBody().getUserData();
                    if (item && item instanceof BananaPeel && item.thrower === this) {
                        return;
                    }
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
                            ud = anotherFixture.getBody().getUserData();
                            if (ud && ud.thrower) {
                                EventMgr.dispatchEvent("UseItem", ud.thrower, this, "BananaEffect");
                            }
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
                preSolve: (contact, anotherFixture) => {
                    if (!this.chtable.player.is(anotherFixture)
                        && !this.chtable.enemy.is(anotherFixture)) {
                        contact.setEnabled(false);
                    }
                },
                beginContact: (contact, anotherFixture, selfFixture) => {
                    let bird = selfFixture.getBody().getUserData();
                    if (this.chtable.player.is(anotherFixture)) {
                        if (this.bikeBody.getPosition().y < bird.body.getPosition().y) {
                            this.isContactFatalEdge = true;
                        } else {
                            this.resetJumpStatus();
                            bird.isDead = true;
                        }
                    } else if (this.chtable.enemy.is(anotherFixture)) {
                        let enemy = anotherFixture.getBody().getUserData();
                        if (enemy.selfFixture === anotherFixture) {
                            if (anotherFixture.getBody().getPosition().y > bird.body.getPosition().y) {
                                enemy.isContactFatalEdge = true;
                            } else {
                                enemy.resetJumpStatus();
                                bird.isDead = true;
                            }
                        }
                    }
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
                    return this.itemList.indexOf(fixture.getBody().getUserData()) !== -1;
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
                if (item.is(fa)) {
                    if (item.preSolve) {
                        this.callByScene(item.preSolve, contact, fb, fa);
                    }
                    for (let type2 in this.chtable) {
                        if (this.chtable.hasOwnProperty(type2)) {
                            let item2 = this.chtable[type2];
                            if (item2.is(fb)) {
                                if (item2.preSolve) {
                                    this.callByScene(item2.preSolve, contact, fa, fb);
                                }
                            }
                        }
                    }
                    break;
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
                if (item.is(fa)) {
                    if (item.beginContact) {
                        this.callByScene(item.beginContact, contact, fb, fa);
                    }
                    for (let type2 in this.chtable) {
                        if (this.chtable.hasOwnProperty(type2)) {
                            let item2 = this.chtable[type2];
                            if (item2.is(fb)) {
                                if (item2.beginContact) {
                                    this.callByScene(item2.beginContact, contact, fa, fb);
                                }
                            }
                        }
                    }
                    break;
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
            } else if (this.hasEffect("SpiderWeb")) {
                this.bikeBody.applyForceToCenter(Vec2(0, Config.effect.SpiderWeb.jumpForce));
                this.spiderWebRemainBreakTimes--;
                if (this.spiderWebRemainBreakTimes === 0) {
                    delete this.effectRemainFrame.SpiderWeb;
                    if (this.effectTable.SpiderWeb.end) {
                        this.effectTable.SpiderWeb.end();
                    }
                    if (this.durationEffectTable.SpiderWeb) {
                        this.durationEffectTable.SpiderWeb.destroy();
                        delete this.durationEffectTable.SpiderWeb;
                    }
                    this.removeBuffIcon("SpiderWeb");
                }
            } else if (this.hasEffect("UnlimitedJump")
                || this.jumpCount < Config.jumpCommonMaxCount
                || this.jumpExtraCountdown > 0) {
                let velocity = this.bikeBody.getLinearVelocity();
                this.bikeBody.setLinearVelocity(Vec2(velocity.x, 0));
                this.bikeBody.applyForceToCenter(Vec2(0, this.player.jumpForce.value));
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
                    this.jumpingAnimationFrames = GameUtils.getFrames(jumpAnimation.atlasPath, jumpAnimation.animationName);
                    this.jumpingAnimationIndex = 0;
                    this.jumpingAnimationInterval = jumpAnimation.interval;
                } else {
                    this.bikeSelfContainer.rotation = Utils.angle2radius(Config.bikeJumpingRotation);
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
            case "Space": {
                if (this.gameStatus === "play") {
                    this.gameStatus = "end";
                    this.gameLoopFunc = this.pause.bind(this);
                } else if (this.gameStatus === "end") {
                    this.gameStatus = "play";
                    this.gameLoopFunc = this.play.bind(this);
                }
                break;
            }
        }
    }

    onAteItem(type, effect, texture) {
        switch (type) {
            case "PortableItem": {
                this.showPortableItem(effect, texture);
                break;
            }
            case "GoldCoin": {
                this.updateCoinText(this.coin + 1);
                MusicMgr.playSound(Config.soundPath.eatGoldCoin);
                break;
            }
            case "Thunder": {
                this.isContactFatalEdge = true;
                break;
            }
            default:
                this.startEffect(type);
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

    // createFPSText() {
    //     let style = new TextStyle({
    //         fill: "white",
    //         stroke: "#ff3300",
    //         strokeThickness: 1,
    //     });
    //     this.fpsText = new Text("FPS:0", style);
    //     this.fpsText.anchor.set(0, 0);
    //     this.addChild(this.fpsText);
    // }

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
            case "GroundStab": {
                let item = new GroundStab(this.underBikeContianer, this.world, data);
                this.itemList.push(item);
                break;
            }
            // todo 弄一个比较智能的创建方式
            case "UpDownPlatform": {
                let item = new UpDownPlatform(this, this.underBikeContianer, this.world, data);
                this.itemList.push(item);
                this.roadList.push(item);
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
            case "FireBall": {
                let item = new FireBall(this, this.underBikeContianer, this.world, data);
                this.itemList.push(item);
                break;
            }
            case "EatableItem": {
                this.itemList.push(new EatableItem(this, this.underBikeContianer, this.world, data));
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

        this.bikeOutterContainer = this.bikeContainer.addChild(new Container());
        this.bikeOutterContainer.position.set(rp.x, rp.y);

        this.bikeSelfContainer = this.bikeOutterContainer.addChild(new Container());
        this.bikeSelfContainer.scale.set(Config.bikeScale, Config.bikeScale);

        this.underBikeContainer = this.bikeSelfContainer.addChild(new Container());
        this.bikeSprite = this.bikeSelfContainer.addChild(new Sprite());
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.upBikeContainer = this.bikeSelfContainer.addChild(new Container());

        let id = DataMgr.get(DataMgr.selectedBike, 0);
        let config = Config.bikeList.find(config => config.id === id);
        this.bikeDecorateSprite = new Sprite(resources[config.imagePath].texture);
        this.bikeSprite.addChild(this.bikeDecorateSprite);
        this.bikeDecorateSprite.anchor.set(...config.anchor);
        this.bikeDecorateSprite.scale.set(...config.scale);
        this.bikeDecorateSprite.position.set(...config.position);

        this.player = {};
        this.player.velocity = new Value();
        this.player.jumpForce = new Value(this.jumpForce);
        if (config.velocityPercent) {
            this.player.velocity.setBasicValue(this.bikeCommonVelocity * config.velocityPercent);
        }
        let density;
        if (config.densityPercent) {
            density = Config.bikeDensity * config.densityPercent;
        } else {
            density = Config.bikeDensity;
        }

        let bubbleTexture = resources[Config.imagePath.bubble].texture;
        this.bikeBubbleSprite = this.bikeOutterContainer.addChild(new Sprite(bubbleTexture));
        this.bikeBubbleSprite.anchor.set(0.5, 0.5);
        this.bikeBubbleSprite.visible = false;

        let arrowTexture = resources[Config.imagePath.rebornArrow].texture;

        this.bikeArrowSprite1 = this.bikeOutterContainer.addChild(new Sprite(arrowTexture));
        this.bikeArrowSprite1.position.set(0, -bubbleTexture.height / 2);

        this.bikeArrowSprite2 = this.bikeOutterContainer.addChild(new Sprite(arrowTexture));
        this.bikeArrowSprite2.rotation = Math.PI;
        this.bikeArrowSprite2.position.set(0, bubbleTexture.height / 2);

        this.bikeArrowList = [this.bikeArrowSprite1, this.bikeArrowSprite2];
        this.bikeArrowList.forEach(sprite => {
            sprite.anchor.set(0.5, 1);
            sprite.visible = false;
        });

        this.bikeBody = this.world.createDynamicBody();
        this.bikeBody.setUserData(this);
        this.bikeBody.createFixture(Circle(Config.bikeRadius), {density: density, friction: 1,});
        this.bikeBody.setPosition(pp);
        this.bikeBody.setLinearVelocity(Vec2(this.player.velocity.value, 0));

        this.bikeJumpExtraCountdown = config.bikeJumpExtraCountdown || Config.bikeJumpExtraCountdown;

        this.resetBikeStatus();

        if (RunOption.showBikeState) {
            this.stateText = this.bikeSprite.addChild(new Text("", new TextStyle({
                fill: "white",
                fontSize: 50,
            })));
        }

        this.effectList = [];
        this.durationEffectTable = {};

        this.buffIconContainer = this.bikeOutterContainer.addChild(new Container());
        this.buffIconContainer.y = Config.buff.containerY;
        this.buffIconTable = {};
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

        this.removeAllEffects();
    }

    removeAllEffects() {
        for (let type in this.effectRemainFrame) {
            if (this.effectRemainFrame.hasOwnProperty(type)) {
                delete this.effectRemainFrame[type];
                if (this.effectTable[type] && this.effectTable[type].end) {
                    this.effectTable[type].end();
                }
                this.removeBuffIcon(type);
            }
        }
        for (let type in this.durationEffectTable) {
            if (this.durationEffectTable.hasOwnProperty(type)) {
                this.durationEffectTable[type].destroy();
                delete this.durationEffectTable[type];
            }
        }
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

        if (this.startDragBikeBack) {
            this.dragBikeBack();
        }

        if (RunOption.cameraFollowEnemy && this.enemyList[0]) {
            this.targetCameraPos = this.enemyList[0].bikeBody.getPosition();
        }
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

        this.reduceEffect();
        this.jumpExtraCountdown--;
        this.updateBuffIcon();
        this.effectList.forEach(effect => effect.update());
        for (let type in this.durationEffectTable) {
            if (this.durationEffectTable.hasOwnProperty(type)) {
                this.durationEffectTable[type].update();
            }
        }

        if (Config.enableCameraAutoZoom) {
            this.autoZoomCamera();
        }

        if (this.bikeOutterContainer) {
            this.emitter.updateOwnerPos(this.bikeOutterContainer.x, this.bikeOutterContainer.y);
            this.emitter.update(1 / Config.fps);
        }

        if (this.gameStatus === "play") {
            let newX = this.bikeBody.getPosition().x;
            this.distance += newX - oldX;
            this.ui.distanceText.text = Math.floor(this.distance) + "m";
        }

        if (RunOption.showBikeState) {
            this.stateText.text = "";
            for (let type in this.effectRemainFrame) {
                if (this.effectRemainFrame.hasOwnProperty(type)) {
                    if (this.effectRemainFrame[type] > 0) {
                        this.stateText.text += `${type}:${Math.ceil(this.effectRemainFrame[type] / Config.fps)}\n`;
                    } else {
                        this.stateText.text += `${type}\n`;
                    }
                }
            }
        }
    }

    pause() {
    }

    updateCoinText(score) {
        this.coin = score;
        this.ui.coinText.text = this.coin;
    }

    syncBikeSprite(velocity, bikePhysicsPos) {
        let bikeRenderPos = GameUtils.physicsPos2renderPos(bikePhysicsPos);
        this.bikeOutterContainer.position.set(bikeRenderPos.x, bikeRenderPos.y);
        if (this.gameStatus === "end") {
            this.bikeSelfContainer.rotation = this.bikeBody.getAngle();
            this.bikeAccSprite.visible = false;
        } else {
            if (this.startFloat) {
                this.bikeAccSprite.visible = true;
                this.bikeAccSprite.texture = resources[Config.startImagePath.ui].textures[`cd-${Math.ceil(this.bikeFloatFrame / Config.fps)}.png`];
                this.bikeAccSprite.position.set(this.bikeOutterContainer.x, this.bikeOutterContainer.y - this.bikeSelfContainer.height / 2);
            } else if (this.hasEffect("Accelerate")) {
                this.bikeAccSprite.visible = true;
                let frame = this.effectRemainFrame.Accelerate;
                if (frame <= 5 * Config.fps) {
                    this.bikeAccSprite.texture = resources[Config.startImagePath.ui].textures[`cd-${Math.ceil(frame / Config.fps)}.png`];
                    this.bikeAccSprite.position.set(this.bikeOutterContainer.x, this.bikeOutterContainer.y - this.bikeSelfContainer.height / 2);
                } else {
                    this.bikeAccSprite.texture = resources[Config.startImagePath.ui].textures["speed-up.png"];
                    this.bikeAccSprite.position.set(this.bikeOutterContainer.x + 32, this.bikeOutterContainer.y - this.bikeSelfContainer.height / 2);
                }
            } else {
                let minRemainFrame = undefined;
                for (let type in this.effectRemainFrame) {
                    if (this.effectRemainFrame.hasOwnProperty(type)) {
                        if (minRemainFrame === undefined || this.effectRemainFrame[type] < minRemainFrame) {
                            minRemainFrame = this.effectRemainFrame[type];
                        }
                    }
                }
                if (minRemainFrame !== undefined && minRemainFrame < 5 * Config.fps) {
                    this.bikeAccSprite.visible = true;
                    this.bikeAccSprite.texture = resources[Config.startImagePath.ui].textures[`cd-${Math.ceil(minRemainFrame / Config.fps)}.png`];
                    this.bikeAccSprite.position.set(this.bikeOutterContainer.x, this.bikeOutterContainer.y - this.bikeOutterContainer.height / 2);
                } else {
                    this.bikeAccSprite.visible = false;
                }
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
                this.bikeSelfContainer.rotation = -Math.atan(velocity.y / velocity.x);
                this.bikeFrame++;
                if (this.bikeFrame >= this.bikeFrames.length) {
                    this.bikeFrame = 0;
                }
                this.bikeSprite.texture = this.bikeFrames[this.bikeFrame];
            }
        }
    }

    judgeGameLose(velocity, bikePhysicsPos) {
        let lowestRoadTopY = this.findLowestRoadTopY(-this.cameraContainer.x);
        if (this.deadLine) {
            this.deadLine.position.set(
                -this.cameraContainer.x,
                lowestRoadTopY + Config.bikeGameOverOffsetHeight * Config.meter2pixel
            );
        }
        if (this.gameStatus === "play") {
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
        if (this.gameStatus === "play" || this.startAdjustBikeHeight || this.targetCameraPos) {
            let pos = this.targetCameraPos ? GameUtils.physicsPos2renderPos(this.targetCameraPos) : this.bikeOutterContainer;

            let oldCameraX = this.cameraContainer.x;
            let oldCameraY = this.cameraContainer.y;

            this.cameraContainer.x = Config.bikeLeftMargin - pos.x;

            let bikeY = this.cameraContainer.y + pos.y;
            if (bikeY < Config.bikeCameraMinY) {
                this.cameraContainer.y = Config.bikeCameraMinY - pos.y;
            } else if (bikeY > Config.bikeCameraMaxY) {
                this.cameraContainer.y = Config.bikeCameraMaxY - pos.y;
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
                for (i++; i < list.length; i++) {
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
            } else {
                this.bikeBody.setLinearVelocity(Vec2(this.player.velocity.value, velocity.y));
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
            if (bird.isDead) {
                return;
            }

            let rp = bird.sprite.position;
            if (-this.cameraContainer.x + Config.designWidth >= rp.x - bird.sprite.texture.width / 2) {
                if (!bird.showed) {
                    MusicMgr.playSound(Config.soundPath.birdAppear);
                    bird.showed = true;
                    bird.createBody();
                }
                if (!bird.upDown) {
                    bird.body.setLinearVelocity(Vec2(-20, bird.body.getLinearVelocity().y));
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
            let targetScale = vx === this.player.velocity.basicValue ? Config.cameraAutoZoomCommonScale : 1;
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
        this.cameraContainer.x = Config.bikeLeftMargin - this.bikeOutterContainer.x;

        let bikeY = this.cameraContainer.y + this.bikeOutterContainer.y;
        if (bikeY < Config.bikeCameraMinY) {
            this.cameraContainer.y = Config.bikeCameraMinY - this.bikeOutterContainer.y;
        } else if (bikeY > Config.bikeCameraMaxY) {
            this.cameraContainer.y = Config.bikeCameraMaxY - this.bikeOutterContainer.y;
        }

        this.bgList.forEach((bg) => {
            bg.container.position.x = -this.cameraContainer.y;
            bg.container.position.y = -this.cameraContainer.y;
        });
    }

    onClickPortableItem(i) {
        if (this.gameStatus === "play") {
            let button = this.portableItemButtonList[i];
            if (button.children.length === 2) {
                if (this.hasEffect("Seal")) {
                    return App.showNotice("Your item are sealed now.");
                }
                let effect = button.children[1].effect;
                let config = Config.effect[effect];
                if (effect === "BananaPeel") {
                    this.throwBananaPeel(this);
                } else {
                    if (config.isHelpful) {
                        this.onAteItem(effect);
                    } else {
                        let others = this.enemyList;
                        let targets;
                        switch (config.targetType) {
                            case 1: {
                                let target = this.getFormerOne(this);
                                if (target) {
                                    targets = [target];
                                } else {
                                    targets = [];
                                }
                                break;
                            }
                            case 2: {
                                targets = others;
                                break;
                            }
                            case 0:
                            default: {
                                targets = [Utils.randomChoose(others)];
                            }
                        }
                        if (targets.length === 0) {
                            EventMgr.dispatchEvent("UseItem", this, {getName: () => "Air"}, effect);
                        } else {
                            targets.forEach(other => {
                                other.onAteItem(effect);
                                EventMgr.dispatchEvent("UseItem", this, other, effect);
                            });
                        }
                    }
                }
                if (config.userUsedEffectPath) {
                    let effect = new Effect(this, config.userUsedEffectPath, () => {
                        Utils.removeItemFromArray(this.effectList, effect);
                        effect.destroy();
                    });
                    this.effectList.push(effect);
                }
                button.removeChildAt(1);
            }
        }
    }

    showPortableItem(effect, texture) {
        this.portableItemButtonList.some(button => {
            if (button.children.length === 1) {
                let sprite = new Sprite(texture);
                button.addChild(sprite);
                sprite.anchor.set(0.5, 0.5);
                sprite.position.set(button.mywidth / 2, button.myheight / 2);
                sprite.effect = effect;
                return true;
            }
        });
    }

    onDead() {
        MusicMgr.playSound(Config.soundPath.die);
        this.gameStatus = "end";
        let pos = this.bikeBody.getPosition();
        let rp = this.findAdjustHeight(this.bikeOutterContainer.x);
        let pp = GameUtils.renderPos2PhysicsPos(rp);
        this.dragBackPos = {x: pos.x, y: pp.y + Config.bikeRadius - Config.rebornPosOffsetHeight * Config.pixel2meter};
        this.deadPos = {x: pos.x, y: pos.y};
        this.targetCameraPos = {x: pos.x, y: pos.y};
        this.moveCameraVelocity = {
            x: (this.dragBackPos.x - this.targetCameraPos.x) / Config.rebornDragDuration / Config.fps,
            y: (this.dragBackPos.y - this.targetCameraPos.y) / Config.rebornDragDuration / Config.fps
        };
        this.removeAllEffects();
    }

    dragBikeBack() {
        let {x, y, final} = GameUtils.moveToTargetPos(
            this.bikeBody.getPosition(),
            this.dragBackPos,
            this.rebornDragVelocity
        );
        this.bikeBody.setPosition(Vec2(x, y));
        this.targetCameraPos.x += this.moveCameraVelocity.x;
        this.targetCameraPos.y += this.moveCameraVelocity.y;
        if (final) {
            this.onDragBackEnded();
        }
    }

    onDragBackEnded() {
        this.targetCameraPos = undefined;
        this.startDragBikeBack = false;
        this.startAdjustBikeHeight = true;
        this.bikeArrowList.forEach(sprite => sprite.visible = true);
        this.ui.rebornPanel.visible = true;
    }

    onPointerMove(event) {
        if (this.startAdjustBikeHeight && this.startY !== undefined) {
            let moveY = event.data.global.y - this.startY;
            this.startY = event.data.global.y;
            let curPos = this.bikeBody.getPosition();
            let newY = this.bikeOutterContainer.y + moveY;
            let rect = {
                x: -this.cameraContainer.x,
                y: GameUtils.physicsPos2renderPos(this.deadPos).y - Config.designHeight,
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
        this.bikeArrowList.forEach(sprite => sprite.visible = false);
        this.bikeFloatFrame = Config.rebornFloatFrame;
    }

    settle() {
        let coin = DataMgr.get(DataMgr.coin, 0) + Math.floor(this.coin * GameUtils.getBikeConfig("coinPercent"));
        DataMgr.set(DataMgr.coin, coin);
        let distance = Math.floor(Math.floor(this.distance) * GameUtils.getBikeConfig("distancePercent"));
        DataMgr.add(DataMgr.distance, distance);
        DataMgr.add(DataMgr.rankDistance, distance);
        this.gameLoopFunc = this.pause.bind(this);
    }

    isItemXEnterView(item) {
        return item.getLeftBorderX() < -this.cameraContainer.x + Config.designWidth;
    }

    isItemXInView(item) {
        return item.getLeftBorderX() < -this.cameraContainer.x + Config.designWidth && item.getRightBorderX() > -this.cameraContainer.x;
    }

    resetJumpStatus() {
        this.jumping = false;
        this.jumpCount = 0;
    }

    startEffect(type) {
        if (this.gameStatus === "end") {
            return;
        }
        if (this.effectRemainFrame[type]) {
            if (this.effectTable[type] && this.effectTable[type].cover) {
                this.effectTable[type].cover();
            }
        } else {
            if (this.effectTable[type] && this.effectTable[type].start) {
                this.effectTable[type].start();
            }
            let config = Config.effect[type];
            if (config.bearerBuffEffectPath) {
                this.durationEffectTable[type] = new Effect(this, config.bearerBuffEffectPath);
            }
            if (config.bearerSufferedEffectPath) {
                let effect = new Effect(this, config.bearerSufferedEffectPath, () => {
                    effect.destroy();
                    Utils.removeItemFromArray(this.effectList, effect);
                });
                this.effectList.push(effect);
            }
            if (config.buffIconImagePath) {
                this.addBuffIcon(type);
            }
        }
        this.effectRemainFrame[type] = Config.effect[type].duration * Config.fps;
    }

    reduceEffect() {
        for (let type in this.effectRemainFrame) {
            if (this.effectRemainFrame.hasOwnProperty(type)) {
                this.effectRemainFrame[type]--;
                if (this.effectRemainFrame[type] === 0) {
                    delete this.effectRemainFrame[type];
                    if (this.effectTable[type] && this.effectTable[type].end) {
                        this.effectTable[type].end();
                    }
                    this.removeBuffIcon(type);
                    if (this.durationEffectTable[type]) {
                        this.durationEffectTable[type].destroy();
                        delete this.durationEffectTable[type];
                    }
                }
            }
        }
    }

    initEffectTable() {
        this.effectTable = {
            Decelerate: {
                start: () => {
                    this.player.velocity.increaseValueByRate(Config.effect.Decelerate.rate);
                    this.bikeBody.setLinearVelocity(Vec2(this.player.velocity.value, this.bikeBody.getLinearVelocity().y));
                },
                end: () => {
                    this.player.velocity.increaseValueByRate(-Config.effect.Decelerate.rate);
                    this.bikeBody.setLinearVelocity(Vec2(this.player.velocity.value, this.bikeBody.getLinearVelocity().y));
                },
            },
            Accelerate: {
                start: () => {
                    this.player.velocity.increaseValueByRate(Config.effect.Accelerate.rate);
                    this.bikeBody.setLinearVelocity(Vec2(this.player.velocity.value, this.bikeBody.getLinearVelocity().y));
                },
                end: () => {
                    this.player.velocity.increaseValueByRate(-Config.effect.Accelerate.rate);
                    this.bikeBody.setLinearVelocity(Vec2(this.player.velocity.value, this.bikeBody.getLinearVelocity().y));
                },
            },
            WeakenJump: {
                start: () => {
                    this.player.jumpForce.increaseValueByRate(Config.effect.WeakenJump.rate);
                },
                end: () => {
                    this.player.jumpForce.increaseValueByRate(-Config.effect.WeakenJump.rate);
                },
            },
            PowerJump: {
                start: () => {
                    this.player.jumpForce.increaseValueByRate(Config.effect.PowerJump.rate);
                },
                end: () => {
                    this.player.jumpForce.increaseValueByRate(-Config.effect.PowerJump.rate);
                },
            },
            BlockSight: {
                start: () => {
                    this.ui.blockSightSprite.visible = true;
                },
                end: () => {
                    this.ui.blockSightSprite.visible = false;
                },
            },
            SpiderWeb: {
                start: () => {
                    this.spiderWebRemainBreakTimes = Config.effect.SpiderWeb.breakTimes;
                },
                cover: () => {
                    this.spiderWebRemainBreakTimes = Config.effect.SpiderWeb.breakTimes;
                },
            },
            Seal: {
                start: () => {
                    this.ui.sealMask.visible = true;
                },
                end: () => {
                    this.ui.sealMask.visible = false;
                },
            },
        };
    }

    hasEffect(type) {
        return this.effectRemainFrame[type] !== undefined;
    }

    removeItem(item) {
        let index = this.itemList.indexOf(item);
        if (index !== -1) {
            item.destroy();
            this.itemList.splice(index, 1);
        }
    }

    onUseItem(user, receiver, effect) {
        this.itemUseHistory.push(`【${user.getName()}】对【${receiver.getName()}】使用了【${effect}】`);
        this.ui.itemUseHistoryLabel.text = this.itemUseHistory.join("\n");
        this.itemUseHistoryDisappearTimer.push(setTimeout(() => {
            this.itemUseHistory.shift();
            this.ui.itemUseHistoryLabel.text = this.itemUseHistory.join("\n");
        }, Config.itemUseHistoryDuration * 1000));
    }

    getName() {
        return this.playerName;
    }

    getFormerOne(player) {
        let players = [this].concat(this.enemyList);
        players.sort((a, b) => b.getBikePhysicalPosition().x - a.getBikePhysicalPosition().x);
        return players[players.indexOf(player) - 1];
    }

    getBikePhysicalPosition() {
        return this.bikeBody.getPosition();
    }

    getRank(player) {
        let players = [this].concat(this.enemyList);
        players.sort((a, b) => b.getBikePhysicalPosition().x - a.getBikePhysicalPosition().x);
        return players.indexOf(player) + 1;
    }

    throwBananaPeel(thrower) {
        this.itemList.push(new BananaPeel(this, this.underBikeContianer, this.world, thrower));
    }

    isPlayer() {
        return true;
    }

    addBikeChild(displayObject, index) {
        if (index === 0) {
            this.underBikeContainer.addChild(displayObject);
        } else {
            this.upBikeContainer.addChild(displayObject);
        }
        return displayObject;
    }

    addBuffIcon(type) {
        if (Config.effect[type].buffIconImagePath && this.buffIconTable[type] === undefined) {
            let sprite = this.buffIconContainer.addChild(new Sprite());
            sprite.anchor.set(0.5, 0);
            sprite.texture = resources[Config.effect[type].buffIconImagePath].texture;
            sprite.scale.set(Config.buff.iconScale, Config.buff.iconScale);
            let seconds = Math.ceil(this.effectRemainFrame[type] / Config.fps);
            let text = sprite.addChild(new Text(seconds, new TextStyle(Config.buff.text)));
            text.anchor.set(0.5, 0.5);
            text.position.set(...Config.buff.textPosition);
            this.buffIconTable[type] = sprite;
            this.sortBuffIcon();
        }
    }

    removeBuffIcon(type) {
        if (this.buffIconTable[type]) {
            this.buffIconTable[type].destroy();
            delete this.buffIconTable[type];
            this.sortBuffIcon();
        }
    }

    sortBuffIcon() {
        let index = -1;
        Utils.keys(Config.effect).forEach(type => {
            if (this.buffIconTable[type]) {
                index++;
                this.buffIconTable[type].x = index * Config.buff.iconInterval;
            }
        });
        this.buffIconContainer.x = -index * Config.buff.iconInterval / 2;
    }

    updateBuffIcon() {
        for (let type in this.buffIconTable) {
            if (this.buffIconTable.hasOwnProperty(type)) {
                if (this.effectRemainFrame[type] > 0) {
                    this.buffIconTable[type].getChildAt(0).text = Math.ceil(this.effectRemainFrame[type] / Config.fps);
                } else {
                    this.buffIconTable[type].getChildAt(0).text = "";
                }
            }
        }
    }

    pauseGame() {
        this.gameLoopFunc = this.pause.bind(this);
    }

    getSpriteGameBounds(sprite) {
        // todo 不知道有没有更严谨的算法
        let bounds = sprite.getBounds();
        let {scaleX, scaleY} = this.getParentScale(sprite);
        ["x", "width"].forEach(key => bounds[key] /= scaleX);
        ["y", "height"].forEach(key => bounds[key] /= scaleY);
        bounds.x -= this.cameraContainer.x;
        bounds.y -= this.cameraContainer.y;
        return bounds;
    }

    getParentScale(item) {
        let scaleX = 1, scaleY = 1;
        while (item.parent) {
            scaleX *= item.parent.scale.x;
            scaleY *= item.parent.scale.y;
            item = item.parent;
        }
        return {scaleX, scaleY};
    }
}

GameScene.sceneFilePath = "myLaya/laya/pages/View/GameScene.scene.json";
