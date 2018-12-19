import {Container, resources, Sprite, Text, TextStyle} from "../libs/pixi-wrapper";

function getValue(value, defaultValue) {
    if (value === undefined) {
        return defaultValue;
    } else {
        return value;
    }
}

function loadSceneRes(path, callback) {
    let resPathList = [];
    let sceneData = JSON.parse(resources[path].data);
    let handle = item => {
        if (item.props.skin) {
            resPathList.push(`myLaya/laya/assets/${item.props.skin}`);
        }
        item.child.forEach(item => handle(item));
    };
    handle(sceneData);
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

    let texture = resources[`myLaya/laya/assets/${data.skin}`].texture;

    let baseInfo = getImageBaseInfo(child, parent,
        {width: texture.width, height: texture.height});

    let sprite = new Sprite(texture);

    sprite.width = baseInfo.width;
    sprite.height = baseInfo.height;
    sprite.mywidth = baseInfo.width;
    sprite.myheight = baseInfo.height;

    sprite.x = baseInfo.x;
    sprite.y = baseInfo.y;

    sprite.anchor.set(baseInfo.anchorX, baseInfo.anchorY);

    sprite.scale.set(baseInfo.scaleX, baseInfo.scaleY);

    sprite.rotation = baseInfo.rotation;

    sprite.alpha = baseInfo.alpha;

    sprite.visible = baseInfo.visible;

    return sprite;
}

function createLabel(child, parent) {
    let data = child.props;

    let textContent = getValue(data.text, "");
    let fill = getValue(data.color, "black");
    let fontSize = getValue(data.fontSize, 10);

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

    let text = new Text(textContent, new TextStyle({
        fill: fill,
        fontSize: fontSize,
    }));

    text.anchor.set(anchorX, anchorY);

    text.x = x;
    text.y = y;

    text.scale.set(scaleX, scaleY);

    text.rotation = rotation;

    text.alpha = alpha;

    text.visible = visible;

    return text;
}

function getImageBaseInfo(child, parent, defaultInfo) {
    let data = child.props;

    let x = getValue(data.x, 0);
    let y = getValue(data.y, 0);

    let width = getValue(data.width, defaultInfo.width);
    let height = getValue(data.height, defaultInfo.height);

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

    return {
        x, y,
        width, height,
        anchorX: 0, anchorY: 0,
        scaleX, scaleY,
        rotation, alpha, visible
    };
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

