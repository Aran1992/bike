import {Container, Graphics, Sprite, Text} from "../libs/pixi-wrapper";

export default class List {
    constructor({root, initItemFunc, updateItemFunc, count}) {
        this.itemTable = {};
        this.cacheItemList = [];
        this.root = root;
        this.createMask();
        // this.bindListener();
        this.item = root.children[0];
        this.item.visible = false;
        this.container = new Container();
        this.root.addChild(this.container);
        this.initItem = initItemFunc;
        this.updateItem = updateItemFunc;
        this.count = count;
        this.update();
    }

    calcStartAndEndIndex(offset, itemLength, viewLength) {
        let start = Math.floor(offset / itemLength);
        let end = Math.floor((offset + viewLength) / itemLength);
        if (start < 0) {
            start = 0;
        }
        if (end > this.count - 1) {
            end = this.count - 1;
        }
        return {start, end};
    }

    update() {
        let {start, end} = this.calcStartAndEndIndex(-this.container.y, this.item.myheight, this.root.myheight);
        for (let index in this.itemTable) {
            if (this.itemTable.hasOwnProperty(index)) {
                if (index < start || index > end) {
                    this.itemTable[index].visible = false;
                    this.cacheItemList.push(this.itemTable[index]);
                    delete this.itemTable[index];
                }
            }
        }
        for (let index = start; index <= end; index++) {
            if (this.itemTable[index] === undefined) {
                let item = this.getItem();
                this.itemTable[index] = item;
                item.position.set(0, index * this.item.myheight);
                item.visible = true;
                this.updateItem(item, index);
            }
        }
    }

    refresh() {
        for (let index in this.itemTable) {
            if (this.itemTable.hasOwnProperty(index)) {
                this.updateItem(this.itemTable[index], parseInt(index));
            }
        }
    }

    getItem() {
        let item = this.cacheItemList.pop();
        if (item === undefined) {
            item = this.clone(this.item);
            this.container.addChild(item);
            this.initItem(item);
        }
        return item;
    }

    onTouchStart(event) {
        this.touching = true;
        this.lastY = event.data.global.y;
    }

    onTouchMove(event) {
        if (this.touching) {
            let moveY = event.data.global.y - this.lastY;
            this.lastY = event.data.global.y;
            this.container.y += moveY;
            this.update();
        }
    }

    onTouchEnd() {
        this.touching = false;
    }

    clone(displayObject) {
        let displayObject_ = this.copy(displayObject);
        displayObject.children.forEach(child => {
            displayObject_.addChild(this.clone(child));
        });
        return displayObject_;
    }

    copy(displayObject) {
        if (displayObject instanceof Text) {
            return this.copyText(displayObject);
        } else if (displayObject instanceof Sprite) {
            return this.copySprite(displayObject);
        } else if (displayObject instanceof Container) {
            return this.copyContainer(displayObject);
        }
    }

    copyContainer(src) {
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
        return dst;
    }

    copySprite(src) {
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
        return dst;
    }

    copyText(src) {
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
        return dst;
    }

    createMask() {
        let mask = new Graphics();
        mask.beginFill();
        let {x, y} = this.root.getGlobalPosition();
        mask.drawRect(x, y, this.root.mywidth, this.root.myheight);
        mask.endFill();
        this.root.mask = mask;
    }

    bindListener() {
        this.root.buttonMode = true;
        this.root.interactive = true;
        this.root.on("pointerdown", this.onTouchStart.bind(this));
        this.root.on("pointermove", this.onTouchMove.bind(this));
        this.root.on("pointerup", this.onTouchEnd.bind(this));
        this.root.on("pointerupoutside", this.onTouchEnd.bind(this));
    }
}
