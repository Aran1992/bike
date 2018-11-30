export default class Utils {
    static removeItemFromArray(array, item) {
        let index = array.findIndex(item_ => item === item_);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }

    static angle2radius(angle) {
        return angle / 180 * Math.PI;
    }

    static createLinearGradientMask(width, height, colorStop) {
        let canvas = document.createElement("canvas");
        canvas.width = `${width}`;
        canvas.height = `${height}`;
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, height);
        colorStop.forEach(({offset, opacity}) => gradient.addColorStop(offset, `rgba(0, 0, 0, ${opacity})`));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        return canvas;
    }

    static calcPointDistance(p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    static getPathRect(path) {
        let maxX = path[0], minX = path[0], maxY = path[1], minY = path[1];
        for (let i = 0; i < path.length - 2; i += 2) {
            let x = path[i];
            let y = path[i + 1];
            if (x > maxX) {
                maxX = x;
            } else if (x < minX) {
                minX = x;
            }
            if (y > maxY) {
                maxY = y;
            } else if (y < minY) {
                minY = y;
            }
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        };
    }

    static calcRadius(sp, ep) {
        return Math.atan((ep.y - sp.y) / (ep.x - sp.x));
    }

    static getLast(arr) {
        return arr[arr.length - 1];
    }

    static keys(json) {
        let arr = [];
        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                arr.push(key);
            }
        }
        return arr;
    }

    static values(json) {
        let arr = [];
        for (let name in json) {
            if (json.hasOwnProperty(name)) {
                arr.push(json[name]);
            }
        }
        return arr;
    }
}
