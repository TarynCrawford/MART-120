var startButton;
var player;
var enemies = [];
var dots = [];
var lives;
var score;
var enemy;
var playerLeft;
var playerRight;
var heart;
var gameStarted;
var background;
var bg;

function preload()
{
  // load background image
  bg = loadImage('img/christmasroom.jpg');
  // load in enemy images
  present1 = loadImage('img/present1.png');
  present2 = loadImage('img/present2.png');
  present3 = loadImage('img/present3.png');
  present4 = loadImage('img/present4.png');

  // load in player images
  playerLeft = loadImage('img/Santa2.png');
  playerRight = loadImage('img/Santa.png');

  // load in stocking image
  heart = loadImage('img/stocking.png');
  // load in cookies
  cookie = loadImage('img/cookie.png');
}

function setup()
{
  // set canvas size
  createCanvas(800, 400);
  


  player = new Player();

  // default lives and score values
  lives = 3;
  score = 0;

  // create clear button
  startButton = createButton('Start Game');
  startButton.position(375, 200);
  startButton.mousePressed(startGame);

  // set gameStarted equal to false
  gameStarted = false;

}

function draw()
{
  imageMode(CORNER);
  background(bg);

  if(gameStarted = true)
  {

    // hide start button
    startButton.hide();

    // display score
    fill(0);
    noStroke();
    textSize(24);
    text("Score: " + score, 30, 50);

    // display number of lives
    switch(lives)
    {
      case 3:
        image(heart, 650, 30, 50, 50);
        image(heart, 690, 30, 50, 50);
        image(heart, 730, 30, 50, 50);
      break;
      case 2:
        image(heart, 690, 30, 50, 50);
        image(heart, 730, 30, 50, 50);
      break;
      case 1:
        image(heart, 730, 30, 50, 50);
      break;
    }

    // display player
    player.display();

    // random enemy hatching
    var enemyHatch = Math.ceil(random(30));
    if(enemyHatch == 1)
    {
      enemies.push(new Enemy());
    }

    // random cookie hatching
    var dotHatch = Math.ceil(random(30));
    if(dotHatch == 1)
    {
      dots.push(new Dot());
    }

    // loop through each enemy
    for (var i=0; i<enemies.length; i++)
    {
      // display enemy
      enemies[i].display();

      // check if enemy reaches bottom of the screen
      if(enemies[i].ypos > 500)
      {
        // remove enemy
        enemies.splice(i, 1);

      } else {

        // check if player is touching enemy
        var d1 = dist(enemies[i].xpos, enemies[i].ypos, player.xpos, player.ypos);
        if(d1 < 50)
        {
          // remove enemy
          enemies.splice(i, 1);

          // decrease lives by one
          lives --;

        }
      }
    }

    // loop through each cookie
    for (var j=0; j<dots.length; j++)
    {
      // display cookie
      dots[j].display();

      // check if cookie reaches bottom of screen
      if(dots[j].ypos > 500)
      {
        // remove cookie
        dots.splice(j, 1);

      } else {

        // check if player is touching cookie
        var d2 = dist(dots[j].xpos, dots[j].ypos, player.xpos, player.ypos);
        if(d2 < 25)
        {
          // remove cookie
          dots.splice(j, 1);

          // increase score by one
          score++;

        }
      }
    }

    // check for game over
    if(lives <= 0)
    {
      // reset lives and score
      lives = 3;
      score = 0;

      // reset player's position
      player.xpos = 400;
      player.direction = "stopped";

      // remove enemies and cookies
      enemies = [];
      dots = [];


      // set gameStarted to false
      gameStarted = false;
    }

  } else {

    // show start button
    startButton.show();

  }
}

function startGame()
{
  // change gameStarted variable
  gameStarted = true;

}

function keyPressed()
{
  // if the right arrow was pressed
  if(keyCode == RIGHT_ARROW)
  {
    // change player's direction property
    player.direction = 'right';
  }

  // if the left arrow was pressed
  if(keyCode == LEFT_ARROW)
  {
    // change player's direction property
    player.direction = 'left';
  }
}

///////////////////////////////////////////
// Player CLASS
///////////////////////////////////////////

function Player()
{
  // set default properties
  this.xpos = 400;
  this.ypos = 350;
  this.speed = 4;
  this.direction = "stopped";
}

Player.prototype.display = function()
{
  imageMode(CENTER);

  // if player is facing right
  if(this.direction == 'right')
  {
    image(playerRight, this.xpos, this.ypos, 75, 75);
    // move player to the right
    this.xpos = this.xpos + this.speed;
  }

  // if player is facing left
  if(this.direction == 'left')
  {
    image(playerLeft, this.xpos, this.ypos, 75, 75);
    // move player to the left
    this.xpos = this.xpos - this.speed;
  }

  // if player is just starting out and hasn't started moving yet
  if(this.direction == 'stopped')
  {
    image(playerLeft, this.xpos, this.ypos, 75, 75);
  }

  // wrap player if player reaches the edge of the screen
  if(this.xpos > 800)
  {
    this.xpos = 0;
  }
  if(this.xpos < 0)
  {
    this.xpos = width;
  }
}

///////////////////////////////////////////
// ENEMY CLASS
///////////////////////////////////////////

function Enemy()
{
  // set default properties
  this.xpos = random(0, width);
  this.ypos = 0;
  this.speed = random(1, 4);
  this.type = Math.ceil(random(4));
}

Enemy.prototype.display = function()
{
  imageMode(CENTER);

  // show different color enemy based on it's random 'type' value
  switch(this.type)
  {
    case 1: image(present1, this.xpos, this.ypos, 50, 50); break;
    case 2: image(present2, this.xpos, this.ypos, 50, 50); break;
    case 3: image(present3, this.xpos, this.ypos, 50, 50); break;
    case 4: image(present4, this.xpos, this.ypos, 50, 50); break;
  }
  this.ypos = this.ypos + this.speed;
}

///////////////////////////////////////////
// DOT CLASS
///////////////////////////////////////////

function Dot()
{
  // set default properties
  this.xpos = random(0, 600);
  this.ypos = 0;
  this.speed = random(1, 4);
}

Dot.prototype.display = function()
{
  imageMode(CENTER);
  image(cookie, this.xpos, this.ypos, 40, 40);
  this.ypos = this.ypos + this.speed;
}
