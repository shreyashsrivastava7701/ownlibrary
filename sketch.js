var fixedRect, movingRect;
var firstSq, secondSq;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  firstSq = createSprite(700, 10, 30, 30);
  firstSq.shapeColor = "yellow";
  firstSq.velocityY = 10;
  
  secondSq = createSprite(700, 500, 30, 30);
  secondSq.shapeColor = "aqua";
  secondSq.velocityY = -10;

  gameObject1 = createSprite(200, 100, 50, 50);
  gameObject1.shapeColor = "white";
  
  gameObject2 = createSprite(700, 100, 50, 50);
  gameObject2.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  //gameObject1.y = mouseY;
  //gameObject1.x = mouseX;

 if (isTouching(gameObject1, gameObject2))
 {
  gameObject2.shapeColor = "yellow";
  gameObject1.shapeColor = "yellow";
 } else {
  gameObject2.shapeColor = "green";
  gameObject1.shapeColor = "green";
 }

 bounceOff(firstSq, secondSq);

  drawSprites();
}

