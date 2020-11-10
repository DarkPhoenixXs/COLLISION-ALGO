var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(500,300,50,40);
  fixedRect = createSprite(100,200,100,80);

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  movingRect.debug = true;
  fixedRect.debug = true;
  console.log("haiiiiii");
}

function draw() {
  background("black");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}