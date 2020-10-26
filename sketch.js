function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  push();
  translate(100,100);
  //translate the move the origin to 100 , 100
  rotate(100);

  rectMode(CENTER)
  fill(255)
  rect(0,0,100,100);
  pop();
  //push();
  strokeWeight(4)
  stroke("red");
  fill("green")
  rect(160,60,100,100);
  
  //pop()
  
}