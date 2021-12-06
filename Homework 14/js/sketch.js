//Player starting location
var characterX = 100;
var characterY = 100;

//Starting coordinates for enemy 1
var enemy1X = 30;
var enemy1Y = 50;
var enemy1XSpeed;
var enemy1YSpeed;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var enemy1XSpeed = [];
var enemy1YSpeed = [];

var clickCheck = 0;

//Coordinates for the 1st mouse clicked obstacle.
var mouseObstacle1X;
var mouseObstacle1Y;

//Coordinates for the 2nd mouse clicked obstacle.
var mouseObstacle2X;
var mouseObstacle2Y;

function setup()
{
    createCanvas(800, 800);
    //Give Enemy 1 a random speed upon start
    //enemy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    //enemy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    for (var i = 0; i < 50; i++) {
        enemy1XSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemy1YSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(800);
        shapeYs[i] = getRandomNumber(800);
        diameters[i] = getRandomNumber(30);
    }
}


function draw()
{
    // background
    background(40,160,200);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders();

    // call exitMessage function
    exitMessage();

    // call createPlayer function
    createPlayer();

    // call keyPressed
    keyPressed();

    // call createEnemies fuction
    createEnemies();

    //call staticObstacles function
    staticObstacles();
}

function createBorders ()
{
    //Upper border of canvas
    rect(0,0,width,10);
    //Left border of canvas
    rect(0,0,10,height);
    //Bottom border of canvas
    rect(0, height-10,width, 10);
    //Border with right side open
    rect(width-10,0,10,height-100);
}

function exitMessage ()
{
    textSize(25);
    text("EXIT--->", width-120,height-20)
}

function createPlayer ()
{
    fill(255,0,10);
    rect(characterX,characterY,25,25);
}

//Allows the player to control the player character using the arrow keys
function keyPressed() 
{
    if (keyIsDown(UP_ARROW)) 
    {
        characterY -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) 
    {
        characterY += 10;
    }
    if (keyIsDown(LEFT_ARROW)) 
    {
        characterX -= 10;
    } 
    if (keyIsDown(RIGHT_ARROW))
    {
        characterX += 10;
    }
}

function createEnemies ()
{
    //Creates a random speed for enemy 1
    fill(255,255,255);
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        enemy1XSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        enemy1YSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += enemy1XSpeed[i];
        shapeYs[i] += enemy1YSpeed[i];

        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
         
        fill(255,255,255);

        
    }

   //Runs a check to see if the player character has left the exit at the proper x and y coordinates.
   if(characterX > width && characterY > width-100)
   {
       fill(0);
       stroke(5);
       textSize(50);
       text("You Win!", width/2-50, height/2-50);
   } 
}

//Gets the coordinates of the mouse and stores them for the mouse obstacle coordinates, and if the mouse has already made a shape, store for a second shape.
function mouseClicked()
{
    if(clickCheck == 1)
    {
        mouseObstacle1X = mouseX;
        mouseObstacle1Y = mouseY;
        clickCheck = 0;
    }
    else
    {
        mouseObstacle2X = mouseX;
        mouseObstacle2Y = mouseY;
        clickCheck = 1;
    }
}

function staticObstacles ()
{
 //Creates 1st shape at the location of a mouse click
 fill(0,150,0);
 rect(mouseObstacle1X, mouseObstacle1Y, 50, 100);

 //Creates 2nd shape if first shape is already made at location of a mouse click
 rect(mouseObstacle2X, mouseObstacle2Y, 100, 100);
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}