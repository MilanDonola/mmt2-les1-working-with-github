var rood = 100;
var groen = 255;
var blauw = 10;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(100,255,0);
}

function draw() {
  // put drawing code here

rood = random(255);
  
  stroke(255,255,0);
  strokeWeight(5);
  fill(0,0,255);
  ellipse(200, 200, 400, 400);

  fill(100,25,100);

  fill(100, 40, 200);
  rect(150, 150, 100, 100);

  stroke(0, 0, 0);
  line(0, 200, 400, 200);
  stroke(0, 0, 0);
  
  fill(rood,0,0);
  ellipse(200, 200, 50, 50);

}