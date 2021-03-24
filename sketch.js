var path,boy,cash,diamonds,jwellery,sword;

var 
pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;

var treasureCollection = 0;

var cashG,diamondsG,jwelleryG,swordGroup;

var PLAY=1;

var END=0;

var gameState=1;

var over,gameover;

function preload(){
  pathImg = loadImage("Road.png");
 
  boyImg = loadAnimation("runner1.png","runner2.png");
  
  cashImg = loadImage("cash.png");
  
  diamondsImg = loadImage("diamonds.png");
  
  jwelleryImg = loadImage("jwell.png");
  
  swordImg = loadImage("sword.png");
 
  gameover=loadImage("gameOver.png");
  
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
//th.velocityY = 4;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  //creating over design
  over = createSprite(200,200,20,20);
  over.addImage(gameover);
  over.sclale=1;
  
  //creating groups
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
  //dividing in states
if(keyDown("space")){
  gameState=PLAY;
path.velocityY = 4;
}
  if(swordGroup.isTouching(boy)){
gameState=END;
  }
  
  if(gameState===PLAY){
    over.visible=false;
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
     boy.x = World.mouseX;
    
    //making score variables
     if(boy.isTouching(cashG)){
treasureCollection=treasureCollection+40;
     }
    if(boy.isTouching(diamondsG)){
treasureCollection=treasureCollection+50;
     }
   if(boy.isTouching(jwelleryG)){
treasureCollection=treasureCollection+60;
     }
  edges= createEdgeSprites();
  boy.collide(edges);
  }
  //making end state
  else if(gameState===END){
    if(keyDown("space")){
    
  gameState=PLAY;
    
     }

over.visible=true;
  path.velocityY=0;
    cashG.destroyEach();
     diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
    
  }
  
  
  background(0);
 
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
   /* createCash();
    createDiamonds();
    createJwellery();
    createSword();*/

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
    }
  }

  drawSprites();
  textSize(20);
  fill("black");
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}