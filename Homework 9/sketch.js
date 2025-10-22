function setup() {
  createCanvas(400,400);
}

function draw()
{
    background(102,78,255);
    //head
    fill(255,204,153);
    strokeWeight(0);
    circle(200,150,175);
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
    arc(200,190,60,50,0,PI);
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
    arc(200,120,190,140,PI,TWO_PI);
    //neck
    fill(255,204,153);
    rect(180,230,40,40);
    //shirt
    fill(255,153,51);
    rect(125,250,150,150);
    stroke(32);
    strokeWeight(2);
    line(160, 280, 160, 400);
    line(240, 280, 240, 400);
    //sky
    stroke(255,239,0);
    strokeWeight(10);
    point(40,60);
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
    textSize(28);
    fill(32)
    text('Silly lil Mountain Lover',15,43);

}