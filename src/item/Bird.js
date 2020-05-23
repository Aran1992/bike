import GameUtils from "../mgr/GameUtils";
import Config from "../config";
import {Box, Vec2} from "../libs/planck-wrapper";
import Utils from "../mgr/Utils";
import {AnimatedSprite, Graphics, Sprite} from "../libs/pixi-wrapper";
import RunOption from "../../run-option";
import MusicMgr from "../mgr/MusicMgr";

export default class Bird {
    constructor(gameMgr, container, world, config) {
        this.gameMgr = gameMgr;
        this.container = container;
        this.world = world;
        this.config = config;
        const id = GameUtils.getItemProp(config, "ID") || "default";
        this.itemConfig = Config.item.bird.table[id];

        this.type = GameUtils.getItemType(this.config);
        this.itemType = "bird";

        this.createSprite();
    }

    createSprite() {
        this.sprite = this.container.addChild(new Sprite());
        this.sprite.part = this;
        const frames = GameUtils.getFrames(this.itemConfig.animationJsonPath, this.itemConfig.animationName);
        this.animation = this.sprite.addChild(new AnimatedSprite(frames));
        this.animation.anchor.set(0.5, 0.5);
        const scaleX = this.config.props.scaleX;
        const scaleY = this.config.props.scaleY;
        this.animation.scale.set(scaleX, scaleY);
        this.animation.position.set(...this.itemConfig.animationPos);
        this.animation.animationSpeed = this.itemConfig.animationSpeed;
        this.animation.play();
        const texture = this.animation.textures[0];
        const x = this.config.props.x + texture.width / 2 * scaleX;
        const y = this.config.props.y + texture.height / 2 * scaleY;
        this.sprite.position.set(x, y);
    }

    createBody() {
        if (this.isDynamic()) {
            this.body = this.world.createKinematicBody();
        } else {
            this.body = this.world.createBody();
        }
        this.body.setUserData(this);
        const pp = GameUtils.renderPos2PhysicsPos({x: this.sprite.x, y: this.sprite.y});
        this.body.setPosition(pp);
        const halfWidth = this.itemConfig.bodyWidth / 2 * Config.pixel2meter;
        const halfHeight = this.itemConfig.bodyHeight / 2 * Config.pixel2meter;
        const fixedMass = (64 / 2 * 0.8 * Config.pixel2meter) * (40 / 2 * 0.8 * Config.pixel2meter);
        const density = fixedMass / halfWidth / halfHeight;
        this.body.createFixture(Box(halfWidth, halfHeight), {density: density, friction: 1,});
        this.baseY = pp.y;
        this.bodyHeight = halfHeight * 2;
        this.frame = 0;

        if (RunOption.showCollider) {
            const graphics = new Graphics();
            graphics.beginFill();
            const width = halfWidth * 2 * Config.meter2pixel;
            const height = halfHeight * 2 * Config.meter2pixel;
            graphics.drawRect(-width / 2, -height / 2, width, height);
            graphics.endFill();
            this.sprite.addChild(graphics);
        }
    }

    destroy() {
        if (this.body) {
            this.world.destroyBody(this.body);
        }
        this.sprite.destroy();
    }

    update() {
        if (this.body === undefined) {
            if (this.gameMgr.isItemXEnterView(this)) {
                this.createBody();
                if (this.itemConfig.appearSoundPath && this.itemConfig.appearSoundPath.length > 0) {
                    MusicMgr.playSound(this.itemConfig.appearSoundPath, undefined, this.gameMgr.stepSpeed);
                }
            }
        } else {
            if (!this.isDead) {
                if (this.striked) {
                    this.body.setDynamic();
                    const radians = Utils.calcRadians(this.striked.bikePos, this.body.getPosition());
                    const x = Math.cos(radians) * this.itemConfig.strikedBirdImpulse;
                    const y = Math.sin(radians) * this.itemConfig.strikedBirdImpulse;
                    this.body.applyLinearImpulse(Vec2(x, y), this.body.getPosition());
                    this.body.setAngularVelocity(this.itemConfig.strikedBirdAngularVelocity);
                    this.isDead = true;
                } else if (this.trampled) {
                    this.body.setDynamic();
                    this.body.applyLinearImpulse(Vec2(0, -this.itemConfig.contactBirdImpulse), this.body.getPosition());
                    this.isDead = true;
                } else if (this.jacked) {
                    this.body.setDynamic();
                    this.body.applyLinearImpulse(Vec2(0, this.itemConfig.contactBirdImpulse), this.body.getPosition());
                    this.isDead = true;
                } else {
                    this.body.setLinearVelocity(Vec2(this.itemConfig.forwardVelocity, 0));
                    if (this.isMoveUpDown()) {
                        this.frame += this.itemConfig.upDownStep;
                        const y = this.baseY + Math.sin(this.frame) * this.itemConfig.upDownCoefficient;
                        this.body.setPosition(Vec2(this.body.getPosition().x, y));
                    }
                }
            }

            let pos = GameUtils.physicsPos2renderPos(this.body.getPosition());
            this.sprite.position.set(pos.x, pos.y);
            this.sprite.rotation = -this.body.getAngle();
        }
    }

    onBeginContact(contact, anotherFixture) {
        if (this.isDead) {
            return;
        }
        const anotherBody = anotherFixture.getBody();
        const another = anotherBody.getUserData();
        if (this.gameMgr.isBike(another)) {
            if (this.isAbleToBeTrampled() && anotherBody.getPosition().y >= this.body.getPosition().y + this.bodyHeight / 2) {
                another.resetJumpStatus();
                anotherBody.setLinearVelocity(Vec2(anotherBody.getLinearVelocity().x, this.itemConfig.contactBikeVelocity));
                this.trampled = true;
            } else if (this.isAbleToBeJacked() && anotherBody.getPosition().y <= this.body.getPosition().y - this.bodyHeight / 2) {
                another.resetJumpStatus();
                anotherBody.setLinearVelocity(Vec2(anotherBody.getLinearVelocity().x, -this.itemConfig.contactBikeVelocity));
                this.jacked = true;
            } else if (another.isInvincible()) {
                const {x, y} = anotherBody.getPosition();
                this.striked = {bikePos: {x, y}};
            } else {
                another.setContactFatalEdge(true);
            }
        }
    }

    onPreSolve(contact, anotherFixture) {
        if (this.isDead || this.trampled || this.jacked || this.striked || !this.gameMgr.isBike(anotherFixture.getBody().getUserData())) {
            contact.setEnabled(false);
        }
    }

    getLeftBorderX() {
        return this.sprite.x - this.animation.anchor.x * this.animation.width * this.animation.scale.x;
    }

    getRightBorderX() {
        return this.sprite.x + (1 - this.animation.anchor.x) * this.animation.width * this.animation.scale.x;
    }

    isAbleToBeTrampled() {
        return this.itemConfig.isAbleToBeTrampled;
    }

    isAbleToBeJacked() {
        return this.itemConfig.isAbleToBeJacked;
    }

    isDynamic() {
        return GameUtils.isItemType(this.config, "UpDown")
            || this.itemConfig.isMoveUpDown
            || this.itemConfig.forwardVelocity;
    }

    isMoveUpDown() {
        return GameUtils.isItemType(this.config, "UpDown")
            || this.itemConfig.isMoveUpDown;
    }
}
