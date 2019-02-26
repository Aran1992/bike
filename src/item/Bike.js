import {resources, Sprite} from "../libs/pixi-wrapper";
import Config from "../config";
import {Circle, Vec2} from "../libs/planck-wrapper";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";

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

        this.ateItemList = [];
        this.effectRemainFrame = {};
        this.initEffectTable();

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
        this.bikeBody.createFixture(Circle(Config.bikeRadius), {density: density, friction: 1});
        this.bikeBody.setUserData(this);
        if (config.velocityPercent) {
            this.commonVelocity *= config.velocityPercent;
            this.accVelocity *= config.velocityPercent;
        }
        this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, 0));

        let sd = {};
        sd.shape = Circle(Config.bikeRadius * 2);
        sd.isSensor = true;
        this.aiSensor = this.bikeBody.createFixture(sd);
    }

    destroy() {
        this.world.destroyBody(this.bikeBody);
        this.bikeSprite.destroy();
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
        if (selfFixture !== this.aiSensor) {
            if (this.gameScene.chtable.player.is(anotherFixture)
                || this.gameScene.chtable.enemy.is(anotherFixture)) {
                contact.setEnabled(false);
            } else if (this.gameScene.chtable.item.is(anotherFixture)) {
                contact.setEnabled(false);
                let body = anotherFixture.getBody();
                let ud = body.getUserData();
                if (this.ateItemList.find(item => item === ud) === undefined) {
                    this.ateItemList.push(ud);
                    this.onAteItem(ud.effect || ud.type);
                }
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
        } else {
            let ud = anotherFixture.getUserData();
            if (this.gameScene.chtable.road.is(anotherFixture) || (ud && ud.resetJumpStatus)) {
                this.resetJumpStatus();
            }
            if (this.gameScene.chtable.obstacle.is(anotherFixture)) {
                this.isContactFatalEdge = true;
            } else {
                if (ud && ud.isFatal) {
                    this.isContactFatalEdge = true;
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

        if (this.isDead === false && this.isGoToJump) {
            this.jump();
            this.isGoToJump = false;
        }

        this.reduceEffect();
    }

    onDead() {
        this.isDead = true;
        let pos = this.bikeBody.getPosition();
        this.dragBackPos = {x: pos.x, y: pos.y};
        this.deadCompleteTimer = setTimeout(this.onDeadCompleted.bind(this), Config.bike.deadCompleteTime);
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
        if (this.jumpCount < Config.jumpCommonMaxCount
            || this.jumpExtraCountdown > 0) {
            let velocity = this.bikeBody.getLinearVelocity();
            this.bikeBody.setLinearVelocity(Vec2(velocity.x, 0));
            this.bikeBody.applyForceToCenter(Vec2(0, this.jumpForce));
            this.jumping = true;
            this.jumpCount++;
            this.jumpExtraCountdown = Config.bikeJumpExtraCountdown[this.jumpCount - Config.jumpCommonMaxCount];
            this.bikeSprite.rotation = Utils.angle2radius(Config.bikeJumpingRotation);
        }
    }

    resetJumpStatus() {
        this.jumping = false;
        this.jumpCount = 0;
    }

    onAteItem(type) {
        switch (type) {
            case "GoldCoin": {
                break;
            }
            case "ItemAccGem": {
                this.startEffect("Accelerate");
                break;
            }
            default:
                this.startEffect(type);
        }
    }

    startEffect(type) {
        this.effectRemainFrame[type] = Config.effect[type].duration * Config.fps;
        if (this.effectTable[type].start) {
            this.effectTable[type].start();
        }
    }

    reduceEffect() {
        for (let type in this.effectRemainFrame) {
            if (this.effectRemainFrame.hasOwnProperty(type)) {
                this.effectRemainFrame[type]--;
                if (this.effectRemainFrame[type] === 0) {
                    delete this.effectRemainFrame[type];
                    if (this.effectTable[type].end) {
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
            UnlimitedJump: {},
        };
    }
}
