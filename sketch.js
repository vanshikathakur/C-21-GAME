var fr, mr;

function setup() {
  createCanvas(1200,800);
  fr = createSprite(400, 100, 50, 80);
  fr.shapeColor = "green";
  fr.debug = true;
  mr = createSprite(400, 400, 80, 30);
  mr.shapeColor = "green";
  mr.debug = true;

  mr.velocityY = -5;
  //fr.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(mr,fr);
  //collide1(mr,fr);


  drawSprites();
}
