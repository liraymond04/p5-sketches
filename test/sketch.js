let bg_colour = 0;
let bg_button;

function setup() {
	createCanvas(800, 600);

    bg_button = createButton("Click Me");
    bg_button.position((width/2)-(bg_button.width/2), (height/2)-(bg_button.height/2));
    bg_button.mousePressed(change_bg);
}

function draw() {
    background(bg_colour);
    noStroke();

    ellipse(mouseX, mouseY, 20, 20);
}

function change_bg() {
    let r = random(255), g = random(255), b = random(255);
    bg_colour = [r, g, b];
}
