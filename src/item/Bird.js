import {AnimatedSprite, Sprite} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import Config from "../config";
import {Box, Vec2} from "../libs/planck-wrapper";
import Utils from "../mgr/Utils";

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
        this.sprite = new Sprite();
        this.container.addChild(this.sprite);
        const frames = GameUtils.getFrames(this.itemConfig.animationJsonPath, this.itemConfig.animationName);
        this.animation = new AnimatedSprite(frames);
        this.sprite.addChild(this.animation);
        this.animation.position.set(...this.itemConfig.animationPos);
        this.sprite.part = this;
        this.sprite.anchor.set(0.5, 0.5);
        const texture = this.animation.textures[0];
        const scaleX = this.config.props.scaleX;
        const scaleY = this.config.props.scaleY;
        this.animation.scale.set(scaleX, scaleY);
        const x = this.config.props.x + texture.width / 2 * scaleX;
        const y = this.config.props.y + texture.height / 2 * scaleY;
        this.sprite.position.set(x, y);
        this.animation.animationSpeed = this.itemConfig.animationSpeed;
        this.animation.play();
    }

    createBody() {
        this.body = this.world.createDynamicBody();
        this.body.setUserData(this);
        const pp = GameUtils.renderPos2PhysicsPos({x: this.sprite.x, y: this.sprite.y});
        this.body.setPosition(pp);
        const width = this.itemConfig.bodyWidth / 2 * this.config.props.scaleX * Config.pixel2meter;
        const height = this.itemConfig.bodyHeight / 2 * this.config.props.scaleY * Config.pixel2meter;
        this.body.createFixture(Box(width, height), {density: 1, friction: 1,});
        this.baseY = pp.y;
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
            }
        } else {
            if (!this.isDead) {
                if (this.striked) {
                    const radians = Utils.calcRadians(this.striked.bikePos, this.body.getPosition());
                    const x = Math.cos(radians) * this.itemConfig.strikedBirdImpulse;
                    const y = Math.sin(radians) * this.itemConfig.strikedBirdImpulse;
                    this.body.applyLinearImpulse(Vec2(x, y), this.body.getPosition());
                    this.body.setAngularVelocity(this.itemConfig.strikedBirdAngularVelocity);
                    this.isDead = true;
                } else if (this.trampled) {
                    this.body.applyLinearImpulse(Vec2(0, -this.itemConfig.contactBirdImpulse), this.body.getPosition());
                    this.isDead = true;
                } else {
                    if (GameUtils.isItemType(this.config, "UpDown")) {
                        this.body.setLinearVelocity(Vec2(0, this.body.getLinearVelocity().y));
                    } else {
                        this.body.setLinearVelocity(Vec2(-20, this.body.getLinearVelocity().y));
                    }
                    this.body.setAngle(0);
                    let gravity = -2.5 * this.gameMgr.gravity;
                    if (this.body.getPosition().y < this.baseY) {
                        this.body.applyForceToCenter(Vec2(0, gravity * 5));
                    } else {
                        this.body.applyForceToCenter(Vec2(0, gravity * 0.75));
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
            if (anotherBody.getPosition().y >= this.body.getPosition().y) {
                this.trampled = true;
            } else if (another.isInvincible()) {
                const {x, y} = anotherBody.getPosition();
                this.striked = {bikePos: {x, y}};
            }
        }
    }

    onPreSolve(contact, anotherFixture) {
        if (this.isDead || this.trampled || this.striked || !this.gameMgr.isBike(anotherFixture.getBody().getUserData())) {
            contact.setEnabled(false);
        }
    }

    getLeftBorderX() {
        return this.sprite.x - this.animation.anchor.x * this.animation.width * this.sprite.scale.x;
    }

    getRightBorderX() {
        return this.sprite.x + (1 - this.animation.anchor.x) * this.animation.width * this.sprite.scale.x;
    }
}
