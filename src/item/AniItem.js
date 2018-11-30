import Config from "../config";
import Item from "./Item";
import GameUtils from "../mgr/GameUtils";
import {AnimatedSprite} from "../libs/pixi-wrapper";
import {Box} from "../libs/planck-wrapper";

export default class AniItem extends Item {
    create() {
        this.initAni();
        this.sprite = new AnimatedSprite(this.frames);
        this.sprite.position.set(this.config.props.x, this.config.props.y);
        this.sprite.scale.set(this.config.props.scaleX, this.config.props.scaleY);
        this.sprite.animationSpeed = this.animationSpeed;
        this.sprite.play();

        let body = this.world.createBody();
        this.body = body;
        let texture = this.frames[0];
        let width = texture.width / 2 * this.sprite.scale.x * Config.pixel2meter;
        let height = texture.height / 2 * this.sprite.scale.y * Config.pixel2meter;
        body.createFixture(Box(width, height), {density: 0, friction: 1,});
        let x = this.config.props.x + texture.width / 2 * this.sprite.scale.x;
        let y = this.config.props.y + texture.height / 2 * this.sprite.scale.y;
        body.setPosition(GameUtils.renderPos2PhysicsPos({x, y}));
        body.setUserData({type: GameUtils.getItemType(this.config), sprite: this.sprite});
    }
}
