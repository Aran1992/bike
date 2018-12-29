import {Container, Graphics, NineSlicePlane, Sprite, Text} from "../libs/pixi-wrapper";

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
        this.countPerLine = Math.ceil(this.root.mywidth / this.item.mywidth);
        this.update();
    }

    calcStartAndEnd(offset, itemLength, viewLength) {
        let startLine = Math.floor(offset / itemLength);
        let endLine = Math.floor((offset + viewLength) / itemLength);
        if (startLine < 0) {
            startLine = 0;
        }
        let maxLine = Math.ceil(this.count / this.countPerLine);
        if (endLine > maxLine - 1) {
            endLine = maxLine - 1;
        }
        let start = startLine * this.countPerLine;
        let end = (endLine + 1) * this.countPerLine - 1;
        if (end >= this.count) {
            end = this.count - 1;
        }
        return {startLine, endLine, start, end};
    }

    update() {
        let {start, end} = this.calcStartAndEnd(-this.container.y, this.item.myheight, this.root.myheight);
        console.log(start, end);
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
                let column = index % this.countPerLine, row = Math.floor(index / this.countPerLine);
                item.position.set(column * this.item.mywidth, row * this.item.myheight);
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
        } else if (displayObject instanceof NineSlicePlane) {
            return this.copyNineSlicePlane(displayObject);
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
        dst.mywidth = src.mywidth;
        dst.myheight = src.myheight;
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
        dst.mywidth = src.mywidth;
        dst.myheight = src.myheight;
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
        dst.mywidth = src.mywidth;
        dst.myheight = src.myheight;
        return dst;
    }

    copyNineSlicePlane(src) {
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
