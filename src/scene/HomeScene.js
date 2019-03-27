import Config from "../config";
import Scene from "./Scene";
import Radio from "../ui/Radio";
import List from "../ui/List";
import {Container, Rectangle, Sprite, Texture} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";
import DataMgr from "../mgr/DataMgr";

const BACKGROUNDS = 0;
const FLOORS = 1;
const SPOILS = 2;
const PETS = 3;

function randomPos() {
    let x = Math.random() * Config.home.homeWidth;
    let y = Math.random() * Config.home.homeHeight;
    return {x, y};
}

export default class HomeScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnBtn, HomeScene.onClickReturnButton);
        this.onClick(this.ui.hideUIBtn, this.onClickHideUIButton.bind(this));
        this.onClick(this.ui.showUIBtn, this.onClickShowUIButton.bind(this));
        this.onClick(this.ui.startRemoveItemModeBtn, this.onClickStartRemoveItemModeButton.bind(this));
        this.onClick(this.ui.endRemoveItemModeBtn, this.onClickEndRemoveItemModeButton.bind(this));
        this.onClick(this.ui.lastBtn, () => this.onClickToggleButton(-1));
        this.onClick(this.ui.nextBtn, () => this.onClickToggleButton(1));
        this.onClick(this.ui.commonItemBtn, this.onClickCommonItemBtn.bind(this));

        this.ui.showUIBtn.visible = false;
        this.ui.endRemoveItemModeBtn.visible = false;

        this.uiList = [
            this.ui.returnBtn,
            this.ui.hideUIBtn,
            this.ui.startRemoveItemModeBtn,
            this.ui.endRemoveItemModeBtn,
            this.ui.radio,
            this.ui.lastBtn,
            this.ui.nextBtn,
            this.ui.itemList,
            this.ui.selectItemPanel,
        ];

        this.radio = new Radio({
            root: this.ui.radio,
            initItemFunc: HomeScene.initRadioButton,
            clickButtonFunc: this.onClickRadio.bind(this),
            infoList: ["Backgrounds", "Floors", "Spoils", "Pets"]
        });

        this.itemList = new List({
            root: this.ui.itemList,
            initItemFunc: this.initListItem.bind(this),
            updateItemFunc: this.updateListItem.bind(this),
            count: 0,
            isHorizontal: true,
            isStatic: true,
        });

        this.homeContainer = this.addChildAt(new Container(), 0);
        this.homeInnerContainer = this.homeContainer.addChild(new Container());
        this.bgSprite = this.homeInnerContainer.addChild(new Sprite());
        this.floorSprite = this.homeInnerContainer.addChild(new Sprite());
        this.floorSprite.position.set(0, Config.home.floorStartY);
        this.spoilsContainer = this.homeInnerContainer.addChild(new Container());
        this.petsContainer = this.homeInnerContainer.addChild(new Container());

        this.homeMinX = App.sceneWidth - Config.home.homeWidth;
        this.homeMaxX = 0;
        this.homeMinY = App.sceneHeight - Config.home.homeHeight;
        this.homeMaxY = 0;

        this.homeContainer.buttonMode = true;
        this.homeContainer.interactive = true;
        this.homeContainer.hitArea = new Rectangle(0, 0, Config.home.homeWidth, Config.home.homeHeight);
        this.homeContainer.on("pointerdown", this.onTouchHomeStart.bind(this));
        this.on("pointermove", this.onTouchMove.bind(this));
        this.on("pointerup", this.onTouchEnd.bind(this));
        this.on("pointerupoutside", this.onTouchEnd.bind(this));
    }

    onShow({bgID, floorID, spoilsList, petsList}) {
        if (bgID === undefined) {
            bgID = 1;
        }
        if (floorID === undefined) {
            floorID = 1;
        }
        if (spoilsList === undefined) {
            spoilsList = [
                [1, 100, 100],
                [2, 333, 333],
                [3, 456, 789],
            ];
        }
        if (petsList === undefined) {
            petsList = [1, 2,];
        }
        this.selectedBgID = bgID;
        this.bgIndex = Config.home.bg.findIndex(item => item.id === bgID);
        this.bgSprite.texture = Texture.from(Config.home.bg[this.bgIndex].path);

        this.selectedFloorID = floorID;
        this.floorIndex = Config.home.floor.findIndex(item => item.id === floorID);
        this.floorSprite.texture = Texture.from(Config.home.floor[this.floorIndex].path);

        this.spoilsContainer.removeChildren();
        spoilsList.forEach(([itemID, id, x, y]) => this.createSpoils(itemID, id, x, y));

        this.petsContainer.children.forEach(child => cancelAnimationFrame(child.animationID));
        this.petsContainer.removeChildren();
        petsList.forEach(id => this.createPet(id));

        this.radio.select(BACKGROUNDS);
    }

    createSpoils(itemID, id, x, y) {
        let config = Config.home.spoils.find(item => item.id === id);
        let sprite = Sprite.from(config.path);
        sprite.itemID = itemID;
        sprite.anchor.set(0.5, 0.5);
        this.spoilsContainer.addChild(sprite);
        sprite.position.set(x, y);
        let removeItemBtn = sprite.addChild(Sprite.from(Config.home.removeItemButtonImagePath));
        removeItemBtn.anchor.set(0.5, 0.5);
        removeItemBtn.visible = this.ui.endRemoveItemModeBtn.visible;
        this.onClick(removeItemBtn, this.onClickRemoveItemBtn.bind(this));
        sprite.removeItemBtn = removeItemBtn;
    }

    createPet(id, pos = randomPos()) {
        let outerContainer = this.petsContainer.addChild(new Container());
        let config = Config.home.pets.find(item => item.id === id);
        let innerSprite = outerContainer.addChild(Sprite.from(config.path));
        pos.y += innerSprite.texture.height / 2;
        outerContainer.position.set(pos.x, pos.y);
        innerSprite.anchor.set(0.5, 1);
        let removeItemBtn = outerContainer.addChild(Sprite.from(Config.home.removeItemButtonImagePath));
        removeItemBtn.visible = this.ui.endRemoveItemModeBtn.visible;
        removeItemBtn.anchor.set(0.5, 0.5);
        this.onClick(removeItemBtn, this.onClickRemoveItemBtn.bind(this));
        outerContainer.removeItemBtn = removeItemBtn;
        outerContainer.itemConfig = config;
        let targetPos = randomPos();
        let frame = 0;
        let interval = Config.home.petsJumpInterval * Config.fps;
        let handle = () => {
            let {x, y, final} = GameUtils.moveToTargetPos(
                outerContainer.position,
                targetPos,
                Config.home.petsVelocity
            );
            outerContainer.position.set(x, y);
            frame++;
            innerSprite.rotation = Utils.angle2radius((Math.floor(frame / interval) % 2 === 0 ? 1 : -1) * Config.home.petsJumpRotation);
            if (final) {
                targetPos = randomPos();
            }
            outerContainer.animationID = requestAnimationFrame(handle);
        };
        handle();
    }

    static onClickReturnButton() {
        App.hideScene("HomeScene");
        App.showScene("MainScene");
    }

    onClickHideUIButton() {
        this.uiList.forEach(item => item.visible = false);
        this.ui.showUIBtn.visible = true;
    }

    onClickShowUIButton() {
        this.uiList.forEach(item => item.visible = true);
        this.ui.showUIBtn.visible = false;
    }

    onClickToggleButton(offset) {
        switch (this.radio.selectedIndex) {
            case BACKGROUNDS: {
                let config = Config.home.bg[this.bgIndex + offset];
                if (config) {
                    this.bgIndex += offset;
                    this.bgSprite.texture = Texture.from(config.path);
                    this.ui.selectItemName.text = config.name;
                    this.ui.commonItemBtn.visible = config.id !== this.selectedBgID;
                    this.ui.selectedItemBtn.visible = config.id === this.selectedBgID;
                }
                break;
            }
            case FLOORS: {
                let config = Config.home.floor[this.floorIndex + offset];
                if (config) {
                    this.floorIndex += offset;
                    this.floorSprite.texture = Texture.from(config.path);
                    this.ui.selectItemName.text = config.name;
                    this.ui.commonItemBtn.visible = config.id !== this.selectedFloorID;
                    this.ui.selectedItemBtn.visible = config.id === this.selectedFloorID;
                }
                break;
            }
        }
    }

    onClickCommonItemBtn() {
        switch (this.radio.selectedIndex) {
            case BACKGROUNDS: {
                this.selectedBgID = Config.home.bg[this.bgIndex].id;
                let data = DataMgr.get(DataMgr.homeData);
                data.bgID = this.selectedBgID;
                DataMgr.set(DataMgr.homeData, data);
                this.ui.commonItemBtn.visible = false;
                this.ui.selectedItemBtn.visible = true;
                break;
            }
            case FLOORS: {
                this.selectedFloorID = Config.home.floor[this.floorIndex].id;
                let data = DataMgr.get(DataMgr.homeData);
                data.floorID = this.selectedFloorID;
                DataMgr.set(DataMgr.homeData, data);
                this.ui.commonItemBtn.visible = false;
                this.ui.selectedItemBtn.visible = true;
                break;
            }
        }
    }

    static initRadioButton(button, info) {
        button.ui.name.text = info;
    }

    onClickRadio(selectedIndex, lastIndex) {
        switch (lastIndex) {
            case BACKGROUNDS: {
                this.ui.selectItemPanel.visible = false;
                this.bgIndex = Config.home.bg.findIndex(item => item.id === this.selectedBgID);
                this.bgSprite.texture = Texture.from(Config.home.bg[this.bgIndex].path);
                break;
            }
            case FLOORS: {
                this.ui.selectItemPanel.visible = false;
                this.floorIndex = Config.home.floor.findIndex(item => item.id === this.selectedFloorID);
                this.floorSprite.texture = Texture.from(Config.home.floor[this.floorIndex].path);
                break;
            }
            case SPOILS:
            case PETS: {
                this.ui.itemList.visible = false;
                break;
            }
            default : {
                this.ui.itemList.visible = false;
                this.ui.selectItemPanel.visible = false;
            }
        }
        switch (selectedIndex) {
            case BACKGROUNDS: {
                this.ui.selectItemPanel.visible = true;
                let config = Config.home.bg.find(item => item.id === this.selectedBgID);
                this.ui.selectItemName.text = config && config.name;
                this.ui.commonItemBtn.visible = false;
                this.ui.selectedItemBtn.visible = true;
                break;
            }
            case FLOORS: {
                this.ui.selectItemPanel.visible = true;
                let config = Config.home.floor.find(item => item.id === this.selectedFloorID);
                this.ui.selectItemName.text = config && config.name;
                this.ui.commonItemBtn.visible = false;
                this.ui.selectedItemBtn.visible = true;
                break;
            }
            case SPOILS: {
                this.ui.itemList.visible = true;
                this.itemList.reset(Config.home.spoils.length);
                break;
            }
            case PETS: {
                this.ui.itemList.visible = true;
                this.itemList.reset(Config.home.pets.length);
                break;
            }
        }
    }

    initListItem(item) {
        let sprite = item.ui.icon.children[0];
        sprite.anchor.set(0.5, 0.5);
        sprite.position.set(item.ui.icon.mywidth / 2, item.ui.icon.myheight / 2);
        sprite.scale.set(0.25, 0.25);

        item.buttonMode = true;
        item.interactive = true;
        item.on("pointerdown", (...args) => this.onTouchItemStart(item, ...args));
    }

    updateListItem(item, index) {
        let type = this.radio.selectedIndex === SPOILS ? "spoils" : "pets";
        let config = Config.home[type][index];
        item.ui.icon.children[0].texture = Texture.from(config.path);
        item.itemConfig = config;
    }

    onTouchHomeStart(event) {
        this.touching = true;
        this.lastTouchPosition = {x: event.data.global.x, y: event.data.global.y};
    }

    onTouchItemStart(item, event) {
        let sprite = this.addChild(new Sprite());
        sprite.texture = Texture.from(item.itemConfig.path);
        sprite.anchor.set(0.5, 0.5);
        sprite.position.set(event.data.global.x, event.data.global.y);
        this.touchingSprite = sprite;
        this.touchingItemID = item.itemConfig.id;
    }

    onTouchMove(event) {
        if (this.touching) {
            let moveX = event.data.global.x - this.lastTouchPosition.x;
            let newX = this.homeInnerContainer.x + moveX;
            if (newX >= this.homeMinX && newX < this.homeMaxX) {
                this.homeInnerContainer.x = newX;
            }
            let moveY = event.data.global.y - this.lastTouchPosition.y;
            let newY = this.homeInnerContainer.y + moveY;
            if (newY >= this.homeMinY && newY < this.homeMaxY) {
                this.homeInnerContainer.y = newY;
            }
            this.lastTouchPosition.x = event.data.global.x;
            this.lastTouchPosition.y = event.data.global.y;
        } else if (this.touchingSprite) {
            this.touchingSprite.position.set(event.data.global.x, event.data.global.y);
        }
    }

    onTouchEnd(event) {
        if (this.touching) {
            this.touching = false;
        } else if (this.touchingSprite) {
            this.touchingSprite.destroy();
            this.touchingSprite = undefined;
            let pos = this.homeInnerContainer.getGlobalPosition();
            let x = event.data.global.x - pos.x;
            let y = event.data.global.y - pos.y;
            let data = DataMgr.get(DataMgr.homeData);
            if (this.radio.selectedIndex === SPOILS) {
                data.spoilsLength++;
                this.createSpoils(data.spoilsLength, this.touchingItemID, x, y);
                data.spoilsList.push([data.spoilsLength, this.touchingItemID, x, y]);
            } else {
                this.createPet(this.touchingItemID, {x, y});
                data.petsList.push(this.touchingItemID);
            }
            DataMgr.set(DataMgr.homeData, data);
        }
    }

    onClickStartRemoveItemModeButton() {
        this.spoilsContainer.children.forEach(child => child.removeItemBtn.visible = true);
        this.petsContainer.children.forEach(child => child.removeItemBtn.visible = true);
        this.ui.startRemoveItemModeBtn.visible = false;
        this.ui.endRemoveItemModeBtn.visible = true;
    }

    onClickEndRemoveItemModeButton() {
        this.spoilsContainer.children.forEach(child => child.removeItemBtn.visible = false);
        this.petsContainer.children.forEach(child => child.removeItemBtn.visible = false);
        this.ui.startRemoveItemModeBtn.visible = true;
        this.ui.endRemoveItemModeBtn.visible = false;
    }

    onClickRemoveItemBtn(button) {
        App.showScene("TipScene", {
            tip: "Are you sure you want to delete this item?",
            confirmCallback: () => {
                let item = button.parent;
                cancelAnimationFrame(item.animationID);
                let data = DataMgr.get(DataMgr.homeData);
                if (item.animationID !== undefined) {
                    Utils.removeItemFromArray(data.petsList, item.itemConfig.id);
                } else {
                    let index = data.spoilsList.findIndex(spoils => spoils[0] === item.itemID);
                    if (index !== -1) {
                        data.spoilsList.splice(index, 1);
                    }
                }
                DataMgr.set(DataMgr.homeData, data);
                item.destroy();
            },
            cancelCallback: () => {
            }
        });
    }
}

HomeScene.sceneFilePath = "myLaya/laya/pages/View/HomeScene.scene";
