let button, button2;
let input;

let curSeed = 0;
let curNumber = -1;

function setup() {
	createCanvas(windowWidth, windowHeight);
    buildComponents();
}

function draw() {
    background(255);

    text('Seed', windowWidth / 2, windowHeight / 2 + 20, 70, 80);
    text(`${floor(curNumber * 10)} - ${curSeed}`,50, 50, 140, 160);
}

function buildComponents() {
    button = createButton('Generate random number');
    button.position(windowWidth / 2 - button.width / 2, windowHeight / 2 - button.height / 2);
    button.mousePressed(generate);

    button2 = createButton('Set seed');
    button2.position(windowWidth / 2 - button2.width / 2, windowHeight / 2 - button2.height / 2 + 90);
    button2.mousePressed(setSeed);

    input = createInput();
    input.position(windowWidth / 2 - input.width / 2, windowHeight / 2 - input.height / 2 + 60);
}

function generate() {
    curSeed += 0.5;
    curNumber = noise(curSeed);
}

function setSeed() {
    curSeed = parseFloat(input.value());
}
