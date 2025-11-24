var myXs = [];
var myYs = [];
var myDiameters = [];
var myColors = [];
var myXSpeeds = [];
var myYSpeeds = [];

var x = 50;
var y = 50;
var diameter = 25;

var mousex = 0;
var mousey = 0;


function setup() {
  createCanvas(800,600);

  //arrays
  for(var i = 0; i < 5; i++)
  {
    myColors[i] = [random(255), random(255), random(255)];
    myXs[i] = random(800);
    myYs[i] = random(600);
    myDiameters[i] = random(100);
    myXSpeeds[i] = random(-3,3);
    myYSpeeds[i] = random (-3,3);
  }
}

function draw() {
  background(40);
  
  //arrays
  for(var i = 0; i < 5; i++)
  {
    //draw obstacles
    fill(myColors[i][0], myColors[i][1], myColors[i][2]);
    circle(myXs[i], myYs[i], myDiameters[i]);

    //move obstacles
    myXs[i] += myXSpeeds[i];
    myYs[i] += myYSpeeds[i];

    //wrap around
    if (myXs[i] > width) myXs[i] = 0;
    if (myXs[i] < 0) myXs[i] = width;
    if (myYs[i] > height) myYs[i] = 0;
    if (myYs[i] < 0) myYs[i] = height

  }

  //call createPlayer
  createPlayer();

  //call movePlayer
  movePlayer();

  //call createObject
  createObject();

  //call createBorders function
  createBorders(10);

  //call exit message
  exitMessage();

  //call winMessage
  winMessage();
}

function createBorders(thickness)
{
  fill(255,171,0);
  //top border
  rect(0,0,width,thickness);
  //left
  rect(0,0,thickness,height);
  //bottom
  rect(0, height-thickness,width,thickness);
  //right upper
  rect(width-thickness,0,thickness,height-50);
}

function createObject()
{
  fill(207, 7, 247)
  circle(mousex, mousey, 30);
}

function mousePressed()
{
   mousex = mouseX;
   mousey = mouseY;
        
}

function createPlayer()
{
  fill(255,102,102);
  circle(x, y, diameter);
}

function movePlayer()
{
  if(keyIsDown(68))
  {
      x+=5;
  }
  if(keyIsDown(65))
  {
      x-=5;
  }
   if(keyIsDown(83))
   {
    y+=5;
   }
    if(keyIsDown(87))
   {
    y-=5;
   }
}

function keyPressed() 
{
  if (key == 'd') 
  {
    x+=15;
  } 
  else if (key == 'a') 
  {
    x-=15;
  }
  if (key == 's')
  {
    y+=15;
  }
  else if (key == 'w')
  {
    y-=15
  }
}


function exitMessage()
{
  textSize(16);
  fill(260);
  text("EXIT", width-50, height-50)
}

function winMessage()
{
  if ((x > 750 && x < width) && (y > 550 && y < height))
{
    textSize(48);
    fill(216, 255, 171);
    text("You win!" , 600 , 500);
 }
}