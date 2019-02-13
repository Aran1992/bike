import {resources, Sprite} from "../libs/pixi-wrapper";
import {Box, Vec2} from "../libs/planck-wrapper";
import GameUtils from "../mgr/GameUtils";
import Config from "../config";
import Utils from "../mgr/Utils";

export default class UpDownPlatform {
    constructor(parent, world, config) {
        this.parent = parent;
        this.world = world;

        this.config = {
            imagePath: `myLaya/laya/assets/${config.props.skin}`,
            scaleX: config.props.scaleX === undefined ? 1 : config.props.scaleX,
            scaleY: config.props.scaleY === undefined ? 1 : config.props.scaleY,
            x: config.props.x,
            y: config.props.y,
        };
        let id = GameUtils.getItemProp(config, "ID");
        let props = Config.item.upDownPlatform.table[id];
        if (props === undefined) {
            App.showNotice(`ID为${id}的上下移动平台没有进行配置`);
        }
        Utils.copyProps(this.config, props);
        this.config.velocity *= Config.pixel2meter;

        this.sprite = undefined;
        this.body = undefined;

        this.onCreate();
    }

    destroy() {
        this.sprite.destroy();
        this.world.destroyBody(this.body);
    }

    onCreate() {
        this.sprite = this.parent.addChild(new Sprite());
        let texture = resources[this.config.imagePath].texture;
        this.sprite.texture = texture;
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.scale.set(this.config.scaleX, this.config.scaleY);
        this.sprite.position.set(this.config.x, this.config.y);

        this.body = this.world.createKinematicBody();
        let hw = texture.width / 2 * Config.pixel2meter * this.config.scaleX;
        let hh = texture.height / 2 * Config.pixel2meter * this.config.scaleY;
        let fixture = this.body.createFixture(Box(hw, hh));
        fixture.setUserData({resetJumpStatus: true});
        let pp = GameUtils.renderPos2PhysicsPos(this.sprite.position);
        this.body.setPosition(pp);

        this.config.topY = this.sprite.y - this.config.topOffset;
        this.config.bottomY = this.sprite.y + this.config.bottomOffset;

        if (this.config.isStartUp) {
            this.body.setLinearVelocity(Vec2(0, this.config.velocity));
        } else {
            this.body.setLinearVelocity(Vec2(0, -this.config.velocity));
        }
    }

    update() {
        let pp = this.body.getPosition();
        let rp = GameUtils.physicsPos2renderPos(pp);
        this.sprite.position.set(rp.x, rp.y);

        if (rp.y <= this.config.topY) {
            this.body.setLinearVelocity(Vec2(0, -this.config.velocity));
        } else if (rp.y >= this.config.bottomY) {
            this.body.setLinearVelocity(Vec2(0, this.config.velocity));
        }
    }
}
