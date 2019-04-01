import {Container, NineSlicePlane, resources, Sprite, Text, TextStyle} from "../libs/pixi-wrapper";

function getValue(value, defaultValue) {
    if (value === undefined) {
        return defaultValue;
    } else {
        return value;
    }
}

function loadSceneRes(pathList, callback) {
    let resPathList = [];
    if (typeof (pathList) === "string") {
        pathList = [pathList];
    }
    let handle = item => {
        if (item.props.skin) {
            resPathList.push(`myLaya/laya/assets/${item.props.skin}`);
        }
        item.child.forEach(item => handle(item));
    };
    pathList.forEach(path => {
        let sceneData = JSON.parse(resources[path].data);
        handle(sceneData);
    });
    App.loadResources(resPathList, callback);
}

function createScene(path, sceneContainer) {
    let sceneData = JSON.parse(resources[path].data);
    sceneContainer.mywidth = App.sceneWidth;
    sceneContainer.myheight = App.sceneHeight;
    sceneContainer.interactive = true;
    sceneContainer.ui = {};
    sceneData.child.forEach(child => sceneContainer.addChild(createSceneChild(child, sceneContainer, sceneContainer.ui)));
}

function createSceneChild(child, parent, root) {
    let data = child.props;
    let item;
    switch (child.type) {
        case "Panel": {
            item = createPanel(child, parent);
            break;
        }
        case "Image": {
            item = createImage(child, parent);
            break;
        }
        case "Label": {
            item = createLabel(child, parent);
            break;
        }
        default: {
            throw `不支持的场景元素类型：${child.type}`;
        }
    }
    if (data.var !== undefined) {
        root[data.var] = item;
    }
    child.child.forEach(child => item.addChild(createSceneChild(child, item, root)));
    if (data.name) {
        item.uiname = data.name;
    }
    return item;
}

function createPanel(child, parent) {
    let baseInfo = getPanelBaseInfo(child, parent, {width: 100, height: 100});

    let panel = new Container();

    panel.mywidth = baseInfo.width;
    panel.myheight = baseInfo.height;

    panel.x = baseInfo.x;
    panel.y = baseInfo.y;

    panel.scale.set(baseInfo.scaleX, baseInfo.scaleY);

    panel.rotation = baseInfo.rotation;

    panel.alpha = baseInfo.alpha;

    panel.visible = baseInfo.visible;

    // let mask = new Graphics();
    // mask.beginFill();
    // mask.drawRect(baseInfo.x, baseInfo.y, baseInfo.width, baseInfo.height);
    // mask.endFill();
    // panel.mask = mask;

    return panel;
}

function createImage(child, parent) {
    let data = child.props;
    let sprite;
    if (data.sizeGrid) {
        sprite = createScale9Image(child, parent);
    } else {
        sprite = createCommonImage(child, parent);
    }
    sprite.rotation = getValue(data.rotation, 0) / 180 * Math.PI;
    sprite.alpha = getValue(data.alpha, 1);
    sprite.visible = getValue(data.visible, true);
    return sprite;
}

function createCommonImage(child, parent) {
    let data = child.props;
    let path = `myLaya/laya/assets/${data.skin}`;
    let texture = resources[path].texture;
    let width = getValue(data.width, texture.width);
    let height = getValue(data.height, texture.height);
    let scaleX = getValue(data.scaleX, 1);
    let scaleY = getValue(data.scaleY, 1);
    let x = getValue(data.x, 0);
    let y = getValue(data.y, 0);

    if (data.left !== undefined && data.right !== undefined) {
        x = data.left;
        width = parent.mywidth - data.left - data.right;
    } else if (data.left !== undefined) {
        x = data.left;
    } else if (data.right !== undefined) {
        x = parent.mywidth - data.right - width * scaleX;
    } else if (data.centerX !== undefined) {
        x = parent.mywidth / 2 + data.centerX - width * scaleX / 2;
    }

    if (data.top !== undefined && data.bottom !== undefined) {
        y = data.top;
        height = parent.myheight - data.top - data.bottom;
    } else if (data.top !== undefined) {
        y = data.top;
    } else if (data.bottom !== undefined) {
        y = parent.myheight - data.bottom - height * scaleY;
    } else if (data.centerY !== undefined) {
        y = parent.myheight / 2 + data.centerY - height * scaleY / 2;
    }

    let container = new Container();

    let sprite = new Sprite();
    sprite.texture = texture;
    sprite.width = width;
    sprite.height = height;

    container.addChild(sprite);

    container.mywidth = width;
    container.myheight = height;
    container.scale.set(scaleX, scaleY);
    container.position.set(x, y);

    return container;
}

function createScale9Image(child, parent) {
    let data = child.props;
    let path = `myLaya/laya/assets/${data.skin}`;
    let texture = resources[path].texture;
    let [top, right, bottom, left] = data.sizeGrid.split(",").map(str => parseInt(str));
    let sprite = new NineSlicePlane(texture, left, top, right, bottom);
    let width = getValue(data.width, texture.width);
    let height = getValue(data.height, texture.height);
    let x = getValue(data.x, 0);
    let y = getValue(data.y, 0);

    if (data.left !== undefined && data.right !== undefined) {
        x = data.left;
        width = parent.mywidth - data.left - data.right;
    } else if (data.left !== undefined) {
        x = data.left;
    } else if (data.right !== undefined) {
        x = parent.mywidth - data.right - width;
    } else if (data.centerX !== undefined) {
        x = parent.mywidth / 2 + data.centerX - width / 2;
    }

    if (data.top !== undefined && data.bottom !== undefined) {
        y = data.top;
        height = parent.myheight - data.top - data.bottom;
    } else if (data.top !== undefined) {
        y = data.top;
    } else if (data.bottom !== undefined) {
        y = parent.myheight - data.bottom - height;
    } else if (data.centerY !== undefined) {
        y = parent.myheight / 2 + data.centerY - height / 2;
    }

    sprite.width = width;
    sprite.height = height;
    sprite.mywidth = width;
    sprite.myheight = height;
    sprite.x = x;
    sprite.y = y;
    return sprite;
}

function createLabel(child, parent) {
    let data = child.props;

    let textContent = getValue(data.text, "");
    let fill = getValue(data.color, "black");
    let fontSize = getValue(data.fontSize, 10);
    let fontFamily = getValue(data.font);
    let width = getValue(data.width);

    let x = getValue(data.x, 0);
    let y = getValue(data.y, 0);

    let anchorX = getValue(data.anchorX, 0);
    let anchorY = getValue(data.anchorY, 0);

    let scaleX = getValue(data.scaleX, 1);
    let scaleY = getValue(data.scaleY, 1);

    let rotation = getValue(data.rotation, 0) / 180 * Math.PI;

    let alpha = getValue(data.alpha, 1);

    let visible = getValue(data.visible, 1);

    if (data.left !== undefined && data.right !== undefined) {
        anchorX = 0;
        x = data.left;
    } else if (data.left !== undefined) {
        anchorX = 0;
        x = data.left;
    } else if (data.right !== undefined) {
        anchorX = 1;
        x = parent.mywidth - data.right;
    } else if (data.centerX !== undefined) {
        anchorX = 0.5;
        x = parent.mywidth / 2 + data.centerX;
    }

    if (data.top !== undefined && data.bottom !== undefined) {
        anchorY = 0;
        y = data.top;
    } else if (data.top !== undefined) {
        anchorY = 0;
        y = data.top;
    } else if (data.bottom !== undefined) {
        anchorY = 1;
        y = parent.myheight - data.bottom;
    } else if (data.centerY !== undefined) {
        anchorY = 0.5;
        y = parent.myheight / 2 + data.centerY;
    }

    let textStyle = {
        fill: fill,
        fontSize: fontSize,
        wordWrap: false,
        wordWrapWidth: 0
    };
    if (fontFamily) {
        textStyle.fontFamily = fontFamily;
    }
    if (data.wordWrap === true) {
        textStyle.wordWrap = true;
        textStyle.wordWrapWidth = width;
    }
    let text = new Text(textContent, new TextStyle(textStyle));

    text.anchor.set(anchorX, anchorY);

    text.x = x;
    text.y = y;

    text.scale.set(scaleX, scaleY);

    text.rotation = rotation;

    text.alpha = alpha;

    text.visible = visible;

    return text;
}

function getPanelBaseInfo(child, parent, defaultInfo) {
    let data = child.props;

    let x = getValue(data.x, 0);
    let y = getValue(data.y, 0);

    let width = getValue(data.width, defaultInfo.width);
    let height = getValue(data.height, defaultInfo.height);

    let anchorX = getValue(data.anchorX, 0);
    let anchorY = getValue(data.anchorY, 0);

    let scaleX = getValue(data.scaleX, 1);
    let scaleY = getValue(data.scaleY, 1);

    let rotation = getValue(data.rotation, 0) / 180 * Math.PI;

    let alpha = getValue(data.alpha, 1);

    let visible = getValue(data.visible, true);

    if (data.left !== undefined && data.right !== undefined) {
        x = data.left;
        width = parent.mywidth - data.left - data.right;
    } else if (data.left !== undefined) {
        x = data.left;
    } else if (data.right !== undefined) {
        x = parent.mywidth - data.right - width;
    } else if (data.centerX !== undefined) {
        x = parent.mywidth / 2 - width / 2 + data.centerX;
    }

    if (data.top !== undefined && data.bottom !== undefined) {
        y = data.top;
        height = parent.myheight - data.top - data.bottom;
    } else if (data.top !== undefined) {
        y = data.top;
    } else if (data.bottom !== undefined) {
        y = parent.myheight - data.bottom - height;
    } else if (data.centerY !== undefined) {
        y = parent.myheight / 2 - height / 2 + data.centerY;
    }

    return {
        x, y,
        width, height,
        anchorX, anchorY,
        scaleX, scaleY,
        rotation, alpha, visible
    };
}

export default {createScene, loadSceneRes};

