import Config from "../config";
import {Container, Graphics, resources, Sprite, Texture, TilingSprite} from "../libs/pixi-wrapper";
import {Edge, Vec2} from "../libs/planck-wrapper";
import Utils from "../mgr/Utils";
import {App} from "../main";

export default class Road {
    constructor(world, path, sideTexturePath, topTexturePath) {
        this.lowestTopY = path.reduce((max, y, i) => {
            if (i % 2 === 1) {
                if (max === undefined) {
                    return y;
                } else {
                    return y > max ? y : max;
                }
            }
            return max;
        }, path[1]);

        let maxY = path[1];
        for (let i = 1; i < path.length; i += 2) {
            if (path[i] > maxY) {
                maxY = path[i];
            }
        }
        let bottomY = maxY + App.sceneHeight / 3 * 2;
        path = [path[0], bottomY]
            .concat(path)
            .concat([path[path.length - 2], bottomY]);

        this.world = world;
        this.sprite = new Container();
        this.sprite.part = this;
        let rect = Utils.getPathRect(path);
        this.rect = rect;
        let pathInRoad = path.map((p, i) => i % 2 === 0 ? p - rect.x : p - rect.y);
        this.createSide(sideTexturePath, rect.width, rect.height);
        this.createTop(topTexturePath, pathInRoad);
        this.createEdgeMask(pathInRoad);
        this.createClipMask(pathInRoad);
        this.sprite.cacheAsBitmap = true;
        this.sprite.position.set(rect.x, rect.y);
        this.createPhysicsBody(world, path);
    }

    createSide(texturePath, width, height) {
        let texture = resources[texturePath].texture;
        let sprite = new TilingSprite(texture, width, height);
        this.sprite.addChild(sprite);
    }

    createTop(texturePath, path) {
        let texture = resources[texturePath].texture;
        for (let i = 2; i < path.length - 4; i += 2) {
            let sp = {x: path[i], y: path[i + 1]};
            let ep = {x: path[i + 2], y: path[i + 3]};
            let width = Utils.calcPointDistance(sp, ep);
            let sprite = new TilingSprite(texture, width, texture.height);
            this.sprite.addChild(sprite);
            sprite.position.set(sp.x, sp.y);
            sprite.rotation = Utils.calcRadius(sp, ep);
        }
    }

    createEdgeMask(path) {
        let edgeList = [
            {
                sp: {x: path[0], y: path[1]},
                ep: {x: path[2], y: path[3]},
            },
            {
                sp: {x: path[path.length - 4], y: path[path.length - 3]},
                ep: {x: path[path.length - 2], y: path[path.length - 1]},
            },
        ];
        edgeList.forEach(({sp, ep}) => {
            let edgeWidth = Math.abs(sp.y - ep.y);
            let canvas = Utils.createLinearGradientMask(edgeWidth, Config.edgeHeight, Config.edgeColorStop);
            let texture = Texture.fromCanvas(canvas);
            let sprite = new Sprite(texture);
            this.sprite.addChild(sprite);
            sprite.position.set(sp.x, sp.y);
            sprite.rotation = Utils.calcRadius(sp, ep);
        });
    }

    createClipMask(path) {
        let graphics = new Graphics();
        graphics.beginFill();
        graphics.drawPolygon(path);
        graphics.endFill();
        this.sprite.mask = graphics;
    }

    createPhysicsBody(world, path) {
        let pathInPhysics = path.map((value, i) => {
            if (i % 2 === 1) {
                value = Config.designHeight - value;
            }
            return value * Config.pixel2meter;
        });

        let body = world.createBody();
        this.body = body;
        body.setUserData({type: "Road"});
        for (let i = 0; i < pathInPhysics.length - 4; i += 2) {
            let sp = {
                    x: pathInPhysics[i],
                    y: pathInPhysics[i + 1]
                },
                ep = {
                    x: pathInPhysics[i + 2],
                    y: pathInPhysics[i + 3]
                };
            let fixture = body.createFixture(Edge(Vec2(sp.x, sp.y), Vec2(ep.x, ep.y)), {density: 0, friction: 1,});
            if (Road.isFatalEdge(sp, ep)) {
                fixture.setUserData({isFatal: true});
            }
        }
    }

    static isFatalEdge(sp, ep) {
        let x, y;
        if (sp.y > ep.y) {
            y = sp.y - ep.y;
            x = sp.x - ep.x;
        } else {
            y = ep.y - sp.y;
            x = ep.x - sp.x;
        }
        let angle = Math.atan(y / x);
        return Config.fatalEdgeAngleRange[0] <= angle && angle <= Config.fatalEdgeAngleRange[1];
    }

    getRightBorderX() {
        return this.rect.x + this.rect.width;
    }

    getLeftBorderX() {
        return this.rect.x;
    }

    getBottomBorderX() {
        return this.rect.y + this.rect.height;
    }

    getTopBorderY() {
        return this.rect.y;
    }

    getLowestTopY() {
        return this.lowestTopY;
    }

    destroy() {
        this.world.destroyBody(this.body);
        this.sprite.parent.removeChild(this.sprite);
    }
}