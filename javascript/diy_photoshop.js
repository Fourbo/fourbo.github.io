var img;
var img2;
var img3;
var img4;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://fourbo.github.io/images/mango_ice_cream.png');
  img2 = loadImage('https://fourbo.github.io/images/brownie.png');
  img3 = loadImage('https://fourbo.github.io/images/strawberry.png');
  img4 = loadImage('https://fourbo.github.io/images/macaroon_background.png')
}

function setup() {
createCanvas(1000, 1000);  // canvas size
background(img4);   // use our background screen color
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
  // graphic function1

  // 1st Tool: Rainbow Frost
 if (toolChoice == '1' ) {
    strokeWeight(20);
    stroke(random(255),random(255),random(255),random(60,120));
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
  // 2nd Tool: Sprinkle Brush
 else if (toolChoice == '2') {
    strokeWeight(20);
    stroke(random(255),random(255),random(255),random(70,120));
    line(mouseX+random(40), mouseY+random(40), pmouseX-random(40), pmouseY-random(40));
  }
  
  // 3rd Tool: Pink Frosting
  else if (toolChoice == '3') {
    stroke(225,143,227);
    strokeWeight(25);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  // 4th Tool: Neapolitan Ice Cream
  else if (toolChoice == '4') {
    stroke(84,63,0);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX-30, pmouseY-30);
    stroke(196,33,33);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX-30, pmouseY);
    stroke(255,249,230);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX-30, pmouseY+30);
  }
  
  // 5th Tool: Peanut Butter Chips
  else if (key == '5') {
    strokeWeight(0);
    fill(204,157,39);
    triangle(mouseX,mouseY,mouseX-15,mouseY+20,mouseX+15,mouseY+20);
  }
  
  // 6th Tool: Confetti Sprinkles
  else if (toolChoice == '6') {
    let dotCount = int(random(2,4));
    let maxRadius = 50;
    
    for (let i = 0; i < dotCount; i++) {
      let angle = random(TWO_PI);
      let radius = random(20,maxRadius);
      let x = mouseX + cos(angle) * radius;
      let y = mouseY + sin(angle) * radius;
      strokeWeight(0);
      let size = random(6,10);
      fill(random(255),random(255),random(255),180);
      ellipse(x,y,size,size);
    }
  }
  
  // 7th Tool: Mango Ice Cream
  else if (toolChoice == '7') {
    image(img, mouseX-random(30,70), mouseY-random(30,70), random(30,70), random(30,70));  
  }
  
  // 8th Tool: Brownie
  else if (toolChoice == '8') {
    image(img2, mouseX-25, mouseY-25, 75, 75);  
    
  }
  
  // 9th Tool: Cheesecake
  else if (toolChoice == '9') {
    stroke(92,69,0);
    strokeWeight(2);
    fill(255,247,224);
    triangle(pmouseX+10,pmouseY,pmouseX+20,pmouseY+40,pmouseX-40,pmouseY+40)
  }
  
  // 10th Tool: Strawberries
  else if (toolChoice == '0') {
     image(img3, mouseX-25, mouseY-25, 50, 50); 
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
