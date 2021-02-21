let canvas;
let s;
let followX, followY;
let size;

function setup() {
  let canvas = createCanvas(displayWidth - (displayWidth * .15), displayHeight);
  canvas.parent('main');
  s = 10
  size = 50;
}

function draw() {
  background(0);
  if(mouseX >= 0) {
    rect(mouseX, mouseY, size, size);
  } else {
    rect(s, 50, size, size);
    if (s >= displayWidth) {
      s = 0-size;
    }
  }
  s += 10;
}