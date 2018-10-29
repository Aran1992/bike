class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function calcPointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function calcRadius(sp, ep) {
    return Math.atan((ep.y - sp.y) / (ep.x - sp.x));
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

function getPathRect(path) {
    let maxX = 0, minX = 0, maxY = 0, minY = 0;
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

function values(json) {
    let arr = [];
    for (let name in json) {
        if (json.hasOwnProperty(name)) {
            arr.push(json[name]);
        }
    }
    return arr;
}

function parseRoadPathList(resource) {
    let json = JSON.parse(resource);
    return json.child.map(data => {
        return data.props.points.split(",").map((intStr, i) => {
            let value = parseInt(intStr);
            if (i % 2 === 0) {
                value += data.props.x;
            } else {
                value += data.props.y;
            }
            return value;
        });
    });
}

function isPC() {
    return navigator.platform === "Win32";
}