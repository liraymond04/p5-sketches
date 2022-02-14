class Tile {
    constructor(x, y, val) {
        this.edges = [];
        this.edges.push(new Boundary(x, y, x+1, y)); // north
        this.edges.push(new Boundary(x+1, y, x+1, y+1)); // east
        this.edges.push(new Boundary(x, y+1, x+1, y+1)); // south
        this.edges.push(new Boundary(x, y, x, y+1)); // west

        this.pos = createVector(x, y);
        this.val = val;
    }

    show(w, h) {
        const x = this.pos.x, y = this.pos.y;

        if (this.val == 0) fill('black');
        else if (this.val == 1) fill ('red');
        else if (this.val == 2) fill ('blue');

        if (this.val != 0) {
            noStroke();
            rect(x * w, y * h, w, h);
            for (let edge of this.edges) {
                //edges.push(edge);
            }

            corners.push([x, y]);
            corners.push([x+1, y]);
            corners.push([x, y+1]);
            corners.push([x+1, y+1]);
        }
    }
}
