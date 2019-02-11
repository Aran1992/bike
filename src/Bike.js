import {Sprite} from "./libs/pixi-wrapper";
import {Circle} from "./libs/planck-wrapper";
import Config from "./config";

export default class Bike {
    constructor(parent, world, id) {
        this.parent = parent;
        this.world = world;
        this.id = id;

        this.bikeSprite = undefined;
        this.bubbleSprite = undefined;
        this.bikeBody = undefined;

        this.onCreate();
    }

    onCreate() {
        this.bikeSprite = this.parent.addChild(new Sprite());
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.scale.set(Config.bike.scale, Config.bike.scale);

        let config = Config.bikeTable[this.id];

        let decorateSprite = this.bikeSprite.addChild(Sprite.from(config.imagePath));
        decorateSprite.anchor.set(...config.anchor);
        decorateSprite.scale.set(...config.scale);
        decorateSprite.position.set(...config.position);

        this.bubbleSprite = this.bikeSprite.addChild(Sprite.from(Config.bike.bubble.imagePath));
        this.bubbleSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.visible = false;

        this.bikeBody = this.world.createDynamicBody();
        let density = Config.bike.baseDensity;
        if (config.densityPercent !== undefined) {
            density *= config.densityPercent;
        }
        this.bikeBody.createFixture(Circle(Config.bike.radius), {density: density});

        if (config.velocityPercent !== undefined) {
            this.commonVelocity *= config.velocityPercent;
            this.accVelocity *= config.velocityPercent;
        }
    }

    destroy() {
    }

    onFrame() {
    }

    onPreSolve() {
    }

    onBeginContact() {
    }
}
