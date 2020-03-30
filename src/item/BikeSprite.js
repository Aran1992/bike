import Config from "../config";
import {AnimatedSprite, Container, resources, Sprite} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";

export default class BikeSprite {
    constructor(parent, childIndex) {
        this.bikeSprite = new Container();
        if (childIndex !== undefined) {
            parent.addChildAt(this.bikeSprite, childIndex);
        } else {
            parent.addChild(this.bikeSprite);
        }
        this.decorateSprite = new Sprite();
        this.bikeSprite.addChild(this.decorateSprite);
    }

    setBikeID(id) {
        let config = Config.bikeList.find(bike => bike.id === id);
        if (config.imagePath && config.imagePath.length !== 0) {
            this.decorateSprite.texture = resources[config.imagePath].texture;
            this.decorateSprite.anchor.set(...config.anchor);
            this.decorateSprite.scale.set(...config.scale);
            this.decorateSprite.position.set(...config.position);
            this.decorateSprite.visible = true;
        } else {
            this.decorateSprite.visible = false;
        }
        const textures = GameUtils.getFrames(config.bikeCommonAnimation || Config.bikeCommonAnimation, "bike");
        if (this.bikeAnimSprite === undefined) {
            this.bikeAnimSprite = this.bikeSprite.addChildAt(new AnimatedSprite(textures), 0);
            this.bikeAnimSprite.anchor.set(0.5, 0.5);
        } else {
            this.bikeAnimSprite.textures = textures;
        }
        this.bikeAnimSprite.position.set(...(config.bikeCommonAnimationPos || Config.bikeCommonAnimationPos));
    }

    setPositionX(x) {
        this.bikeSprite.x = x;
    }

    getPositionX() {
        return this.bikeSprite.x;
    }

    getLeftBorderX() {
        return this.bikeSprite.x - this.bikeAnimSprite.width / 2;
    }

    setPosition(x, y) {
        this.bikeSprite.position.set(x, y);
    }

    getWidth() {
        return this.bikeAnimSprite.width;
    }

    play() {
        this.bikeAnimSprite.play();
    }

    stop() {
        this.bikeAnimSprite.stop();
    }

    destroy() {
        this.bikeSprite.destroy();
    }

    setGray(gray) {
        GameUtils.greySprite(this.bikeSprite, gray);
    }
}

const bikeAnimation = [];
Config.bikeList.forEach(bike => {
    if (bike.bikeCommonAnimation) {
        bikeAnimation.push(bike.bikeCommonAnimation);
    }
    if (bike.bikeJumpingAnimation) {
        for (const key in bike.bikeJumpingAnimation) {
            if (bike.bikeJumpingAnimation.hasOwnProperty(key)) {
                bikeAnimation.push(bike.bikeJumpingAnimation[key].atlasPath);
            }
        }
    }
});
BikeSprite.resPathList = [Config.bikeCommonAnimation, ...Utils.values(Config.bikeList).map(obj => obj.imagePath), ...bikeAnimation];
