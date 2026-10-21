let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.05;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  canvas.position(0, 0);
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("left", "0");
  canvas.style("z-index", "9999");
  canvas.style("pointer-events", "none");

  clear();

  xPos = mouseX;
  yPos = mouseY;
}

function draw() {
  clear();

  xPos += (mouseX - xPos) * easing;
  yPos += (mouseY - yPos) * easing;

  drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
  noStroke();
  fill(230, 240, 255);
  ellipse(_x, _y, 30, 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}