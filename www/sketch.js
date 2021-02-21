let canvas;

function setup() {
  let canvas = createCanvas(displayWidth - (displayWidth * .15), displayHeight);
  canvas.parent('main');
}

function draw() {
  background(255);
  rect(50, 50, 50, 50);
}
