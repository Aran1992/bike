const fs = require("fs");
const path = require("path");
let handle = (dirPath) => {
    let files = fs.readdirSync(dirPath);
    files.forEach(file => {
        let filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            handle(filePath);
        } else {
            let data = JSON.parse(fs.readFileSync(filePath, "utf8"));
            data.child = data.child.map(item => {
                if (item.label.indexOf("GoldCoin") !== -1 && item.type === "Sprite") {
                    let name = "InstantItem//立即生效物品//ID:0";
                    return {
                        "x": 15,
                        "type": "Image",
                        "searchKey": `Image,${name}`,
                        "props": {
                            "y": item.props.y + 20,
                            "x": item.props.x + 20,
                            "skin": "images/medal.png",
                            "scaleY": 0.25,
                            "scaleX": 0.25,
                            "name": name,
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        },
                        "nodeParent": 1,
                        "label": name,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": item.compId,
                        "child": []
                    };
                } else if (item.label.indexOf("AccGem") !== -1 && item.type === "Sprite") {
                    let name = "InstantItem//立即生效物品//ID:101";
                    return {
                        "x": 15,
                        "type": "Image",
                        "searchKey": `Image,${name}`,
                        "props": {
                            "y": item.props.y + 20,
                            "x": item.props.x + 20,
                            "skin": "images/crystal_jet_00.png",
                            "scaleY": 0.5,
                            "scaleX": 0.5,
                            "name": name,
                            "anchorY": 0.5,
                            "anchorX": 0.5
                        },
                        "nodeParent": 1,
                        "label": name,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": item.compId,
                        "child": []
                    };
                } else {
                    return item;
                }
            });
            fs.writeFileSync(filePath, JSON.stringify(data), "utf8");
        }
    });
};
handle("../myLaya/laya/pages");
