import {Emitter, resources, Sprite, Text, TextStyle, Texture} from "../libs/pixi-wrapper";
import Config from "../config";
import {Circle, Vec2} from "../libs/planck-wrapper";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";
import RunOption from "../../run-option";
import EventMgr from "../mgr/EventMgr";
import BananaPeel from "./BananaPeel";

export default class Bike {
    constructor(gameScene, parent, world, id, config) {
        this.gameScene = gameScene;
        this.parent = parent;
        this.world = world;
        this.id = id;
        this.config = config;

        this.bikeSprite = undefined;
        this.bikeBubbleSprite = undefined;
        this.bikeBody = undefined;

        this.commonVelocity = this.config.commonVelocity;
        this.accVelocity = this.config.accVelocity;
        this.jumpForce = this.config.jumpForce;

        this.frames = config.frames;
        this.frameIndex = 0;

        this.isContactFatalEdge = false;

        this.jumping = false;
        this.jumpCount = 0;

        this.isDead = false;
        this.dragBackPos = {x: 0, y: 0};
        this.deadCompleteTimer = 0;

        this.startDragBikeBack = false;
        this.adjustHeight = undefined;
        this.startAdjustHeight = false;

        this.startFloat = false;

        this.portableItemList = [];
        this.effectRemainFrame = {};
        this.initEffectTable();

        this.playerName = "NPC" + this.config.index;

        this.onCreate();
    }

    onCreate() {
        this.bikeSprite = this.parent.addChildAt(new Sprite(), 0);
        this.bikeSprite.texture = this.frames[this.frameIndex];
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.scale.set(Config.bikeScale, Config.bikeScale);

        let decorateSprite = this.bikeSprite.addChild(new Sprite());
        let config = Config.bikeList.find(bike => bike.id === this.id);
        decorateSprite.texture = resources[config.imagePath].texture;
        decorateSprite.anchor.set(...config.anchor);
        decorateSprite.scale.set(...config.scale);
        decorateSprite.position.set(...config.position);

        this.bikeBubbleSprite = this.bikeSprite.addChild(new Sprite());
        this.bikeBubbleSprite.texture = resources[Config.imagePath.bubble].texture;
        this.bikeBubbleSprite.anchor.set(0.5, 0.5);
        this.bikeBubbleSprite.scale.set(1 / Config.bikeScale, 1 / Config.bikeScale);
        this.bikeBubbleSprite.visible = false;

        this.bikeBody = this.world.createDynamicBody();
        let density = Config.bikeDensity * (config.densityPercent || 1);
        this.selfFixture = this.bikeBody.createFixture(Circle(Config.bikeRadius), {density: density, friction: 1});
        this.bikeBody.setUserData(this);
        if (config.velocityPercent) {
            this.commonVelocity *= config.velocityPercent;
            this.accVelocity *= config.velocityPercent;
        }
        this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, 0));

        this.aiSensor = this.bikeBody.createFixture({shape: Circle(Config.bikeRadius * 2), isSensor: true});

        let vy = this.jumpForce / this.bikeBody.getMass() / Config.fps;
        let jumpRadius = this.calcJumpRadius(this.commonVelocity, vy, this.world.getGravity().y);
        this.eatItemSensor = this.bikeBody.createFixture({shape: Circle(jumpRadius), isSensor: true});
        // todo 当跳跃力之类的东西发生变化的时候 也需要修改探测圈的范围

        this.stateText = this.bikeSprite.addChild(new Text("", new TextStyle({
            fill: "white",
            fontSize: 50,
        })));

        this.emitter = new Emitter(
            this.parent,
            [Texture.fromImage(Config.imagePath.bikeParticle)],
            resources[Config.emitterPath.bike].data
        );
        this.emitter.emit = false;
    }

    destroy() {
        this.world.destroyBody(this.bikeBody);
        this.bikeSprite.destroy();
        this.emitter.destroy();
        clearTimeout(this.deadCompleteTimer);
    }

    setPhysicalPosition(pp) {
        this.bikeBody.setPosition(pp);
        let rp = GameUtils.physicsPos2renderPos(pp);
        this.bikeSprite.position.set(rp);
    }

    onPreSolve(contact, anotherFixture, selfFixture) {
        if (this.isDead) {
            return contact.setEnabled(false);
        }
        if (selfFixture === this.selfFixture) {
            if (this.gameScene.chtable.player.is(anotherFixture)
                || this.gameScene.chtable.enemy.is(anotherFixture)) {
                contact.setEnabled(false);
            } else if (this.gameScene.chtable.npc.is(anotherFixture)) {
                contact.setEnabled(false);
                this.isContactFatalEdge = true;
            } else if (this.gameScene.chtable.road2.is(anotherFixture)) {
                let {p1, p2} = anotherFixture.getUserData();
                if (Utils.getDistanceFromPointToLine(this.bikeBody.getPosition(), p1, p2) < Config.bikeRadius - Config.pixel2meter) {
                    contact.setEnabled(false);
                }
            }
        }
    }

    onBeginContact(contact, anotherFixture, selfFixture) {
        if (selfFixture === this.aiSensor) {
            let ud = anotherFixture.getUserData();
            if ((ud && (ud.isFatal || ud.isCliff))
                || this.gameScene.chtable.obstacle.is(anotherFixture)) {
                this.isGoToJump = true;
            }
        } else if (selfFixture === this.eatItemSensor) {
            let ud = anotherFixture.getBody().getUserData();
            if ((ud && ud.isHelpful)) {
                this.isGoToJump = true;
            }
        } else {
            let item = anotherFixture.getBody().getUserData();
            if (item && item instanceof BananaPeel && item.thrower === this) {
                return;
            }
            let ud = anotherFixture.getUserData();
            if (this.gameScene.chtable.road.is(anotherFixture) || (ud && ud.resetJumpStatus)) {
                this.resetJumpStatus();
            }
            if (this.gameScene.chtable.obstacle.is(anotherFixture)) {
                this.isContactFatalEdge = true;
            } else {
                if (ud && ud.isFatal) {
                    this.isContactFatalEdge = true;
                    ud = anotherFixture.getBody().getUserData();
                    if (ud && ud.thrower) {
                        EventMgr.dispatchEvent("UseItem", ud.thrower, this, "BananaEffect");
                    }
                }
            }
        }
    }

    update() {
        this.frameIndex++;
        if (this.frameIndex >= this.frames.length) {
            this.frameIndex = 0;
        }
        this.bikeSprite.texture = this.frames[this.frameIndex];
        let pp = this.bikeBody.getPosition();
        let rp = GameUtils.physicsPos2renderPos(pp);
        this.bikeSprite.x = rp.x;
        this.bikeSprite.y = rp.y;
        if (!this.isDead && !this.jumping) {
            let velocity = this.bikeBody.getLinearVelocity();
            this.bikeSprite.rotation = -Math.atan(velocity.y / velocity.x);
        }
        if (Utils.calcPointDistance(this.bikeBody.getPosition(), this.gameScene.bikeBody.getPosition()) < Config.bikeRadius * 2) {
            this.bikeSprite.alpha = Config.enemy.contactPlayerAlpha;
        } else {
            this.bikeSprite.alpha = 1;
        }
        if (this.portableItemList.length !== 0 && !this.isDead && !this.hasEffect("Seal")) {
            let effect = this.portableItemList.pop();
            if (effect === "BananaPeel") {
                this.gameScene.throwBananaPeel(this);
            } else {
                let config = Config.effect[effect];
                if (config.isHelpful) {
                    this.onAteItem(effect);
                } else {
                    let others = this.gameScene.enemyList
                        .filter(item => item !== this)
                        .concat(this.gameScene);
                    let targets;
                    switch (config.targetType) {
                        case 1: {
                            let target = this.gameScene.getFormerOne(this);
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
        }
        this.emitter.updateOwnerPos(this.bikeSprite.x, this.bikeSprite.y);
        this.emitter.update(1 / Config.fps);
    }

    afterUpdate() {
        if (!this.completeGame && this.isDead === false && this.isContactFatalEdge) {
            this.bikeBody.setLinearVelocity(Vec2(0, 0));
            this.bikeBody.setAngularVelocity(Config.bikeGameOverAngularVelocity);
            this.bikeBody.applyForceToCenter(Vec2(-5000, 10000));
            this.onDead();
            return;
        }

        if (!this.completeGame && this.isDead === false) {
            let bikePhysicsPos = this.bikeBody.getPosition();
            let lowestRoadTopY = this.gameScene.findLowestRoadTopY(this.bikeSprite.x);
            if (bikePhysicsPos.y < GameUtils.renderY2PhysicsY(lowestRoadTopY) - Config.bikeGameOverOffsetHeight) {
                this.onDead();
                return;
            }
        }

        if (this.startReborn) {
            this.startDragBikeBack = true;
            this.rebornDragVelocity = Utils.calcPointDistance(this.bikeBody.getPosition(), this.dragBackPos) / Config.rebornDragDuration / Config.fps;
            this.bikeBubbleSprite.visible = true;
            this.bikeBody.setStatic();
            this.bikeBody.setAngle(0);
            this.bikeSprite.rotation = 0;
            this.startReborn = false;
        }

        if (this.startDragBikeBack) {
            this.dragBikeBack();
            return;
        }

        if (this.startAdjustHeight) {
            this.adjustBikeHeight();
            return;
        }

        if (this.startFloat) {
            this.floatBike();
        }

        if (!this.completeGame
            && this.gameScene.finalPoint
            && this.bikeBody.getPosition().x > GameUtils.renderPos2PhysicsPos(this.gameScene.finalPoint).x) {
            this.completeGame = true;
        }

        if (this.isDead === false) {
            let velocity = this.bikeBody.getLinearVelocity();
            this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, velocity.y));
        }

        if (this.isDead === false && (this.isGoToJump || this.hasEffect("SpiderWeb"))) {
            if (this.hasEffect("SpiderWeb")) {
                if (this.spiderWebBreakIntervalFrame <= 0) {
                    this.jump();
                    this.spiderWebBreakIntervalFrame = Config.enemy.spiderWebBreakIntervalFrame;
                } else {
                    this.spiderWebBreakIntervalFrame--;
                }
            } else {
                this.jump();
            }
            this.isGoToJump = false;
        }

        this.reduceEffect();
        this.jumpExtraCountdown--;

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

    onDead() {
        this.isDead = true;
        let pos = this.bikeBody.getPosition();
        this.dragBackPos = {x: pos.x, y: pos.y};
        this.deadCompleteTimer = setTimeout(this.onDeadCompleted.bind(this), Config.bike.deadCompleteTime);
        this.resetBikeStatus();
    }

    onDeadCompleted() {
        this.startReborn = true;
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
            this.startDragBikeBack = false;
            this.startAdjustHeight = true;
            let rp = this.gameScene.findAdjustHeight(this.bikeSprite.x);
            rp.y += Utils.randomInRange(...Config.bikeAdjustHeightOffset);
            let pos = GameUtils.renderPos2PhysicsPos(rp);
            this.floatTargetPosX = pos.x;
            this.adjustHeight = pos.y + Config.bikeRadius;
        }
    }

    adjustBikeHeight() {
        let curPos = this.bikeBody.getPosition();
        let moveY;
        if (curPos.y < this.adjustHeight) {
            if (curPos.y + Config.bike.adjustHeightVelocity > this.adjustHeight) {
                moveY = this.adjustHeight - curPos.y;
            } else {
                moveY = Config.bike.adjustHeightVelocity;
            }
        } else if (curPos.y > this.adjustHeight) {
            if (curPos.y - Config.bike.adjustHeightVelocity < this.adjustHeight) {
                moveY = this.adjustHeight - curPos.y;
            } else {
                moveY = -Config.bike.adjustHeightVelocity;
            }
        }
        let pos = Vec2(curPos.x, curPos.y + moveY);
        this.bikeBody.setPosition(pos);
        if (this.bikeBody.getPosition().y === this.adjustHeight) {
            this.startAdjustHeight = false;
            this.startFloat = true;
            this.bikeBody.setDynamic();
            this.bikeFloatFrame = Config.rebornFloatFrame;
        }
    }

    floatBike() {
        this.bikeFloatFrame--;
        if (this.bikeFloatFrame === 0 || this.bikeBody.getPosition().x >= this.floatTargetPosX) {
            this.startFloat = false;
            this.bikeBubbleSprite.visible = false;
            this.isContactFatalEdge = false;
            this.jumping = false;
            this.jumpCount = 0;
            this.isDead = false;
        } else {
            this.bikeBody.applyForceToCenter(Vec2(0, -this.gameScene.gravity * this.bikeBody.getMass()));
            this.bikeBody.setLinearVelocity(Vec2(Config.rebornFloatVelocity, 0));
        }
    }

    jump() {
        if (this.hasEffect("SpiderWeb")) {
            this.bikeBody.applyForceToCenter(Vec2(0, this.jumpForce));
            this.spiderWebRemainBreakTimes--;
            if (this.spiderWebRemainBreakTimes === 0) {
                delete this.effectRemainFrame.SpiderWeb;
                this.effectTable.SpiderWeb.end();
            }
        } else if (this.jumpCount < Config.jumpCommonMaxCount
            || this.jumpExtraCountdown > 0) {
            let velocity = this.bikeBody.getLinearVelocity();
            this.bikeBody.setLinearVelocity(Vec2(velocity.x, 0));
            this.bikeBody.applyForceToCenter(Vec2(0, this.jumpForce));
            this.jumping = true;
            this.jumpCount++;
            this.jumpExtraCountdown = Config.bikeJumpExtraCountdown[this.jumpCount - Config.jumpCommonMaxCount];
            this.bikeSprite.rotation = Utils.angle2radius(Config.bikeJumpingRotation);
            switch (this.jumpCount) {
                case 1:
                    break;
                case 2:
                    this.emitter.playOnce();
                    break;
                default:
                    this.emitter.playOnce();
            }
        }
    }

    resetJumpStatus() {
        this.jumping = false;
        this.jumpCount = 0;
    }

    onAteItem(type, effect) {
        switch (type) {
            case "PortableItem": {
                this.portableItemList.push(effect);
                break;
            }
            case "GoldCoin": {
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

    startEffect(type) {
        if (this.effectRemainFrame[type]) {
            if (this.effectTable[type] && this.effectTable[type].cover) {
                this.effectTable[type].cover();
            }
        } else {
            if (this.effectTable[type] && this.effectTable[type].start) {
                this.effectTable[type].start();
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
                }
            }
        }
    }

    initEffectTable() {
        this.effectTable = {
            Decelerate: {
                start: () => {
                    this.originPlayerCommonVelocity = this.commonVelocity;
                    this.commonVelocity *= Config.effect.Decelerate.rate;
                    let velocity = this.bikeBody.getLinearVelocity();
                    this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, velocity.y));
                },
                end: () => {
                    this.commonVelocity = this.originPlayerCommonVelocity;
                    let velocity = this.bikeBody.getLinearVelocity();
                    this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, velocity.y));
                },
            },
            Accelerate: {
                start: () => {
                    this.originPlayerCommonVelocity = this.commonVelocity;
                    this.commonVelocity *= Config.effect.Accelerate.rate;
                    let velocity = this.bikeBody.getLinearVelocity();
                    this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, velocity.y));
                },
                end: () => {
                    this.commonVelocity = this.originPlayerCommonVelocity;
                    let velocity = this.bikeBody.getLinearVelocity();
                    this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, velocity.y));
                },
            },
            WeakenJump: {
                start: () => {
                    this.originJumpForce = this.jumpForce;
                    this.jumpForce *= Config.effect.WeakenJump.rate;
                },
                end: () => {
                    this.jumpForce = this.originJumpForce;
                },
            },
            SpiderWeb: {
                start: () => {
                    this.originJumpForce = this.jumpForce;
                    this.jumpForce *= Config.effect.SpiderWeb.jumpForceRate;
                    this.spiderWebRemainBreakTimes = Config.effect.SpiderWeb.breakTimes;
                    this.spiderWebBreakIntervalFrame = 0;
                },
                cover: () => {
                    this.spiderWebRemainBreakTimes = Config.effect.SpiderWeb.breakTimes;
                },
                end: () => {
                    this.jumpForce = this.originJumpForce;
                }
            },
            PowerJump: {
                start: () => {
                    this.originJumpForce = this.jumpForce;
                    this.jumpForce *= Config.effect.PowerJump.rate;
                },
                end: () => {
                    this.jumpForce = this.originJumpForce;
                },
            },
        };
    }

    calcJumpRadius(vx, vy, a) {
        let t = vy / a;
        let x = vx * t;
        let y = vy * t / 2;
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    resetBikeStatus() {
        this.jumpCount = 0;
        this.jumping = false;

        this.isContactFatalEdge = false;

        for (let type in this.effectRemainFrame) {
            if (this.effectRemainFrame.hasOwnProperty(type)) {
                delete this.effectRemainFrame[type];
                if (this.effectTable[type] && this.effectTable[type].end) {
                    this.effectTable[type].end();
                }
            }
        }
    }

    hasEffect(type) {
        return this.effectRemainFrame[type] !== undefined;
    }

    getName() {
        return this.playerName;
    }

    getBikePhysicalPosition() {
        return this.bikeBody.getPosition();
    }

    isPlayer() {
        return true;
    }
}
