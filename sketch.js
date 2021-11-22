var bloco
function setup() {
  createCanvas(400,400);
  bloco = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyDown("left")){
    background("blue")
    bloco.x = bloco.x-3;
  }
  if(keyDown("right")){
    background("pink")
    bloco.x = bloco.x+3
  }
  if(keyDown("UP_ARROW")){
    background("black")
    bloco.y = bloco.y-3
  }
  if(keyDown("down")){
    background("red")
    bloco.y = bloco.y+3
  }


}




