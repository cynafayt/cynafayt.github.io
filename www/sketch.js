let canvas;

function setup() {
  let canvas = createCanvas(windowWidth - (windowWidth * .15), windowHeight);
  canvas.parent('main');
}

function draw() {
  background(255);
  rect(50, 50, 50, 50);
}
