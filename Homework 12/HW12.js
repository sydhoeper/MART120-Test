var x = 50;
var y = 50;
var diameter = 25;

var squareX = 400;
var squareY = 400;
var squareSize = 60;

var circleX = 200;
var circleY = 250;

var mousex = 0;
var mousey = 0;

var width = 10;
var height = 10;

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(40);
  
  //call createPlayer
  createPlayer();

  //call movePlayer
  movePlayer();

  //call createObstacles
  createObstacles();
  
  //call moveObstacles
  moveObstacles();

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

function createObstacles()
{
  //triangle
  fill(197, 245, 39);
  triangle(600,100,650,150,600,150);

  //circle
  fill(247, 213, 7);
  circle(circleX, circleY, 60);

  //square
  fill(0, 174, 255);
  square(squareX,squareY,squareSize);
}

function moveObstacles()
{
  //square
   if(squareX <= 800)
        {
            squareX += 5;
        }
        else
        {
            squareX = 0;
        }
    if(squareY <= 600)
        {
            squareY += 5;
        }
        else
        {
            squareY = 0;
        }
  if (squareX > 800) squareX = 0;
  if (squareX < 0) squareX = 800;
  if (squareY > 600) squareY = 0;
  if (squareY < 0) squareY = 600;

  //circle
  if(circleX <= 800)
      {
        circleX += 5;
      }
      else
      {
        circleX = 0;
      }
    if(circleY <= 600)
      {
      circleY += 5;
      }
      else
      {
        circleY = 0;
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