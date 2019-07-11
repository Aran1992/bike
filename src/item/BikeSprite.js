import Config from "../config";
import {AnimatedSprite, resources, Sprite} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";

export default class BikeSprite {
    constructor(parent, childIndex) {
        this.bikeSprite = new AnimatedSprite(GameUtils.getFrames(Config.bikeAtlasPath, "bike"));
        if (childIndex !== undefined) {
            parent.addChildAt(this.bikeSprite, childIndex);
        } else {
            parent.addChild(this.bikeSprite);
        }
        this.bikeSprite.anchor.set(0.5, 0.5);
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
    }

    setPositionX(x) {
        this.bikeSprite.x = x;
    }

    getPositionX() {
        return this.bikeSprite.x;
    }

    getLeftBorderX() {
        return this.bikeSprite.x - this.bikeSprite.width / 2;
    }

    setPosition(x, y) {
        this.bikeSprite.position.set(x, y);
    }

    getWidth() {
        return this.bikeSprite.width;
    }

    play() {
        this.bikeSprite.play();
    }

    stop() {
        this.bikeSprite.stop();
    }

    destroy() {
        this.bikeSprite.destroy();
    }

    setGray(gray) {
        GameUtils.greySprite(this.bikeSprite, gray);
    }
}

BikeSprite.resPathList = [Config.bikeAtlasPath, ...Utils.values(Config.bikeList).map(obj => obj.imagePath)];
