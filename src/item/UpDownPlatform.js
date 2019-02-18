import {Box, Vec2} from "../libs/planck-wrapper";
import GameUtils from "../mgr/GameUtils";
import Config from "../config";
import EditorItem from "./EditorItem";

export default class UpDownPlatform extends EditorItem {
    constructor(gameMgr, parent, world, config) {
        super("upDownPlatform", gameMgr, parent, world, config);

        this.config.velocity *= Config.pixel2meter;

        this.onCreate();
    }

    onCreate() {
        super.onCreate();

        this.body = this.world.createKinematicBody();
        this.body.setUserData(this);
        let texture = this.sprite.texture;
        let hw = texture.width / 2 * Config.pixel2meter * this.config.scaleX;
        let hh = texture.height / 2 * Config.pixel2meter * this.config.scaleY;
        let fixture = this.body.createFixture(Box(hw, hh));
        fixture.setUserData({resetJumpStatus: true});
        let pp = GameUtils.renderPos2PhysicsPos(this.sprite.position);
        this.body.setPosition(pp);
        this.body.setAngle(-this.config.rotation);

        this.config.topY = this.sprite.y - this.config.topOffset;
        this.config.bottomY = this.sprite.y + this.config.bottomOffset;

        if (this.config.isStartUp) {
            this.body.setLinearVelocity(Vec2(0, this.config.velocity));
        } else {
            this.body.setLinearVelocity(Vec2(0, -this.config.velocity));
        }
    }

    update() {
        super.update();

        let rp = this.sprite.position;
        if (rp.y <= this.config.topY) {
            this.body.setLinearVelocity(Vec2(0, -this.config.velocity));
        } else if (rp.y >= this.config.bottomY) {
            this.body.setLinearVelocity(Vec2(0, this.config.velocity));
        }
    }
}
