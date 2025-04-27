var ballx = 300;
var bally = 300;
var ballSize = 75;
var score = 0;
var gameState = "L1"

function preload() {
  img = loadImage('https://media.tenor.com/sbfBfp3FeY8AAAAj/oia-uia.gif');
  bg = loadImage('https://media2.giphy.com/media/S7E2N6lgHwrNr1BkSs/giphy_s.gif?cid=6c09b952bwa0jma3w4n60yj3b2abwdl6u554u76wv5e08gy9&ep=v1_gifs_search&rid=giphy_s.gif&ct=g')
}


// ============ Setup ============
function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
}


// ============ Draw ============
function draw() {
  image(bg,0,0,width,height);
  fill(255);
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
    levelFour();
  }
  if(gameState == "L5") {
    levelFive();
  }
  if(gameState == "L6") {
    levelSix();
  }
  if(gameState == "L7") {
    Winner();
  }
  text(("Score: " + score),width/2,40);
}


// ============ Level One ============
function levelOne() {
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score >= 10) {
    gameState = "L2";
  }
  
  line(ballx,bally,mouseX,mouseY);
  image(img, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);

}


// ============ Level Two ============
function levelTwo() {
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
   
  if(score >= 20) {
    gameState = "L3";
  }
  
  image(img, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
}

// ============ Level Three ============
function levelThree() {
  text("Level 3", width/2, height-20);
  
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  
  // Move the ball away slowly from the mous
  var moveSpeed = 1.5;
  var dx = ballx - mouseX;
  var dy = bally - mouseY;
  var angle = atan2(dy,dx);
  
  ballx += cos(angle) * moveSpeed;
  bally += sin(angle) * moveSpeed;
  
  
  ballx = constrain(ballx, ballSize/2, width - ballSize/2);
  bally = constrain(bally, ballSize/2, height - ballSize/2);
  
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
   
  if(score >= 30) {
    gameState = "L4";
  }
  
  image(img, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
}


// ============ Level Four ============
function levelFour() {
  text("Level 4", width/2, height-20);
  
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  
  // Move the ball away slowly from the mous
  var moveSpeed = 2.1;
  var dx = ballx - mouseX;
  var dy = bally - mouseY;
  var angle = atan2(dy,dx);
  
  ballx += cos(angle) * moveSpeed;
  bally += sin(angle) * moveSpeed;
  
  
  ballx = constrain(ballx, ballSize/2, width - ballSize/2);
  bally = constrain(bally, ballSize/2, height - ballSize/2);
  
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
   
  if(score >= 40) {
    gameState = "L5";
  }
  
  image(img, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
}


// ============ Level Five ============
function levelFive() {
  text("Level 5", width/2, height-20);
  
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  
  // Move the ball away slowly from the mous
  var moveSpeed = 3.3;
  var dx = ballx - mouseX;
  var dy = bally - mouseY;
  var angle = atan2(dy,dx);
  
  ballx += cos(angle) * moveSpeed;
  bally += sin(angle) * moveSpeed;
  
  
  ballx = constrain(ballx, ballSize/2, width - ballSize/2);
  bally = constrain(bally, ballSize/2, height - ballSize/2);
  
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 2;
  }
   
  if(score >= 50) {
    gameState = "L6";
  }
  
  image(img, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
}


// ============ Level Six ============
function levelSix() {
  text("Level 6", width/2, height-20);
  
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  
  // Move the ball away slowly from the mous
  var moveSpeed = 4.7;
  var dx = ballx - mouseX;
  var dy = bally - mouseY;
  var angle = atan2(dy,dx);
  
  ballx += cos(angle) * moveSpeed;
  bally += sin(angle) * moveSpeed;
  
  
  ballx = constrain(ballx, ballSize/2, width - ballSize/2);
  bally = constrain(bally, ballSize/2, height - ballSize/2);
  
  if(distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 2;
  }
   
  if(score == 60) {
    gameState = "L7";
  }
  
  image(img, ballx - ballSize/2, bally - ballSize/2, ballSize, ballSize);
}


function Winner() {
  fill(0)
  text("Winner!", width/2, height/2);
  
} // ========== End of Winner Function ==========
