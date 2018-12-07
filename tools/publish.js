const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const config = require("../webpack.config");

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

webpack(config, () => {
    deleteall("./publish");
    [
        "images",
        "sound",
        "myLaya/laya/pages",
        "index.html",
        "dist/bundle.js",
        "run-option.js",
    ].forEach(file => copy(file, `publish/${file}`));
});