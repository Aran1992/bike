import EditorItem from "./EditorItem";
import Config from "../config";
import {Box, Vec2} from "../libs/planck-wrapper";
import GameUtils from "../mgr/GameUtils";

export default class FireBall extends EditorItem {
    constructor(gameMgr, parent, world, config) {
        super("fireBall", gameMgr, parent, world, config);

        this.config.velocity *= Config.pixel2meter;

        this.onCreate();
    }

    onCreate() {
        super.onCreate();

        this.body = this.world.createBody();
        this.body.setUserData(this);
        let pp = GameUtils.renderPos2PhysicsPos(this.sprite.position);
        this.body.setPosition(pp);
        this.body.setAngle(-this.config.rotation);
        let sd = {};
        let texture = this.sprite.texture;
        let hw = texture.width / 2 * Config.pixel2meter * this.config.scaleX;
        let hh = texture.height / 2 * Config.pixel2meter * this.config.scaleY;
        sd.shape = Box(hw, hh);
        sd.isSensor = true;
        this.body.createFixture(sd).setUserData({isDanger: true});

        this.leftBorderX = this.sprite.x - this.sprite.texture.width * this.sprite.scale.x / 2;
    }

    update() {
        super.update();

        if (this.body.isStatic() && this.gameMgr.isItemXEnterView(this)) {
            this.body.setKinematic();
            this.body.setLinearVelocity(Vec2(this.config.velocity, 0));
        }
    }

    onBeginContact(contact, anotherFixture) {
        if (this.gameMgr.chtable.player.is(anotherFixture)) {
            this.gameMgr.setContactFatalEdge(true);
        } else if (this.gameMgr.chtable.enemy.is(anotherFixture)) {
            if (anotherFixture.getBody().getUserData().selfFixture === anotherFixture) {
                anotherFixture.getBody().getUserData().setContactFatalEdge(true);
            }
        }
    }

    getLeftBorderX() {
        return this.leftBorderX;
    }
}
