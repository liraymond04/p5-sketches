let tileMap;
let mapWidth, mapHeight;
let tileWidth = 50, tileHeight = 50;
let x = 0, y = 0;
let source;

let edges, corners;

function setup() {
    createCanvas(windowWidth, windowHeight);
    mapWidth = ceil(windowWidth / tileWidth);
    mapHeight = ceil(windowHeight / tileHeight);
    tileMap = new Tilemap(mapWidth, mapHeight, tileWidth, tileHeight);
    source = new Particle();
}

function draw() {
    background(0);
    tileMap.show();
    source.show();

    x = floor(mouseX / tileWidth);
    y = floor(mouseY / tileHeight);
}

function mouseClicked() {
    if (mouseButton == LEFT) {
        if (keyIsDown(CONTROL)) {
            source.update(mouseX, mouseY);
        } else if (keyIsDown(SHIFT)) {
            if ((x >= 0 && x < mapWidth) && (y >= 0 && y < mapHeight)) tileMap.map[x][y].val = 0;
        } else {
            if ((x >= 0 && x < mapWidth) && (y >= 0 && y < mapHeight)) tileMap.map[x][y].val = 1;
        }
    }
}
