const fs = require("fs");
const path = require("path");
const root = "myLaya";

require("./pack").pack();

fs.watch(root, {recursive: true}, (event, filename) => {
    if (event === "change" && filename.endsWith(".scene") || filename.endsWith(".prefab")) {
        let filepath = path.join(root, filename);
        fs.readFile(filepath, "utf8", (err, data) => {
            if (err) {
                return console.log(`file:${filepath} change read err`, err);
            }
            data = data
                .replace(/\.prefab/g, ".prefab.json")
                .replace(/\.scene/g, ".scene.json");
            fs.writeFile(filepath + ".json", JSON.stringify(JSON.parse(data)));
        });
    }
});
