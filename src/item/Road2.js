import {Container, Graphics, resources, TilingSprite} from "../libs/pixi-wrapper";
import Utils from "../mgr/Utils";
import {Edge, Vec2} from "../libs/planck-wrapper";
import Config from "../config";

export default class Road2 {
    constructor(parent, world, path, sideImagePath, topImagePath) {
        this.parent = parent;
        this.world = world;

        this.config = {
            path,
            sideImagePath,
            topImagePath,
            roadHeight: Config.designHeight
        };

        this.container = undefined;
        this.body = undefined;

        this.onCreate();
    }

    destroy() {
        this.container.destroy();
        this.world.destroyBody(this.body);
    }

    onCreate() {
        this.container = this.parent.addChild(new Container(), 0);

        let rect = Utils.getPathRect(this.config.path);

        let pathInRoad = this.config.path.map((p, i) => i % 2 === 0 ? p - rect.x : p - rect.y);

        this.createSide(rect.width);

        this.createTop(pathInRoad);

        this.createMask(pathInRoad);

        this.container.cacheAsBitmap = true;

        this.container.position.set(rect.x, rect.y);

        this.createBody();
    }

    createSide(width) {
        let texture = resources[this.config.sideImagePath].texture;
        this.container.addChild(new TilingSprite(texture, width, this.config.roadHeight));
    }

    createTop(path) {
        let texture = resources[this.config.topImagePath].texture;
        for (let i = 0; i < path.length - 2; i += 2) {
            let sp = {x: path[i], y: path[i + 1]};
            let ep = {x: path[i + 2], y: path[i + 3]};
            let width = Utils.calcPointDistance(sp, ep);
            let sprite = this.container.addChild(new TilingSprite(texture, width, texture.height));
            sprite.position.set(sp.x, sp.y);
            sprite.rotation = Utils.calcRadius(sp, ep);
        }
    }

    createMask(path) {
        path = path.concat([
            path[path.length - 2], this.config.roadHeight,
            0, this.config.roadHeight
        ]);
        let graphics = new Graphics();
        graphics.beginFill();
        graphics.drawPolygon(path);
        graphics.endFill();
        this.container.mask = graphics;
    }

    createBody() {
        this.body = this.world.createBody();
        this.body.setUserData({type: "Road2"});
        let path = this.config.path.map((value, i) => {
            if (i % 2 === 1) {
                value = Config.designHeight - value;
            }
            return value * Config.pixel2meter;
        });
        for (let i = 0; i < path.length - 2; i += 2) {
            this.body.createFixture(Edge(
                Vec2(path[i], path[i + 1]),
                Vec2(path[i + 2], path[i + 3])
            )).setUserData({resetJumpStatus: true});
        }
    }
}
