let canvas;

function setup() {
  let canvas = createCanvas(deviceWidth - (deviceWidth * .15), deviceHeight);
  canvas.parent('main');
}

function draw() {
  background(255);
  rect(50, 50, 50, 50);
}
