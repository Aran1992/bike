import Config from "../config";
import Item from "./Item";
import GameUtils from "../mgr/GameUtils";
import {AnimatedSprite} from "../libs/pixi-wrapper";
import {Box} from "../libs/planck-wrapper";

export default class BlackBird extends Item {
    initAni() {
        this.frames = GameUtils.getFrames(Config.birdAniJson);
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

        if (GameUtils.isItemType(this.config, "UpDown")) {
            this.upDown = true;
        }
    }

    createBody() {
        let texture = this.frames[0];
        let body = this.world.createDynamicBody();
        let width = Config.item.bird.bodyWidth / 2 * this.sprite.scale.x * Config.pixel2meter;
        let height = Config.item.bird.bodyHeight / 2 * this.sprite.scale.y * Config.pixel2meter;
        body.createFixture(Box(width, height), {density: 1, friction: 1,});
        let x = this.config.props.x + texture.width / 2 * this.sprite.scale.x;
        let y = this.config.props.y + texture.height / 2 * this.sprite.scale.y;
        let pp = GameUtils.renderPos2PhysicsPos({x, y});
        body.setPosition(pp);
        body.setUserData(this);
        this.body = body;
        this.baseY = pp.y;
        this.type = GameUtils.getItemType(this.config);
    }

    onBeginContact(contact, anotherFixture) {
        if (this.gameMgr.chtable.player.is(anotherFixture)) {
            if (this.gameMgr.bikeOutterContainer.y > this.sprite.y) {
                this.gameMgr.isContactFatalEdge = true;
            } else {
                this.gameMgr.resetJumpStatus();
            }
        } else if (this.gameMgr.chtable.enemy.is(anotherFixture)) {
            let enemy = anotherFixture.getBody().getUserData();
            if (enemy.selfFixture === anotherFixture) {
                if (enemy.bikeOutterContainer.y > this.sprite.y) {
                    enemy.isContactFatalEdge = true;
                } else {
                    enemy.resetJumpStatus();
                }
            }
        }
    }
}
