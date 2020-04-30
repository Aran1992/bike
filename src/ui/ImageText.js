import {Container, resources, Sprite, Text, TextStyle} from "../libs/pixi-wrapper";
import Config from "../config";

function getValue(value, defaultValue) {
    if (value === undefined) {
        return defaultValue;
    } else {
        return value;
    }
}

function createTextFromData(data, textContent) {
    let fill = getValue(data.color, "black");
    let fontSize = getValue(data.fontSize, 10);
    let fontFamily = getValue(data.font);
    let width = getValue(data.width);
    let textStyle = {
        fill: fill,
        fontFamily: "arial",
        fontSize: fontSize,
        wordWrap: false,
        leading: getValue(data.leading, 0),
        padding: 5,
    };
    if (getValue(data.strokeColor) !== undefined) {
        textStyle.stroke = getValue(data.strokeColor);
    }
    if (getValue(data.stroke) !== undefined) {
        textStyle.strokeThickness = getValue(data.stroke);
    }
    if (fontFamily) {
        textStyle.fontFamily = fontFamily;
    }
    if (width !== undefined) {
        textStyle.wordWrap = true;
        textStyle.wordWrapWidth = width;
    }
    return new Text(textContent, new TextStyle(textStyle));
}

export default class ImageText extends Sprite {
    constructor(data) {
        super();
        this.data = data;
        this.fontFamily = this.data.font;
        this.config = Config.imageText[this.fontFamily];
        this._text = "";
        this.mycontainer = this.addChild(new Container());
        this.mycontainer.mywidth = 0;
        this.mycontainer.myheight = this.config.charHeight;
        this.updateHAlign("left");
        this.updateVAlign("top");
    }

    set text(text) {
        if (text === undefined || text === null) {
            text = "";
        }
        text = text.toString();
        if (this._text === text) {
            return;
        }
        this._text = text;
        this.mycontainer.removeChildren();
        const lines = this._text.split("\n");
        this.mycontainer.mywidth = 0;
        this.mycontainer.myheight = this.config.charHeight * lines.length;
        lines.forEach((line, lineIndex) => {
            const chars = line.split("");
            const lineWidth = chars.length * this.config.charWidth;
            if (lineWidth > this.mycontainer.mywidth) {
                this.mycontainer.mywidth = lineWidth;
            }
            chars.forEach((char, charIndex) => {
                const path = this.config.charImgPathTable[char];
                let sprite, charHeight;
                if (path === undefined) {
                    sprite = createTextFromData(this.data, char);
                    charHeight = sprite.height;
                } else {
                    sprite = Sprite.from(path);
                    charHeight = sprite.texture.height;
                }
                sprite.x = this.config.charWidth * charIndex;
                sprite.y = lineIndex * this.config.charHeight + this.config.charHeight - charHeight;
                this.mycontainer.addChild(sprite);
            });
        });
        this.updateHAlign(this.hAlign);
        this.updateVAlign(this.vAlign);
    }

    setHAlign(hAlign, x) {
        this.x = x;
        this.updateHAlign(hAlign);
    }

    setVAlign(vAlign, y) {
        this.y = y;
        this.updateVAlign(vAlign);
    }

    updateHAlign(hAlign) {
        this.hAlign = hAlign || this.hAlign;
        switch (this.hAlign) {
            case "left": {
                this.mycontainer.x = 0;
                break;
            }
            case "right": {
                this.mycontainer.x = -this.mycontainer.mywidth;
                break;
            }
            case "center": {
                this.mycontainer.x = -this.mycontainer.mywidth / 2;
            }
        }
    }

    updateVAlign(vAlign) {
        this.vAlign = vAlign || this.vAlign;
        switch (this.vAlign) {
            case "top": {
                this.mycontainer.y = 0;
                break;
            }
            case "bottom": {
                this.mycontainer.y = -this.mycontainer.myheight;
                break;
            }
            case "center": {
                this.mycontainer.y = -this.mycontainer.myheight / 2;
            }
        }
    }
}
