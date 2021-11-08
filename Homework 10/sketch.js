//all of the variables used for moving the different shapes
var headX = 400;
var headY = 250;
var headDirection;

var hairmidX = 400;
var hairmidY = 250;
var hairmidDirection;

var hair2X = 200;
var hair2Y = 150;
var hair2Direction;

var hair1X = 200;
var hair1Y = 150;
var hair1Direction;

var backhairX = 275;
var backhairY = 150;
var backhairXDirection;
var backhairYDirection;

var size = 50;
var sizeDirection = 2;
var count = 0

var r = 196;
var g = 178;
var b = 66;
//sets the canvas
function setup()
{
    createCanvas(800, 800);
    headDirection = Math.floor(Math.random() * 4) + 1;
    hairmidDirection = Math.floor(Math.random() * 4) + 1;
    hair2Direction = Math.floor(Math.random() * 4) + 1;
    hair1Direction = Math.floor(Math.random() * 4) + 1;
    backhairXDirection = Math.floor(Math.random() * 4) + 1;
    backhairYDirection = Math.floor(Math.random() * 4) + 1;
}

//draws the character
function draw()
{
    // general line thinkness
    strokeWeight(10);

    // title
    background(97,68,113);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }       
    text("Self Portrait", 250,50);

    //hair back
    fill(r, g, b);
    rect(backhairX,backhairY,200,250);
    backhairX+=backhairXDirection;
    if(backhairX >= 600 || backhairX <= 0)
    {
        r = Math.floor(Math.random() * 256) + 1;
        g = Math.floor(Math.random() * 256) + 1;
        b = Math.floor(Math.random() * 256) + 1;
        backhairXDirection *= -1;
    }
    backhairY += backhairYDirection;
    if(backhairY <= 0 || backhairY >= 550 )
    {
        r = Math.floor(Math.random() * 256) + 1;
        g = Math.floor(Math.random() * 256) + 1;
        b = Math.floor(Math.random() * 256) + 1;
        backhairYDirection *= -1;
    }

    // dress
    fill(95,233,231);
    triangle(320,500,400,320,500,500)

    // head
    fill(255, 224, 189);
    circle(headX, headY, 200);
    headX+=headDirection;
    if(headX >= 718 || headX <= 82)
    {
        headDirection *= -1;
    }    

    // hair
    fill(196, 178, 66);
    rect(475,hair2Y,50,250);
    hair2Y += hair2Direction;
    if(hair2Y <= 0 || hair2Y >= 550)
    {
        hair2Direction *= -1;
    }
    fill(196, 178, 66);
    rect(275,hair1Y,50,250);
    hair1Y += hair1Direction;
    if(hair1Y <= 0 || hair1Y >= 550 )
    {
        hair1Direction *= -1;
    }
    fill(196, 178, 66);
    rect(hairmidX,150,200,50);
    hairmidX+=hairmidDirection;
    if(hairmidX >= 600 || hairmidX <= 0)
    {
        hairmidDirection *= -1;
    }
    // arms
    line(370,375,300,320);
    line(435,375,500,320);

    // iris
    fill(191,219,219);
    circle(350,250,50)
    circle(450,250,50)

    // mouth
    noFill();
    stroke(0);
    curve(405, 236, 384, 323, 421, 323, 415, 275);

    // legs
    rect(375,500,10,50);
    rect(425,500,10,50);

    // pupil
    strokeWeight(30);
    fill(0);
    point(360,260);
    point(460,260);

    //name
    textSize(30);
    strokeWeight(1)
    fill(255)
    text("Taryn Crawford",500,700 );


}