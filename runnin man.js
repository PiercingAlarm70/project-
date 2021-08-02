var pathImg
var runnerImg1
var runnerImg2
var powerImg
var bombImg
var coinImg
var energyDrinkImg

function preload(){
  //pre-load images
 pathImg.addImage (path.png)
runnerImg1.addImage(Runner1.png)
runnerImg2.addImage (Runner2.png)
powerImg.addImage(power.png)
bombImg.addImage(bomb.png)
coinImg.addImage(coin.png)
energyDrinkImg.addImage(energyDrink.png)
}

function setup(){
  createCanvas(400,400);
  //create sprites here
createSprite(path.png)
createSprite(runnerImg1)
createSprite(runnerImg2)
createSprite(powerImg)
createSprite(bombImg)
createSprite(coinImg)
createSprite(energyDrinkImg)
}

function draw() {
  background(400,20);
  path = createSprite(200,200)
  path.velocityY = 4;
  path.scale =1.2;
if (path.y > 400 ){
  path.y = height/2;
}
runnerImg2.velocityX = MouseEvent = moveBy (MouseEvent,0) 
runnerImg1.velocityX = MouseEvent = moveBy (MouseEvent,0)
}
