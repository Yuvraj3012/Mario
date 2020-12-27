var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mario, mario_running, mario_collided;
var ground, invisibleGround, groundImage;

var bricksGroup, brickImage;
var obstaclesGroup1, obstacle1, obstacle2,obstaclesGroup2;

var score=0;

var gameOver,obgroup2,restart;


function preload(){
  //mario_running =   loadAnimation("m1.png","m2.png","m3.png")
  mario_running =   loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");
  mario_collided = loadAnimation("collided.png");
  
  groundImage =loadImage("ground2.png")
brickImage=loadImage("brick.png")
  obstacle1img =loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png")
  obstacle2img =loadAnimation("g1.png","g2.png","g3.png")
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
  
  bg=loadImage("bg.png")
}



function setup(){
  createCanvas(windowWidth,windowHeight)

  mario = createSprite(150,windowHeight-150,50,50);
  mario.addAnimation("running",mario_running);
  mario.addAnimation("collided", mario_collided);
  mario.scale = 2;
 

  ground = createSprite(windowWidth/2,windowHeight-56.5,windowWidth*10,80);
  //ground.addAnimation("ground",groundImage);
  ground.addImage("ground",groundImage);
  ground.scale=2.25
  ground.scale.width=10
  ground.x = ground.width ;
 ground.velocityX = -12
  
invisibleGround= createSprite(windowWidth/2,windowHeight-67,windowWidth*10,80);
 invisibleGround.visible= false
ground.visible=true
  gameOver = createSprite(windowWidth/2,windowHeight/2-50);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(windowWidth/2,windowHeight/2);
  restart.addImage(restartImg);

  bricksGroup = new Group();
  obstaclesGroup1 = new Group();
  obstaclesGroup2 = new Group();
}



function draw(){
background(bg)

ground.velocityX = -12;
if (ground.x <=(ground.width-50))
  ground.x = ground.width*2;

//console.log(mario.y)
  if( keyDown("up_Arrow")&& mario.y >= height-150)  {
    mario.velocityY = -12;
  }
 mario.velocityY = mario.velocityY + 0.8

mario.collide(invisibleGround);

  spawnObstacles2()
  if (obstaclesGroup1.isTouching(mario)){

     
    //gameState = END
    
  //  }
  }
  


  var rand= Math.round(random(1,2))
  switch(rand){
case 1 :spawnObstacles1();
break;

case 2 :spawnObstacles2();
break;

default: break;

  }

  drawSprites()
}

function spawnObstacles1() {
  if(frameCount % 120 === 0) {
  
obstacle1 = createSprite(width-20,(height-height/4.9),10,40)
obstacle1.addAnimation("running",obstacle1img)
obstacle1.velocityX = -6;
obstacle1.scale= 1.5;
//obstacle.lifetime = 300;
  
obstaclesGroup1.add(obstacle1) 
  
  }
}

function spawnObstacles2() {
  if(frameCount % 120 === 0) {
  
obstacle2 = createSprite(width-50,height-height/7,10,40)
obstacle2.addAnimation("obstacle2",obstacle2img)
obstacle2.velocityX = -6;
obstacle2.scale=0.5;
//obstacle.lifetime = 300;
  
obstaclesGroup2.add(obstacle2) 
  
  }
}
