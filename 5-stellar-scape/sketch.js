var grid = 8; // changes grid units & base of "pointed needles"
var inc = 76; // less or more "pointed needles"
var stretch; // subtley moves center point
var input, button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(35);
  stretch = 350;
  input = createInput();
  input.position(20, 65);

  button = createButton('update image');
  button.position(200, 65);
  button.mousePressed(updateImage);
}

function draw() {
  background(35);
  fill(255, 255, 255);
  stroke(100, 100, 100, 100);
  strokeWeight(4);
  for(var x = 50; x <= width-50; x += inc){
    for (var y = 50; y <= height-50; y += inc){
      beginShape();
      vertex(x,y);
      vertex(x+ grid, y+ grid);
      vertex((x/2) + stretch, (y/2) + stretch);
      endShape();
    }
  }
}

function updateImage () {
  var newNumber = Number(input.value());
  stretch = newNumber;
}
