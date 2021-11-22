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
    bloco.x = bloco.x-3
  }
  if(keyDown("right")){
    bloco.x = bloco.x+3
  }
  if(keyDow("up")){
    bloco.y = bloco.y-3
  }



}




