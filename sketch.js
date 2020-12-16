var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 50);
 movingrect=createSprite(700,200,30,60);
 movingrect.velocityX=5;
 fixedrect.velocityX=-5;
}

function draw() {
  background("yellow"); 
  //movingrect.x=mouseX;
 // movingrect.y=mouseY;
  
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor="green";
      fixedrect.shapeColor="blue";
    }
    else{
      movingrect.shapeColor="red";
     fixedrect.shapeColor="red";
    }
    if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
      && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
        movingrect.velocityX=movingrect.velocityX*(-1);
        fixedrect.velocityX=fixedrect.velocityX*(-1);
      }
    if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
      && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
        movingrect.velocityY=movingrect.velocityY*(-1);
        fixedrect.velocityY=fixedrect.velocityY*(-1);
      }
  drawSprites();
}
