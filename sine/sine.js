class Sine {
    xspacing = 16;
    yspacing = 16;

    theta = 0.0;
    amplitude = 1;
    period = 500;
    midline = 0;

    yval = [];

    constructor(theta, amplitude, period, midline) {
        this.theta = theta;
        this.amplitude = amplitude;
        this.period = period;
        this.midline = midline;
    }

    calcWave(x, y) {
        this.xspacing = x; this.yspacing = y;

        let w = width / this.xspacing;
        this.yval = new Array(floor(w));
        this.xval = new Array(floor(w));

        let dx = (TWO_PI / this.period) * this.xspacing;

        x = this.theta;
        for (let i=0; i<this.yval.length; i++) {
            this.yval[i] = sin(x) * this.amplitude - this.midline;
            this.xval[i] = x;
            x += dx;
        }
    }

    renderWave(w, h, r, g, b) {
        noStroke();
        for (let x=0; x<this.yval.length; x++) {
            fill(r + pow(x, 1.2), g, b);
            // Make points smaller near center
            // w += sin(this.xval[x]/2);
            // h += sin(this.xval[x]/2);
            ellipse(x * this.xspacing, (height/2) + (this.yval[x] * this.yspacing), w, h);
        }
    }
}
