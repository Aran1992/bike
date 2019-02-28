import EditorItem from "./EditorItem";
import {Box} from "../libs/planck-wrapper";
import Config from "../config";
import GameUtils from "../mgr/GameUtils";
import EventMgr from "../mgr/EventMgr";
import Utils from "../mgr/Utils";
import {resources} from "../libs/pixi-wrapper";

export default class PortableItem extends EditorItem {
    constructor(gameMgr, parent, world, config) {
        super("PortableItem", gameMgr, parent, world, config);

        this.isHelpful = 1;

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
        this.body.createFixture(sd);
        this.body.setPosition(GameUtils.renderPos2PhysicsPos(this.sprite.position));
        this.body.setAngle(-this.sprite.rotation);
    }

    onBeginContact(contact, anotherFixture) {
        if (this.gameMgr.chtable.player.is(anotherFixture)) {
            if (this.sprite.visible) {
                if (this.config.effect === "Random") {
                    let effect = this.gameMgr.randomEffect();
                    let texture = resources[Config.effect[effect].imagePath || Config.defaultItemImagePath].texture;
                    EventMgr.dispatchEvent("AteItem", "PortableItem", effect, texture);
                } else {
                    EventMgr.dispatchEvent("AteItem", "PortableItem", this.config.effect, this.sprite.texture);
                }
                this.sprite.visible = false;
            }
        } else if (this.gameMgr.chtable.enemy.is(anotherFixture)) {
            let enemy = anotherFixture.getBody().getUserData();
            if (enemy.selfFixture === anotherFixture) {
                let effect = Config.effect[this.config.effect];
                if (effect) {
                    if (effect === "Random") {
                        effect = this.gameMgr.randomEffect();
                    }
                    if (effect.isHelpful) {
                        enemy.onAteItem(this.config.effect);
                    } else {
                        let anotherList = this.gameMgr.enemyList.concat([this.gameMgr.bikeBody.getUserData()]);
                        anotherList.splice(anotherList.indexOf(enemy), 1);
                        Utils.randomChoose(anotherList).onAteItem(this.config.effect);
                    }
                }
            }
        }
    }
}
