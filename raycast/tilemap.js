function cmp(a, b) {
    return (a.a.x == b.a.x && a.a.y == b.a.y && a.b.x == b.b.x && a.b.y == b.b.y);
}

function findCorner(val) {
    for (let i=0; i<corners.length; i++) {
        if (JSON.stringify(corners[i]) === JSON.stringify(val)) {
            return i;
        }
    }
    return -1;
}

function removeCorner(val) {
    for (let i=0; i<corners.length; i++) {
        if (JSON.stringify(corners[i]) === JSON.stringify(val)) {
            corners.splice(i, 1);
        }
    }
}

class Tilemap {
    constructor(x, y, w, h) {
        this.map = [];
        for (let i=0; i<x; i++) {
            this.map[i] = [];
            for (let j=0; j<y; j++) {
                this.map[i][j] = new Tile(i, j, 0);
            }
        }
        this.mapDimensions = createVector(x, y);
        this.tileDimensions = createVector(w, h);
    }

    show() {
        edges = [];
        corners = [];

        stroke(255);
        for (let x=0; x<this.mapDimensions.x; x++) {
            for (let y=0; y<this.mapDimensions.y; y++) {
                this.map[x][y].show(this.tileDimensions.x, this.tileDimensions.y);
            }
        }

        for (let x=0; x<this.mapDimensions.x; x++) {
            for (let y=0; y<this.mapDimensions.y; y++) {
                if (this.map[x][y].val == 1) {
                    if (y-1 >= 0 && this.map[x][y-1].val == 0) { // north
                        edges.push(this.map[x][y].edges[0]);
                        corners.push([x, y]);
                        corners.push([x+1, y]);
                    }
                    if (x+1 < this.mapDimensions.x && this.map[x+1][y].val == 0) { // east
                        edges.push(this.map[x][y].edges[1]);
                        corners.push([x+1, y]);
                        corners.push([x+1, y+1]);
                    }
                    if (y+1 < this.mapDimensions.y && this.map[x][y+1].val == 0) { // south
                        edges.push(this.map[x][y].edges[2]);
                        corners.push([x, y+1]);
                        corners.push([x+1, y+1]);
                    }
                    if (x-1 >= 0 && this.map[x-1][y].val == 0) { // west
                        edges.push(this.map[x][y].edges[3]);
                        corners.push([x, y]);
                        corners.push([x, y+1]);
                    }

                    if (y-1 >= 0 && this.map[x][y-1].val == 1) { // north
                        let pos = findCorner([x, y]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x, y]);
                        }
                        pos = findCorner([x+1, y]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x+1, y]);
                        }
                    }
                    if (x+1 < this.mapDimensions.x && this.map[x+1][y].val == 1) { // east
                        let pos = findCorner([x+1, y]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x+1, y]);
                        }
                        pos = findCorner([x+1, y+1]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x+1, y+1]);
                        }
                    }
                    if (y+1 < this.mapDimensions.y && this.map[x][y+1].val == 1) { // south
                        let pos = findCorner([x, y+1]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x, y+1]);
                        }
                        pos = findCorner([x+1, y+1]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x+1, y+1]);
                        }
                    }
                    if (x-1 >= 0 && this.map[x-1][y].val == 1) { // west
                        let pos = findCorner([x, y]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x, y]);
                        }
                        pos = findCorner([x, y+1]);
                        if (pos != -1) {
                            corners.splice(pos, 1);
                        } else {
                            corners.push([x, y+1]);
                        }
                    }
                }
            }
        }

        for (let edge of edges) {
            edge.show(50, 50);
        }
        for (let corner of corners) {
            fill(255);
            ellipse(corner[0] * this.tileDimensions.x, corner[1] * this.tileDimensions.y, 5, 5);
        }
    }
}
