import {AnimatedSprite} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import Config from "../config";
import {Box, Vec2} from "../libs/planck-wrapper";

export default class GroundStab {
    constructor(parent, world, config,) {
        this.parent = parent;
        this.world = world;

        this.frames = GameUtils.getFrames(Config.sceneItemImagePath.groundStab);
        this.sprite = this.parent.addChild(new AnimatedSprite(this.frames));
        this.sprite.animationSpeed = Config.item.groundStab.animationSpeed;
        this.sprite.play();
        this.sprite.anchor.set(config.props.anchorX, config.props.anchorY);
        this.sprite.scale.set(config.props.scaleX, config.props.scaleY);
        this.sprite.position.set(config.props.x, config.props.y);

        this.body = this.world.createBody();
        let width = Config.item.groundStab.bodyWidth / 2 * Config.pixel2meter * config.props.scaleX;
        let height = Config.item.groundStab.bodyHeight / 2 * Config.pixel2meter * config.props.scaleY;
        let shape = Box(width, height);
        let fixture = this.body.createFixture(shape);
        fixture.setUserData({isFatal: true});
        let physicalPos = GameUtils.renderPos2PhysicsPos(this.sprite.position);
        this.body.setPosition(Vec2(physicalPos.x, physicalPos.y + height / 2));
    }
}
