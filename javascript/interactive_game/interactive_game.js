var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;

function preload() {
 image = loadImage('https://media.tenor.com/WmU2lZybYmcAAAAM/gato-feliz-de-replus.gif'); 
}

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
} // End of Setup

function draw() {
  background(245);
  levelOne();
  text(("Score: " + score),width/2.,40);
} // End of Draw


function levelOne() {
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally,ballSize,ballSize);
  
} // End of Level One
