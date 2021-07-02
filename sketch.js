var astro,astroImage,astrogroup;
var score;
var gamestate,PLAY,END;
var diamond,diamondimg;
var astroidimg,astroid,astroidgroup;
var moon,moonimg;
var score;
var winImage,gameOverImage;
var win,gameOver;

function preload() {

 bgimg = loadImage("mygamebg(1).jpg");
  astroImage=loadImage("pro8 astro.png");
 diamondimg=loadImage("diamond.png");
 astroidimg=loadImage("astroid.png");
moonimg=loadImage("moonremove.png");
winImage=loadImage("win.png");
gameOverImage=loadImage("game over.png");

}

function setup() {
  
 createCanvas(1350,600);

  bg = createSprite(1500,700);
  bg.addImage("bgimg", bgimg);
  bg.scale =1.2

  invground = createSprite(height / 2, 390, height, 10);
  invground.visible = false;

  astro=createSprite(400,500,50,50);
  astro.addImage(astroImage);
  astro.scale=0.4;
  astro.setCollider("rectangle",-60,0,290,290);
  
  moon=createSprite(1250,100,100,100);
  moon.addImage(moonimg);
  moon.scale=0.5;
  moon.setCollider("rectangle",0,-20,70,70);
 
gamestate=1;
PLAY=1;
END=0;
score=0;

diamondgroup = new Group();
astroidgroup=new Group();
}

function draw() {

  background(220);

  if(diamondgroup.isTouching(astro)){
    score=score+1;
  }

  if (gamestate === PLAY) {
    
    bg.velocityY = -5;

    if (bg.y < 0) {
      bg.y = bg.height / 2;
    }
    if(keyDown(UP_ARROW)){
      astro.y=astro.y-2;
    }
    if(keyDown(DOWN_ARROW)){
      astro.y=astro.y+2;
    }
    if(keyDown(LEFT_ARROW)){
      astro.x=astro.x-2;
    }
    if(keyDown(RIGHT_ARROW)){
      astro.x=astro.x+2;
    }

    if (astroidgroup.isTouching(astro)) {
      gamestate=END;
      }

    if(astro.isTouching(moon)){
      win=createSprite(700,300,10,10);
        win.addImage(winImage);
        win.scale=0.6;
    }
       
      fill("black");
      textSize(70);
      stroke("white");
      strokeWeight(2);
      text("Score:" + score,70,50);

  }

  if (gamestate === END) {
    gameOver=createSprite(700,300,10,10);
    gameOver.addImage(gameOverImage);

    bg.velocityY = 0;

      astroidgroup.velocityY=0;
      diamondgroup.velocityY=0;;
    
      astroidgroup.destroyEach();
      diamondgroup.destroyEach();
    
    diamondgroup.setVelocityYEach(0);
    astroidgroup.setVelocityYEach(0);
  }

diamonds();
diamond();
astroids();
astroid();

 drawSprites();
}

function diamonds() {
  if (frameCount%100===0){
  var diamond = createSprite(1200,Math.round(random(20, 370)), 10, 10);
  diamond.addImage(diamondimg);
  diamond.velocityY = 3;
  diamond.lifetime = 150;
  diamond.scale = 0.1;
  diamondgroup.add(diamond);
  //score=score+1;
  }
}

  function diamond() {
    if (frameCount%100===0){
    var diamond = createSprite(700,Math.round(random(20, 370)), 10, 10);
    diamond.addImage(diamondimg);
    diamond.velocityY = 3;
    diamond.lifetime = 150;
    diamond.scale = 0.1;
    diamondgroup.add(diamond);
    //score=score+1;
 }
}
function astroids() {
  if (frameCount%100===0){
  var astroid = createSprite(1000,Math.round(random(20, 370)), 70, 70);
  astroid.addImage(astroidimg);
  astroid.velocityY = 3;
  astroid.lifetime = 150;
  astroid.scale = 0.7;
  astroidgroup.add(astroid);
  astroid.setCollider("rectangle",50,0,150,150);
  }
}
function astroid() {
  if (frameCount%100===0){
  var astroid = createSprite(1300,Math.round(random(20, 370)), 70, 70);
  astroid.addImage(astroidimg);
  astroid.velocityY = 3;
  astroid.lifetime = 150;
  astroid.scale = 0.5;
  astroidgroup.add(astroid);
  }
}