import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";
import {resources, Sprite} from "../libs/pixi-wrapper";
import Config from "../config";

export default class EditorItem {
    constructor(itemType, gameMgr, parent, world, config) {
        this.gameMgr = gameMgr;
        this.parent = parent;
        this.world = world;

        this.config = {
            imagePath: `myLaya/laya/assets/${config.props.skin}`,
            scaleX: config.props.scaleX === undefined ? 1 : config.props.scaleX,
            scaleY: config.props.scaleY === undefined ? 1 : config.props.scaleY,
            rotation: config.props.rotation === undefined ? 0 : Utils.angle2radius(config.props.rotation),
            x: config.props.x,
            y: config.props.y,
        };
        let id = GameUtils.getItemProp(config, "ID");
        if (id) {
            let props = Config.item[itemType].table[id];
            if (props) {
                Utils.copyProps(this.config, props);
            } else {
                console.error(`物体${itemType}没有ID${id}的配置`);
            }
        }

        this.sprite = undefined;
        this.body = undefined;
    }

    destroy() {
        this.sprite.destroy();
        this.world.destroyBody(this.body);
    }

    onCreate() {
        this.sprite = this.parent.addChild(new Sprite());
        this.sprite.texture = resources[this.config.imagePath].texture;
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.scale.set(this.config.scaleX, this.config.scaleY);
        this.sprite.rotation = this.config.rotation;
        this.sprite.position.set(this.config.x, this.config.y);
    }

    update() {
        let pp = this.body.getPosition();
        let rp = GameUtils.physicsPos2renderPos(pp);
        this.sprite.position.set(rp.x, rp.y);
        this.sprite.rotation = -this.body.getAngle();
    }

    onPreSolve() {
    }

    onBeginContact() {
    }
}