const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const config = require("../webpack.config");

const exceptFileEnds = [".scene", ".prefab"];

function copy_(src, dist, exceptList) {
    if (exceptList && exceptList.some(file => file === src)) {
        return;
    }
    if (fs.lstatSync(src).isFile()) {
        if (!exceptFileEnds.some(ends => src.endsWith(ends))) {
            fs.mkdirSync(path.dirname(dist), {recursive: true});
            fs.writeFileSync(dist, fs.readFileSync(src));
        }
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

function deleteall(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(file => {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteall(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

require("../pack").pack();
config.mode = "production";
webpack(config, () => {
    deleteall("./publish");
    [
        "images",
        "sound",
        "myLaya/laya/pages",
        "myLaya/laya/assets/animations",
        "myLaya/laya/assets/images",
        "myLaya/laya/assets/prefabs",
        "index.html",
        "dist/bundle.js",
    ].forEach(file => copy(file, `publish/${file}`));
});
