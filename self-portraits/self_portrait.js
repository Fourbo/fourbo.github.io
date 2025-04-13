function setup() {
createCanvas(600,600);
}
function draw() {
background(184,222,247);

// Shirt
strokeWeight(0);
fill(252,169,3);
rect(100,500,400,100);

// Head
push();
noStroke();
fill(250,237,202);
ellipse(300,300,400,500);

// Hair
fill(163,109,0);
rect(170,60,270,60);
triangle(200,70,370,100,485,20);
triangle(200,60,350,60,400,20);
triangle(180,60,270,60,330,20);

// Eyebrows
noFill();
stroke(163,109,0);
strokeWeight(7);
arc(230,210,60,25,PI,TWO_PI);
arc(370,210,60,25,PI,TWO_PI);

// Eyes
strokeWeight(0);
fill(255,255,255);
ellipse(230,250,80,55);
ellipse(370,250,80,55);
fill(84,159,209);
ellipse(230,250,50,50);
ellipse(370,250,50,50);
fill(0,0,0);
ellipse(230,250,20,20);
ellipse(370,250,20,20);

// Nose
pop();
fill(240, 225, 170);
triangle(300,270,300,345,340,345);

// Mouth
noFill();
strokeWeight(4);
arc(300,450,100,40,TWO_PI,PI);


}
