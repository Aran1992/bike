class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function flattenPoints(points) {
    let arr = [];
    points.forEach(point => arr.push(point.x, point.y));
    return arr;
}

function antiFlattenPoints(coordinates) {
    let arr = [];
    let len = coordinates.length / 2;
    for (let i = 0; i < len; i++) {
        arr.push(new Point(coordinates[i * 2], coordinates[i * 2 + 1]));
    }
    return arr;
}

function angle2radius(angle) {
    return angle / 180 * Math.PI;
}

function radius2angle(radius) {
    return radius / Math.PI * 180;
}

function values(json) {
    let arr = [];
    for (let name in json) {
        if (json.hasOwnProperty(name)) {
            if (json[name].length) {
                arr = arr.concat(json[name]);
            } else {
                arr.push(json[name]);
            }
        }
    }
    return arr;
}

function isPC() {
    return navigator.platform === "Win32";
}

class Utils {
    static removeItemFromArray(arr, item) {
        let index = arr.indexOf(item);
        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }
    }

    static createLinearGradientMask(width, height, colorStop) {
        let canvas = document.createElement('canvas');
        canvas.width = `${width}`;
        canvas.height = `${height}`;
        let ctx = canvas.getContext('2d');
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
}