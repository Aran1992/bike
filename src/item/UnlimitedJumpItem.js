import EditorItem from "./EditorItem";
import Config from "../config";
import {Box} from "../libs/planck-wrapper";
import GameUtils from "../mgr/GameUtils";
import EventMgr from "../mgr/EventMgr";

export default class UnlimitedJumpItem extends EditorItem {
    constructor(gameMgr, parent, world, config) {
        super("unlimitedJumpItem", gameMgr, parent, world, config);

        this.onCreate();
    }

    onCreate() {
        super.onCreate();

        this.body = this.world.createBody();
        this.isHelpful = true;
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
        this.body.createFixture(sd);
    }

    onBeginContact(contact, anotherFixture) {
        if (this.gameMgr.chtable.player.is(anotherFixture)) {
            if (this.sprite.visible) {
                EventMgr.dispatchEvent("AteItem", "UnlimitedJump");
                this.sprite.visible = false;
            }
        } else if (this.gameMgr.chtable.enemy.is(anotherFixture)) {
            if (anotherFixture.getBody().getUserData().selfFixture === anotherFixture) {
                anotherFixture.getBody().getUserData().onAteItem("UnlimitedJump");
            }
        }
    }
}
