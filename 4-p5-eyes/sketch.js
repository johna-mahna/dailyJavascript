function setup() {
  createCanvas (1024, 768);
}

function draw() {
  background (235);
  strokeWeight(4);
  // var vel = abs(mouseX - pmouseX);
  var velX = abs(mouseX - pmouseX);
  var velY = abs(mouseY - pmouseY);
  var vel = (velX + velY);
  // console.log(vel, velX, velY);

  // surface
  fill(200);
  noStroke();
  rect(0, 570, width, 600);

  // draw the blob body
  fill(149, 40, 40);
  noStroke();
  rect(240, 500, 550, 100);

  stroke(149, 40, 40);
  fill(248);
  // container1
  ellipse(453, 506, 60, 70);
  // container2
  ellipse(544, 506, 60, 70);
  //eye 1

  // eyes and eyeballs
  fill(149, 40, 40);
  fill(0);
  noStroke();
  var eyePositionY =  map(mouseY, 0, height, 0, 20);
  var eyePositionX =  map(mouseX, 0, width, 0, 15);
  // left eye
  ellipse(444 + eyePositionX, 487 + eyePositionY, 20, 20);
  // right eye
  ellipse(530 + eyePositionX, 487 + eyePositionY, 20, 20);
  noFill();

  // if the fly buzzes fast, I get angry
  stroke(50);
  strokeWeight(10);
  var anger = map(vel, 0, 200, 0, 10);
  line(420, 458 + anger, 475, 462 - anger);
  line(575, 458 + anger, 520, 462 - anger);

  // handle a blink
  if (mouseIsPressed) {
    fill(149, 40, 40);
    noStroke();
    ellipse(453, 506, 60, 70);
    ellipse(544, 506, 60, 70);
  } else {
    fill(149, 40, 40);
    noStroke();
    // draw left lid
    beginShape();
      vertex(425, 488);
      bezierVertex(457, 455, 457, 470, 480, 488);
    endShape();
    // draw right lid
    beginShape();
      vertex(520, 488);
      bezierVertex(540, 455, 550, 470, 570, 488);
    endShape();
  }

  // draw the fly
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(mouseX + 4, mouseY - 18, 7, 15);
  fill(0);
  noStroke();
  ellipse(mouseX, mouseY - 10, 20, 10);

  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(mouseX - 4, mouseY - 18, 7, 15);

}
