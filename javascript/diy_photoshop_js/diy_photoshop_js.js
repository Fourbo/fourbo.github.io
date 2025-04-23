var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('bread.PNG');
}

function setup() {
createCanvas(1000, 1000);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

  // 1st Tool: Rainbow Snake
 if (toolChoice == '1' ) {
    strokeWeight(random(20));
    stroke(random(255),random(255),random(255),20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  // 2nd Tool: Long Sprinkles
 else if (toolChoice == '2') {
    strokeWeight(20);
    stroke(random(255),random(255),random(255),120);
    line(mouseX+random(30), mouseY+random(30), pmouseX-random(30), pmouseY-random(30));
  }
  
  // 3rd Tool: Pink Frosting
  else if (toolChoice == '3') {
    stroke(255, 102, 229);
    strokeWeight(20)
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // 4th Tool: Round Sprinkles
  else if (toolChoice == '4') {
    let dotCount = int(random(5,20));
    let maxRadius = 50;
    strokeWeight(0);
    for (let i = 0; i < dotCount; i++) {
      let angle = random(TWO_PI);
      let radius = random(maxRadius);
      let x = mouseX + cos(angle) * radius;
      let y = mouseY + sin(angle) * radius;
      
      let size = random(5,10);
      fill(random(255),random(255),random(255),180);
      ellipse(x,y,size,size);
    }
  }
  
  // 5th Tool: Multibox
  else if (key == '5') {
    stroke(0, 150, 150);
    strokeWeight(random(10));
    testbox(random(255), random(255), random(255));
   // make testbox do something!
   // line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // 6th Tool: Bread Placer
  else if (toolChoice == '6') {
    image(img, mouseX-random(200), mouseY-random(200), random(200), random(200));  
  }
  
  // 7th Tool
  else if (toolChoice == '7') {
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  }
  
  // 8th Tool
  else if (toolChoice == '8') {
    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
    
  }
  
  // 9th Tool
  else if (toolChoice == '9') {
    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  }
  
  else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  }
  
  else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    image(img, mouseX-random(200), mouseY-random(200), random(200), random(200));  
  }
  
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
