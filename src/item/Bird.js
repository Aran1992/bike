import {AnimatedSprite} from "../libs/pixi-wrapper";
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

        this.type = GameUtils.getItemType(this.config);
        this.itemType = "bird";

        this.createSprite();
    }

    createSprite() {
        this.sprite = this.container.addChild(new AnimatedSprite(GameUtils.getFrames(Config.birdAniJson)));
        this.sprite.part = this;
        this.sprite.anchor.set(0.5, 0.5);
        const texture = this.sprite.textures[0];
        const scaleX = this.config.props.scaleX;
        const scaleY = this.config.props.scaleY;
        this.sprite.scale.set(scaleX, scaleY);
        const x = this.config.props.x + texture.width / 2 * scaleX;
        const y = this.config.props.y + texture.height / 2 * scaleY;
        this.sprite.position.set(x, y);
        this.sprite.animationSpeed = 0.25;
        this.sprite.play();
    }

    createBody() {
        this.body = this.world.createDynamicBody();
        this.body.setUserData(this);
        const pp = GameUtils.renderPos2PhysicsPos({x: this.sprite.x, y: this.sprite.y});
        this.body.setPosition(pp);
        const width = Config.item.bird.bodyWidth / 2 * this.config.props.scaleX * Config.pixel2meter;
        const height = Config.item.bird.bodyHeight / 2 * this.config.props.scaleY * Config.pixel2meter;
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
                    const x = Math.cos(radians) * Config.item.bird.strikedBirdImpulse;
                    const y = Math.sin(radians) * Config.item.bird.strikedBirdImpulse;
                    this.body.applyLinearImpulse(Vec2(x, y), this.body.getPosition());
                    this.body.setAngularVelocity(50);
                    this.isDead = true;
                } else if (this.trampled) {
                    this.body.applyLinearImpulse(Vec2(0, -Config.item.bird.contactBirdImpulse), this.body.getPosition());
                    this.isDead = true;
                } else {
                    if (!GameUtils.isItemType(this.config, "UpDown")) {
                        this.body.setLinearVelocity(Vec2(-20, this.body.getLinearVelocity().y));
                    }
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
        return this.sprite.x - this.sprite.anchor.x * this.sprite.width * this.sprite.scale.x;
    }

    getRightBorderX() {
        return this.sprite.x + (1 - this.sprite.anchor.x) * this.sprite.width * this.sprite.scale.x;
    }
}
