var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1"

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
  if(gameState == "L1") {
    levelOne();
  }
  if(gameState == "L2") {
    levelTwo();
  }
  if(gameState == "L3") {
    levelThree();
  }
  if(gameState == "L4") {
    Winner();
  }
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
  
  if(score > 5) {
    gameState = "L2";
  }
  
  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally,ballSize,ballSize);
  
} // ========== End of Level One ==========

function levelTwo() {
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
   
  if(score > 10) {
    gameState = "L3";
  }
  
  ellipse(ballx,bally,ballSize,ballSize);
  
} // ========== End of Level Two ==========

function levelThree() {
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 1;
  }
   
  if(ballSize <= 10) {
    gameState = "L4";
  }
  
  ellipse(ballx,bally,ballSize,ballSize);
  
} // ========== End of Level Three ==========

function Winner() {
  text("Winner!", width/2, height/2);
  
} // ========== End of Winner Function ==========
