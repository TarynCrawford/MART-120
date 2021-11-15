//Player starting location
var characterX = 100;
var characterY = 100;

//Starting coordinates for enemy 1
var enemy1X = 30;
var enemy1Y = 50;
var enemy1XSpeed;
var enemy1YSpeed;

//Starting coordinates for Enemy 2
var enemy2X = 100;
var enemy2Y = 400;
var enemy2XSpeed;
var enemy2YSpeed;

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
    enemy1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    enemy1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

//Allows the player to control the player character using the arrow keys
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 50;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 50;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 50;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 50;
    }
}

function draw()
{
    background(40,160,200);
    stroke(0);
    fill(0);
    //Upper border of canvas
    rect(0,0,width,10);
    //Left border of canvas
    rect(0,0,10,height);
    //Bottom border of canvas
    rect(0, height-10,width, 10);
    //Border with right side open
    rect(width-10,0,10,height-100);

    textSize(25);
    text("EXIT--->", width-120,height-20)

    //player
    fill(10,200,10);
    rect(characterX,characterY,25,25);

    fill(250,10,14);
    //Enemy1
    circle(enemy1X, enemy1Y, 40);
    
    fill(125, 10, 125);
    circle(enemy2X, enemy2Y, 25);

     //Creates a random speed for enemy 2
     enemy2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     enemy2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //Enemy1's speed
    enemy1X += enemy1XSpeed;
    enemy1Y += enemy1YSpeed;

    //Checks for the 1st enemy to go out of bounds
    if(enemy1X > width)
    {
        enemy1X = 0;
    }
    if(enemy1X < 0)
    {
        enemy1X = width;
    }
    if(enemy1Y > height)
    {
        enemy1Y = 0;
    }
    if(enemy1Y < 0)
    {
        enemy1Y = height;
    }

    //This controls the 2nd enemy's speed
    enemy2X -= enemy2XSpeed;
    enemy2Y -= enemy2YSpeed;

    //This checks for the 2nd enemy to go out of bounds
    if(enemy2X > width)
    {
        enemy2X = 0;
    }
    if(enemy2X < 0)
    {
        enemy2X = width;
    }
    if(enemy2Y > height)
    {
        enemy2Y = 0;
    }
    if(enemy2Y < 0)
    {
        enemy2Y = height;
    }

    //Runs a check to see if the player character has left the exit at the proper x and y coordinates.
    if(characterX > width && characterY > width-100)
    {
        fill(0);
        stroke(5);
        textSize(50);
        text("You Win!", width/2-50, height/2-50);
    }

    //Creates 1st shape at the location of a mouse click
    fill(150,75,0);
    rect(mouseObstacle1X, mouseObstacle1Y, 50, 100);

    //Creates 2nd shape if first shape is already made at location of a mouse click
    rect(mouseObstacle2X, mouseObstacle2Y, 100, 100);
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
