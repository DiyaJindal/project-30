const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, ball1, ground, ground1, ground2, slingshot1;
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
	world = engine.world;
ball1= new ball(200, 460, 6, 30);
ground = new Ground(500, 590, 1000, 20);
ground1 = new Ground (550, 490, 200, 20)
ground2 = new Ground (830, 390, 200, 20)
block8= new blocks(490, 465)
block7= new blocks(520, 465)
block6= new blocks(550, 465)
block5= new blocks(580, 465)
block4= new blocks(610, 465)

block3 = new blocks(520, 420)
block2 = new blocks(550, 420)
block1 = new blocks(580, 420)
block9 = new blocks(550, 380)

block18= new blocks(770, 355)
block17= new blocks(800, 355)
block16= new blocks(830, 355)
block15= new blocks(860, 355)
block14= new blocks(890, 355)

block13 = new blocks(800, 310)
block12 = new blocks(830, 310)
block11 = new blocks(860, 310)
block19 = new blocks(830, 270)

slingshot1 = new slingshot(ball1.body,{x:200, y:460});

	//Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  strokeWeight(4);

ball1.display();
ground.display();
ground1.display();
ground2.display();
block8.display();
block7.display();
block6.display();
block5.display();
block4.display();
block3.display();
block2.display();
block1.display();
block9.display();
slingshot1.display();
block18.display();
block17.display();
block16.display();
block15.display();
block14.display();
block13.display();
block12.display();
block11.display();
block19.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}
function keyPressed()
{
if (keyCode === 32)
{
  slingshot1.attach(ball1.body)
}
}