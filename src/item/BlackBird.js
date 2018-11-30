import Config from "../config";
import Item from "./Item";
import GameUtils from "../mgr/GameUtils";
import {AnimatedSprite, Texture} from "../libs/pixi-wrapper";
import {Box} from "../libs/planck-wrapper";

export default class BlackBird extends Item {
    initAni() {
        let frames = [];
        for (let i = 1; i <= 9; i++) {
            frames.push(Texture.fromFrame(`Bird0${i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }

    create() {
        this.initAni();
        let texture = this.frames[0];
        this.sprite = new AnimatedSprite(this.frames);
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(this.config.props.x + texture.width / 2, this.config.props.y + texture.height / 2);
        this.sprite.scale.set(this.config.props.scaleX, this.config.props.scaleY);
        this.sprite.animationSpeed = this.animationSpeed;
        this.sprite.play();

        let body = this.world.createDynamicBody();
        this.body = body;
        let width = texture.width / 2 * this.sprite.scale.x * Config.pixel2meter;
        let height = texture.height / 2 * this.sprite.scale.y * Config.pixel2meter;
        let fixture = body.createFixture(Box(width, height), {density: 1, friction: 1,});
        fixture.setUserData({isFatal: true});
        let x = this.config.props.x + texture.width / 2 * this.sprite.scale.x;
        let y = this.config.props.y + texture.height / 2 * this.sprite.scale.y;
        let pp = GameUtils.renderPos2PhysicsPos({x, y});
        body.setPosition(pp);
        body.setUserData({type: GameUtils.getItemType(this.config), sprite: this.sprite});
        body.setAwake(false);
        this.body = body;
        this.baseY = pp.y;
    }
}
