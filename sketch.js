let color = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(mouseIsPressed){
    fill(0, 0, color);
  } else {
    fill(225);
  }
  ellipse(mouseX, mouseY, 80, 80);
  color = color + 5;
  if (color > 254){
    color = 0;
  }
}