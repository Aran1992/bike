import EditorItem from "./EditorItem";
import {Box, Vec2} from "../libs/planck-wrapper";
import Config from "../config";
import GameUtils from "../mgr/GameUtils";
import EventMgr from "../mgr/EventMgr";
import Utils from "../mgr/Utils";
import {resources} from "../libs/pixi-wrapper";

export default class EatableItem extends EditorItem {
    constructor(gameMgr, parent, world, config) {
        super("EatableItem", gameMgr, parent, world, config);

        this.isHelpful = this.config.portable ? true : Config.effect[this.config.effect].isHelpful;

        this.onCreate();
    }

    onCreate() {
        super.onCreate();

        this.body = this.world.createBody();
        this.body.setUserData(this);
        let sd = {};
        let texture = this.sprite.texture;
        let hw = texture.width / 2 * Config.pixel2meter * this.sprite.scale.x;
        let hh = texture.height / 2 * Config.pixel2meter * this.sprite.scale.y;
        sd.shape = Box(hw, hh);
        sd.isSensor = true;
        this.body.createFixture(sd).setUserData({isDanger: !this.isHelpful});
        this.body.setPosition(GameUtils.renderPos2PhysicsPos(this.sprite.position));
        this.body.setAngle(-this.sprite.rotation);
    }

    onBeginContact(contact, anotherFixture) {
        if (this.config.portable) {
            if (this.gameMgr.chtable.player.is(anotherFixture)) {
                if (this.sprite.visible) {
                    if (this.config.effect === "Random") {
                        let effect = this.gameMgr.randomEffect(this.gameMgr);
                        let texture = resources[Config.effect[effect].imagePath || Config.defaultItemImagePath].texture;
                        EventMgr.dispatchEvent("AteItem", "PortableItem", effect, texture);
                    } else {
                        EventMgr.dispatchEvent("AteItem", "PortableItem", this.config.effect, this.sprite.texture);
                    }
                    this.sprite.visible = false;
                    if (this.gameMgr.dynamicCreateRoad) {
                        this.gameMgr.removeItem(this);
                    }
                }
            } else if (this.gameMgr.chtable.enemy.is(anotherFixture)) {
                let enemy = anotherFixture.getBody().getUserData();
                if (enemy.selfFixture === anotherFixture) {
                    if (this.config.effect === "Random") {
                        enemy.onAteItem("PortableItem", this.gameMgr.randomEffect(enemy));
                    } else {
                        enemy.onAteItem("PortableItem", this.config.effect);
                    }
                }
            }
        } else {
            if (this.gameMgr.chtable.player.is(anotherFixture)) {
                if (this.sprite.visible) {
                    EventMgr.dispatchEvent("AteItem", this.config.effect);
                    this.sprite.visible = false;
                    if (this.gameMgr.dynamicCreateRoad) {
                        this.gameMgr.removeItem(this);
                    }
                }
            } else if (this.gameMgr.chtable.enemy.is(anotherFixture)) {
                if (anotherFixture.getBody().getUserData().selfFixture === anotherFixture) {
                    anotherFixture.getBody().getUserData().onAteItem(this.config.effect);
                }
            }
        }
    }

    update() {
        super.update();

        if (this.body.isKinematic()) {
            this.moveToPlayer();
        } else {
            if (this.gameMgr.hasEffect("Magnet") && this.gameMgr.isItemXInView(this)) {
                this.body.setKinematic();
                this.moveToPlayer();
            }
        }
    }

    moveToPlayer() {
        if (this.gameMgr.gameStatus === "play") {
            let radius = Utils.calcRadius(this.body.getPosition(), this.gameMgr.bikeBody.getPosition());
            let velocity = Config.effect.Magnet.velocity * Config.pixel2meter;
            let vx = velocity * Math.cos(radius);
            let vy = velocity * Math.sin(radius);
            this.body.setLinearVelocity(Vec2(vx, vy));
        } else {
            this.body.setLinearVelocity(Vec2(0, 0));
        }
    }
}