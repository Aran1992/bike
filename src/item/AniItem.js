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
        let halfWidth = (this.bodyWidth !== undefined ? this.bodyWidth : texture.width) / 2 * this.sprite.scale.x;
        let halfHeight = (this.bodyHeight !== undefined ? this.bodyHeight : texture.height) / 2 * this.sprite.scale.y;
        body.createFixture(Box(halfWidth * Config.pixel2meter, halfHeight * Config.pixel2meter),
            {density: 0, friction: 1,});
        let offsetX = this.bodyOffsetX || 0;
        let offsetY = this.bodyOffsetY || 0;
        let x = this.config.props.x + offsetX * this.sprite.scale.x + halfWidth;
        let y = this.config.props.y + offsetY * this.sprite.scale.y + halfHeight;
        body.setPosition(GameUtils.renderPos2PhysicsPos({x, y}));
        body.setUserData({type: GameUtils.getItemType(this.config), sprite: this.sprite});
    }
}
