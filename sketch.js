
var monkey , monkey_running,food;
   var FoodGroup, obstacleGroup
var survivelTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400),

    monkey=createSprite(50,260,20,50);
    monkey.addAnimation("running",monkey_running)
    monkey.scale=0.1;
    
    ground=createSprite(300,300,600,20)
    
  obstaclesGroup=new Group();
  FoodGroup=new Group();
  
}


function draw() {
 background(180);
  
  if(keyDown("space")){
      monkey.velocityY=-10;
      
    }
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  obstacles();
  spawnFood();
  
  stroke("black")
  textSize=20
  fill("black")
  survivelTime=Math.ceil(frameCount/frameRate())
  text("survivel time :"+survivelTime,100,15)
  
     
  
   drawSprites();
}

function obstacles(){
  
  if (frameCount % 80 === 0){
   var obstacle = createSprite(400,270,10,40);
   obstacle.velocityX = -6;
  
  var rand = Math.round(random(1,6));
  obstacle.addImage(obstacleImage);
  
   obstacle.scale = 0.1;
    obstacle.lifetime = 300;
  obstaclesGroup.add(obstacle);
  }
}

function spawnFood(){
  
   if (frameCount % 60 === 0){
     
   food=createSprite(600,100,40,10) 
     
    food.y = Math.round(random(35,70));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    food.LifeTime= 130;
     FoodGroup.add(food);
     
     
     
     
     
     
   }
  
  
  
  
  
  
  
  
}

