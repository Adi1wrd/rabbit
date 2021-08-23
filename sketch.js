var garden, rabbit;
var gardenImg, rabbitImg;
var redImage, leaf, leafimage , oleaf
var apple, appleimage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  rleafimage = loadImage("redimage.png")
  leafimage = loadImage("leaf.png")
  oleafimage = loadImage("orangeLeaf.png")
  appleimage = loadImage("apple.png")
}

function setup(){
  edges= createEdgeSprites();
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;
}


function draw() {
  background(0);
  rabbit.x = mouseX
  rabbit.collide(edges);
  var a = Math.round(random(1,3));
  if(frameCount% 60 === 0){
    if(a===1) {
      spawnleaf(); 
    }
    else if(a===2) {
      spawnapple();
    }
    else if(a===3) {
      spawnoleaf();
    }
  }
  drawSprites();
} 

function  spawnleaf() { 
  leaf=createSprite(200, 0, 20, 10)
  leaf.velocityY=5
  leaf.addImage(leafimage)
  leaf.x=Math.round(random(5,395))
  leaf.scale=0.1
  }
function spawnapple() {
apple=createSprite(200, 0, 20, 10)
apple.velocityY=5
apple.addImage(appleimage)
apple.x=Math.round(random(35,395))
apple.scale=0.01
}
function spawnoleaf() {
  oleaf=createSprite(200, 0, 20, 10)
  oleaf.velocityY=5
  oleaf.addImage(oleafimage)
  oleaf.x=Math.round(random(15,396))
  oleaf.scale=0.1
}

