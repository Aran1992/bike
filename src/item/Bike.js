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

        this.onCreate();
    }

    onCreate() {
        this.bikeSprite = this.parent.addChild(new Sprite());
        this.bikeSprite.texture = this.frames[this.frameIndex];
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.scale.set(Config.bike.scale, Config.bike.scale);

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
        let density = Config.bike.density * (config.densityPercent || 1);
        this.bikeBody.createFixture(Circle(Config.bike.radius), {density: density, friction: 1});
        this.bikeBody.setUserData(this);
        if (config.velocityPercent) {
            this.commonVelocity *= config.velocityPercent;
            this.accVelocity *= config.velocityPercent;
        }
        this.bikeBody.setLinearVelocity(Vec2(this.commonVelocity, 0));
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

    onPreSolve(contact, anotherFixture,) {
        if (this.isDead) {
            return contact.setEnabled(false);
        }
        if (this.gameScene.chtable.player.is(anotherFixture)
            || this.gameScene.chtable.enemy.is(anotherFixture)) {
            contact.setEnabled(false);
        } else if (this.gameScene.chtable.item.is(anotherFixture)) {
            contact.setEnabled(false);
            let body = anotherFixture.getBody();
            if (body.isAwake()) {
                body.setAwake(false);
                body.getUserData().sprite.visible = false;
            }
        }
    }

    onBeginContact(contact, anotherFixture,) {
        if (this.gameScene.chtable.road.is(anotherFixture)) {
            this.jumping = false;
            this.jumpCount = 0;
        }
        if (this.gameScene.chtable.obstacle.is(anotherFixture)) {
            this.isContactFatalEdge = true;
        } else {
            let ud = anotherFixture.getUserData();
            if (ud && ud.isFatal) {
                this.isContactFatalEdge = true;
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
        if (!this.isDead) {
            let velocity = this.bikeBody.getLinearVelocity();
            this.bikeSprite.rotation = -Math.atan(velocity.y / velocity.x);
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
        let velocity = Config.rebornDragVelocity;
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
            this.adjustHeight = pos.y + Config.bike.radius;
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
}
