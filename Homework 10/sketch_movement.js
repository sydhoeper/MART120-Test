var headX = 200;
var headY = 150;
var headDirection = 1;

var hairX = 200;
var hairY = 120;
var hairDirection = 2;

var bodyX = 125;
var bodyY = 250;
var bodyDirection = 3;

var mouthX = 200;
var mouthY = 190;
var mouthDirection = 3;

var starX = 40;
var starY = 60;
var starXDirection = 3;
var starYDirection = 3;

var size = 28;
var count = 0;
var sizeDirection = 1;

var movement;

function setup() {
  createCanvas(400,400);

  headDirection = random(0.5, 2);
  hairDirection = random(0.5, 2);
  bodyDirection = random(0.5, 2);
  mouthDirection = random(0.5, 2);
  sizeDirection = random(0.5, 5);

  starXDirection = random(1, 3);
  starYDirection = random(1, 3);


}

function draw()
{
    background(102,78,255);
    //head
    fill(255,204,153);
    strokeWeight(0);
    circle(headX,headY,175);
        headX+=headDirection;
    if(headX >= 230 || headX <= 170)
    {
        headDirection *= -1;
    }
    //eyes
    fill(255);
    circle(170,150,40);
    fill(255);
    circle(230,150,40);
    //pupils
    fill(32);
    circle(175,155,20);
    fill(32);
    circle(225,145,20);
    //mouth
    fill(32);
    arc(mouthX,mouthY,60,50,0,PI);
         mouthY+=mouthDirection;
    if(mouthY >= 200 || mouthY <= 175)
    {
        mouthDirection *= -1;
    }
    //tongue
    push();
    translate(180,205);
    rotate(QUARTER_PI);
    fill(255,102,102);
    arc(0,0,20,50,0,PI);
    stroke(150,0,0);
    strokeWeight(1);
    line(0,-1,0,20);
    pop();
    //hair
    fill(102,51,0);
    arc(hairX,hairY,190,140,PI,TWO_PI);
          hairX+=hairDirection;
    if(hairX >= 300 || hairX <= 100)
    {
        hairDirection *= -1;
    }
    //neck
    fill(255,204,153);
    rect(180,230,40,40);
    //shirt
    fill(255,153,51);
    rect(bodyX,bodyY,150,150);
    stroke(32);
    strokeWeight(2);
    line(160, 280, 160, 400);
    line(240, 280, 240, 400);
    bodyY += bodyDirection;
    if(bodyY <= 250 || bodyY >= 350 )
    {
        bodyDirection *= -1;
    }
    //sky
    stroke(255,239,0);
    strokeWeight(10);
    point(starX,starY);
    starX += starXDirection;
    if(starX <= 40 || starX >= 100 )
    {
        starXDirection *= -1;
    }
    starY += starYDirection;
    if(starY <= 40 || starY >= 100 )
    {
        starYDirection *= -1;
    }
    point(60,140);
    point(300,280);
    point(260,235);
    point(350,60);
    point(60,250);
    strokeWeight(5);
    point(100,240);
    point(380,260);
    point(180,20);
    point(350,200);
    point(40,275);
    point(30,200);
    point(360,150);
    //mountains
    fill(160);
    strokeWeight(0);
    triangle(0, 400, 50, 300, 100, 400);
    triangle(300, 400, 350, 250, 400, 400);
    fill(255);
    strokeWeight(0);
    triangle(25, 350, 50, 300, 75, 350);
    triangle(316, 350, 350, 250, 383, 350);
    //signature
    textSize(12);
    fill(32)
    text('Syd Hoeper',315,390);
    
    //title
    fill(32)
    textSize(size)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Silly Lil Mountain Lover',15,43);

}