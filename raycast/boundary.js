class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
    }

    show(w, h) {
        stroke(255);
        line(this.a.x * w, this.a.y * h, this.b.x * w, this.b.y * h);
    }
}
