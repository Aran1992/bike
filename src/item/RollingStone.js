import EditorItem from "./EditorItem";
import {Circle} from "../libs/planck-wrapper";
import GameUtils from "../mgr/GameUtils";
import Config from "../config";
import MusicMgr from "../mgr/MusicMgr";

export default class RollingStone extends EditorItem {
    constructor(gameMgr, parent, world, config) {
        super("rollingStone", gameMgr, parent, world, config);

        this.onCreate();
    }

    onCreate() {
        super.onCreate();

        this.body = this.world.createBody();
        this.body.setUserData(this);
        let radius = this.sprite.texture.width / 2 * this.sprite.scale.x * Config.pixel2meter;
        this.body.createFixture(Circle(radius), {density: 1, friction: 1}).setUserData({isDanger: true});
        let pp = GameUtils.renderPos2PhysicsPos(this.sprite.position);
        this.body.setPosition(pp);
        this.body.setAngle(-this.config.rotation);

        this.leftBorderX = this.sprite.x - this.sprite.texture.width * this.sprite.scale.x / 2;
    }

    update() {
        super.update();

        if (this.body.isStatic() && this.gameMgr.isItemXEnterView(this)) {
            MusicMgr.playSound(Config.item.rollingStone.appearSoundPath);
            this.body.setDynamic();
            this.body.setAngularVelocity(this.config.angularVelocity);
        }

        if (this.contactedByInvincible) {
            this.gameMgr.removeItem(this);
        }
    }

    onPreSolve(contact) {
        if (this.body.isStatic()) {
            contact.setEnabled(false);
        }
    }

    onBeginContact(contact, anotherFixture) {
        if (this.gameMgr.chtable.player.is(anotherFixture)) {
            if (this.gameMgr.isInvincible()) {
                this.contactedByInvincible = true;
            } else {
                if (this.gameMgr.bikeOutterContainer.y > this.sprite.y) {
                    this.gameMgr.setContactFatalEdge(true);
                } else {
                    this.gameMgr.resetJumpStatus();
                }
            }
        } else if (this.gameMgr.chtable.enemy.is(anotherFixture)) {
            let enemy = anotherFixture.getBody().getUserData();
            if (enemy.isInvincible()) {
                this.contactedByInvincible = true;
            } else {
                if (enemy.selfFixture === anotherFixture) {
                    if (enemy.bikeOutterContainer.y > this.sprite.y) {
                        enemy.setContactFatalEdge(true);
                    } else {
                        enemy.resetJumpStatus();
                    }
                }
            }
        }
    }

    getLeftBorderX() {
        return this.leftBorderX;
    }
}
