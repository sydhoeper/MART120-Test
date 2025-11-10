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

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(40);
  fill(245, 73, 39);
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



  circle(x, y, diameter);
  fill(39, 207, 245);

  square(squareX,squareY,squareSize);
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

  fill(197, 245, 39);
  triangle(600,100,650,150,600,150);

  fill(247, 213, 7);
  circle(circleX, circleY, 60);
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

  fill(207, 7, 247)
  circle(mousex, mousey, 30);

  fill(66, 40, 66)
  ellipse(750,500,40,80)

  if ((x > 730 && x < 770) && (y > 460 && y < 540))
  {
    textSize(48);
    fill(216, 255, 171);
    text("You win!" , 400 , 300);
  }
}

function mousePressed()
    {
        mousex = mouseX;
        mousey = mouseY;
        
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