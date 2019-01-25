import {Container, Graphics, Rectangle} from "../libs/pixi-wrapper";
import UIHelper from "./UIHelper";
import Config from "../config";

export default class List {
    constructor({root, initItemFunc, updateItemFunc, count, isStatic}) {
        this.itemTable = {};
        this.cacheItemList = [];
        this.root = root;
        this.createMask();
        if (!isStatic) {
            this.bindListener();
        }
        this.item = root.children[0];
        this.item.visible = false;
        this.container = new Container();
        this.root.addChild(this.container);
        this.initItem = initItemFunc;
        this.updateItem = updateItemFunc;
        this.count = count;
        this.countPerLine = Math.ceil(this.root.mywidth / this.item.mywidth);
        this.maxY = 0;
        this.minY = this.root.myheight - Math.ceil(this.count / this.countPerLine) * this.item.myheight;
        if (this.minY > this.maxY) {
            this.minY = 0;
        }
        this.root.hitArea = new Rectangle(0, 0, this.root.mywidth, this.root.myheight);
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
            item = UIHelper.clone(this.item);
            this.container.addChild(item);
            if (this.initItem) {
                this.initItem(item);
            }
        }
        return item;
    }

    onTouchStart(event) {
        this.touching = true;
        this.lastY = event.data.global.y;
        cancelAnimationFrame(this.recoverAnimationID);
    }

    onTouchMove(event) {
        if (this.touching) {
            let moveY = event.data.global.y - this.lastY;
            this.lastY = event.data.global.y;
            let newY = this.container.y + moveY;
            if (newY > this.maxY || newY < this.minY) {
                newY = this.container.y + moveY / Config.listResistance;
            }
            this.container.y = newY;
            this.update();
        }
    }

    onTouchEnd() {
        this.touching = false;
        if (this.container.y > this.maxY || this.container.y < this.minY) {
            let totalTime = 250;
            let lastTime = (new Date()).getTime();
            let totalMove = (this.container.y > this.maxY ? this.maxY : this.minY) - this.container.y;
            let handler = () => {
                let curTime = (new Date()).getTime();
                if (this.container.y > this.minY) {
                    this.container.y += (curTime - lastTime) / totalTime * totalMove;
                    if (this.container.y <= this.maxY) {
                        this.container.y = this.maxY;
                    } else {
                        this.recoverAnimationID = requestAnimationFrame(handler);
                    }
                } else if (this.container.y < this.maxY) {
                    this.container.y += (curTime - lastTime) / totalTime * totalMove;
                    if (this.container.y >= this.minY) {
                        this.container.y = this.minY;
                    } else {
                        this.recoverAnimationID = requestAnimationFrame(handler);
                    }
                }
                this.update();
                lastTime = curTime;
            };
            handler();
        }
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
