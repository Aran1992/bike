import UIHelper from "./UIHelper";

export default class Radio {
    constructor({root, initItemFunc, clickButtonFunc, infoList, buttonDistance}) {
        this.root = root;
        this.clickButtonFunc = clickButtonFunc;
        this.button = this.root.children[0];
        this.buttonList = infoList.map((info, index) => {
            let button = UIHelper.clone(this.button);
            initItemFunc(button, info, index);
            this.root.addChild(button);
            button.x = index * buttonDistance;
            UIHelper.onClick(button, this.onClickButton.bind(this));
            return button;
        });
        this.button.visible = false;
        this.onClickButton(this.buttonList[0]);
    }

    onClickButton(button) {
        let oldIndex = this.selectedIndex;
        this.buttonList.forEach((button_, index) => {
            if (button === button_) {
                this.selectedIndex = index;
                button_.children[0].visible = false;
                button_.children[1].visible = true;
            } else {
                button_.children[0].visible = true;
                button_.children[1].visible = false;
            }
        });
        this.clickButtonFunc(this.selectedIndex, oldIndex);
    }
}
