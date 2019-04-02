const fs = require("fs");
const path = require("path");
const root = "myLaya";

const handle = (root) => {
    const files = fs.readdirSync(root);
    files.forEach(file => {
        let filepath = path.join(root, file);
        if (fs.lstatSync(filepath).isFile()) {
            if (filepath.endsWith(".scene") || filepath.endsWith(".prefab")) {
                let data = fs.readFileSync(filepath, "utf8")
                    .replace(/\.prefab/g, ".prefab.json")
                    .replace(/\.scene/g, ".scene.json");
                fs.writeFileSync(filepath + ".json", JSON.stringify(JSON.parse(data)));
            }
        } else {
            handle(filepath);
        }
    });
};

exports.pack = () => {
    handle(root);
    console.log("pack success");
};
