let posX = 250, posY = 250;
let rotation = 0;

let rotateSpeed = 0.05, moveSpeed = 5.0;

let dirX = 0, dirY = 0, rot = 0;

let rayLength = 400;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();

    HandleInput();
    MovePlayer();

    line(posX, posY, posX - rayLength * sin(-rotation), posY - rayLength * cos(-rotation));

    ellipse(posX, posY, 50, 50);

    DrawText();
}

function HandleInput() {
	rot = 0;
	if (keyIsDown(37)) {
		rot -= 1;
	}
	if (keyIsDown(39)) {
		rot += 1;
	}

	dirX = 0, dirY = 0;
	if (keyIsDown(87)) {
		dirY += 1;
	}
	if (keyIsDown(83)) {
		dirY -= 1;
	}
	if (keyIsDown(65)) {
		dirX -= 1;
	}
	if (keyIsDown(68)) {
		dirX += 1;
	}
}

function MovePlayer() {
	rotation += rotateSpeed * rot;

	let magnitudeX, magnitudeY;
	magnitudeX = moveSpeed * dirX;
	magnitudeY = moveSpeed * dirY;

    posX += cos(rotation) * magnitudeX;
    posY += sin(rotation) * magnitudeX;

    //line(posX, posY, posX - sin(-rotation) * 100, posY - cos(-rotation) * 100);

    posX -= sin(-rotation) * magnitudeY;
    posY -= cos(-rotation) * magnitudeY;
}

function DrawText() {
    text(rot, 0, 10);
    text(dirX, 0, 20);
    text(dirY, 0, 30);

    text(rotation, 0, 50);
    text(posX, 0, 60);
    text(posY, 0, 70);
}

function bresenham(x1, y1, x2, y2) {
	m_new = 2 * (y2 - y1);
	slope_error_new = m_new - (x2 - x1);
	for (let x = x1, y = y1; x <= x2; x++) {
        set(x, y, color(0));
        updatePixels();
		slope_error_new += m_new;

		if (slope_error_new >= 0) {
			y++;
			slope_error_new -= 2 * (x2 - x1);
		}
	}
}
