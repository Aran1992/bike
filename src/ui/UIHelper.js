import {Container, NineSlicePlane, Sprite, Text} from "../libs/pixi-wrapper";

export default class UIHelper {
    static clone(displayObject) {
        let displayObject_ = UIHelper.copy(displayObject);
        displayObject.children.forEach(child => {
            displayObject_.addChild(UIHelper.clone(child));
        });
        return displayObject_;
    }

    static copy(displayObject) {
        if (displayObject instanceof Text) {
            return UIHelper.copyText(displayObject);
        } else if (displayObject instanceof Sprite) {
            return UIHelper.copySprite(displayObject);
        } else if (displayObject instanceof NineSlicePlane) {
            return UIHelper.copyNineSlicePlane(displayObject);
        } else if (displayObject instanceof Container) {
            return UIHelper.copyContainer(displayObject);
        }
    }

    static copyContainer(src) {
        let dst = new Container();
        dst.alpha = src.alpha;
        dst.buttonMode = src.buttonMode;
        dst.hitArea = src.hitArea;
        dst.interactive = src.interactive;
        dst.rotation = src.rotation;
        dst.scale.set(src.scale.x, src.scale.y);
        dst.visible = src.visible;
        dst.x = src.x;
        dst.y = src.y;
        dst.mywidth = src.mywidth;
        dst.myheight = src.myheight;
        return dst;
    }

    static copySprite(src) {
        let dst = new Sprite();
        dst.alpha = src.alpha;
        dst.anchor.set(src.anchor.x, src.anchor.y);
        dst.buttonMode = src.buttonMode;
        dst.interactive = src.interactive;
        dst.rotation = src.rotation;
        dst.scale.set(src.scale.x, src.scale.y);
        dst.texture = src.texture;
        dst.visible = src.visible;
        dst.x = src.x;
        dst.y = src.y;
        dst.mywidth = src.mywidth;
        dst.myheight = src.myheight;
        return dst;
    }

    static copyText(src) {
        let dst = new Text(src.text, src.style);
        dst.alpha = src.alpha;
        dst.anchor.set(src.anchor.x, src.anchor.y);
        dst.buttonMode = src.buttonMode;
        dst.interactive = src.interactive;
        dst.rotation = src.rotation;
        dst.scale.set(src.scale.x, src.scale.y);
        dst.visible = src.visible;
        dst.x = src.x;
        dst.y = src.y;
        dst.mywidth = src.mywidth;
        dst.myheight = src.myheight;
        return dst;
    }

    static copyNineSlicePlane(src) {
        let dst = new NineSlicePlane(src.texture, src.leftWidth, src.topHeight, src.rightWidth, src.bottomHeight);
        dst.alpha = src.alpha;
        dst.buttonMode = src.buttonMode;
        dst.interactive = src.interactive;
        dst.rotation = src.rotation;
        dst.visible = src.visible;
        dst.x = src.x;
        dst.y = src.y;
        dst.width = src.width;
        dst.height = src.height;
        dst.mywidth = src.mywidth;
        dst.myheight = src.myheight;
        return dst;
    }
}
