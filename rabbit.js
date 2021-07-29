var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(){
 var apple
 var appleImg
  apple = createSprite(random(50,350),40,10,10)
 apple.scale = 0.09
apple.addImage(appleImg)

}
function preload(){
  appleImg = loadImage (apple.png)
}
rabbit = mouseX.position 