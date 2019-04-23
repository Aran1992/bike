const fs = require("fs");
const path = require("path");
const i18n = require("./i18n").i18n;
const pack = require("./pack").pack;
const language = require("../publish-test.config").language;
const root = "..";
const sceneFileRoot = "../myLaya";

pack(sceneFileRoot);

i18n(language);

fs.watch(root, {recursive: true}, (event, filename) => {
    console.log(event, filename);
    if (filename && event === "change") {
        if (filename.endsWith(".scene") || filename.endsWith(".prefab")) {
            let filepath = path.join(root, filename);
            fs.readFile(filepath, "utf8", (err, data) => {
                if (err) {
                    return console.log(`file:${filepath} change read err`, err);
                }
                data = data
                    .replace(/\.prefab/g, ".prefab.json")
                    .replace(/\.scene/g, ".scene.json");
                fs.writeFileSync(filepath + ".json", JSON.stringify(JSON.parse(data)));
            });
        } else if (filename.endsWith("i18n.xlsx")) {
            i18n(language);
        }
    }
});
