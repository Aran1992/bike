const fs = require("fs");


let config = {
    image: "flag_set_3ds.png",
    txt: "C:\\Users\\25722\\Downloads\\下载\\Image\\flagSet_3ds.txt",
};

let data = fs.readFileSync(config.txt, "utf8");
let lineList = data.split("\n");
lineList = lineList.splice(1, lineList.length - 3);


let json = {
    "frames": {},
    "meta": {
        "image": config.image
    }
};

lineList.forEach(line => {
    let parts = line.split("//");
    let name = parts[1].trim().split(" ")[1];
    let [x, y, w, h] = parts[0].trim().split(", ").map(numStr => parseInt(numStr.trim()));
    json.frames[name] = {
        "frame": {
            "x": x,
            "y": y,
            "w": w,
            "h": h
        }
    };
});

fs.writeFileSync(`${config.image}.json`, JSON.stringify(json), "utf8");