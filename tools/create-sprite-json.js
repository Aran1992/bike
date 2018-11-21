const fs = require("fs");

let config = {
    row: 5,
    column: 5,
    count: 24,
    xStart: 7,
    yStart: 13,
    width: 82,
    height: 94,
    xMargin: 18,
    yMargin: 14,
    image: "tyariso_run_anim_all.png",
    iWidth: 1024,
    iHeight: 1024
};

let json = {
    "frames": {},
    "meta": {
        "image": config.image
    }
};

let w = config.width;
let h = config.height;
for (let r = 0; r < config.row; r++) {
    for (let c = 0; c < config.column; c++) {
        let index = c + r * config.column;
        if (index < config.count) {
            let x = config.xStart + (w + config.xMargin) * c;
            let y = config.yStart + (h + config.yMargin) * r;
            json.frames[index] = {
                "frame": {
                    "x": x,
                    "y": y,
                    "w": w,
                    "h": h
                }
            };
        }
    }
}

fs.writeFileSync(`${config.image}.json`, JSON.stringify(json));