let canvas;
let xPos = 0;
let yPos = 0;
let easing = .01

function setup() {
    canvas = createCanvas(800, 800);
    //canvas.position(0,0);
    canvas.style('z-index', '-2');
    background(220);
}

function windowResized() {
   // console.log ("bigger! smaller!");
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // clear();
    xPos = xPos + (mouseX - xPos) * easing;
    yPos = yPos + (mouseY - yPos) * easing;
    drawThing(xPos, yPos);
}

function drawThing(_x,_y) {
    strokeWeight(0);
    fill(random(200,255), random(200,255), random(200,255));
    ellipse(_x, _y, 50, 50);
}