const fs = require("fs");
const path = require("path");

function copy_(src, dist, exceptList) {
    if (exceptList && exceptList.some(file => file === src)) {
        return;
    }
    if (fs.lstatSync(src).isFile()) {
        fs.mkdirSync(path.dirname(dist), {recursive: true});
        fs.writeFileSync(dist, fs.readFileSync(src));
    } else {
        fs.mkdirSync(dist, {recursive: true});
        fs.readdirSync(src).forEach(file => copy_(path.join(src, file), path.join(dist, file), exceptList));
    }
}

function copy(src, dist, exceptList) {
    src = path.resolve(src);
    dist = path.resolve(dist);
    exceptList = exceptList && exceptList.map(file => path.resolve(file));
    copy_(src, dist, exceptList);
}

copy("images", "publish-wx/images");
copy("myLaya/laya/pages", "publish-wx/myLaya/laya/pages");
copy("src", "publish-wx/src", ["src/main.js"]);
copy("custom-config.js", "publish-wx/custom-config.js");
copy("run-option.js", "publish-wx/run-option.js");
copy("wx/game.js", "publish-wx/game.js");
copy("wx/game.json", "publish-wx/game.json");
copy("wx/project.config.json", "publish-wx/project.config.json");

console.log("published");
