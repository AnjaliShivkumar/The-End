//player and player anims
var player, playerimg1, playerimg2, playerimg3;
//ground
var ground, groundimg;
//bg img
var bgimg;
//enemy group
var enemyGroup;
//coin group
var coinGroup
//game state 
var gameState = "Playing";
//goomba animation
var goombaanim;
//var for score
var score = 0;

//preload for images
function preload()
{
  //loading all the frames for the playeranim
  playerimg1 = loadImage("Images/sprite_0.png");
  playerimg2 = loadImage("Images/sprite_1.png");
  playerimg3 = loadImage("Images/sprite_2.png");

  //for the ground
  groundimg = loadImage("Images/ground (1).png")

  //for the background
  bgimg = loadImage("Images/Background.jpg")

  //image for goomba
  goombaanim = loadAnimation("Images/goomba_0.png", "Images/goomba_1.png")
}

function setup() 
{
  //creates canvas
  createCanvas(1200,400);

  //creates player
  player = createSprite(600, 200);
  player.addAnimation("run", playerimg1, playerimg2, playerimg3);
  player.scale = 1.5;

  //creates ground
  ground = createSprite(-displayWidth, 400, displayWidth * 999999999999, 40);
  ground.shapeColor = "brown";

  //defines coingroup and enemygroup
  coinGroup = createGroup();
  enemyGroup = createGroup();
}


function draw() 
{
  //background
  background(bgimg);  

  //displays our score
  textSize(20);
  text("Score: " + score, camera.position.x - 550, camera.position.y - 150)

  if(gameState === "Playing")
  {
    //camera movement to follow the player
    camera.position.x = player.x;

    player.velocityX = 5;

    //allows player to jump
    if(keyDown("Space") && player.y > 300)
    {
      player.velocityY = -12;
    }

    //checks if our player is touching goomba and if so we kill our player
    if(player.isTouching(enemyGroup))
    {
      gameState = "Dead";
    }

    //checks if player is touching player and if so we add 1 to score
    if(player.isTouching(coinGroup))
    {
      coinGroup.destroyEach();
      score++;
    }
    
    //gravity
    player.velocityY = player.velocityY + 0.8;

    //lets player collide with ground
    player.collide(ground)

    //this calls our custom functions
    spawnGoomba();
    spawnCoins();
  }
  else if(gameState === "Dead")
  {
    player.setVelocity(0,0);
    text("YOU LOSE!",camera.position.x, camera.position.y);
  }

  //draws sprites
  drawSprites();
}
