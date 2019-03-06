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
                if (item.label.indexOf("PortableItem") !== -1) {
                    let id = item.label.split("//").find(str => str.indexOf("ID") !== -1).split(":")[1] + "0";
                    let label = `EatableItem//可携带物品//ID:${id}`;
                    item.searchKey = `Image,${label}`;
                    item.label = label;
                    item.props.name = label;
                    return item;
                } else if (item.label.indexOf("InstantItem") !== -1) {
                    let id = item.label.split("//").find(str => str.indexOf("ID") !== -1).split(":")[1];
                    let label = `EatableItem//立即生效物品//ID:${id}`;
                    item.searchKey = `Image,${label}`;
                    item.label = label;
                    item.props.name = label;
                    return item;
                } else {
                    return item;
                }
            });
            fs.writeFileSync(filePath, JSON.stringify(data), "utf8");
        }
    });
};
handle("../myLaya/laya/pages");
