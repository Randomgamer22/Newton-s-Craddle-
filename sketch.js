
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(75, 250, 100);
	bobObject2 = new Bob(125, 250, 100);
	bobObject3 = new Bob(175, 250, 100);
	bobObject4 = new Bob(225, 250, 100);
	bobObject5 = new Bob(275, 250, 100);

	roof = new Roof(350, 50, 500);

	rope2 = new Rope(bobObject2.paper, roof.body, -bobObject1.paper.radius*2, 0);
	rope1 = new Rope(bobObject1.paper, roof.body, -bobObject2.paper.radius*2, 0);
	rope3 = new Rope(bobObject3.paper, roof.body, -bobObject3.paper.radius*2, 0);
	rope4 = new Rope(bobObject4.paper, roof.body, -bobObject4.paper.radius*2, 0);
	rope5 = new Rope(bobObject5.paper, roof.body, -bobObject5.paper.radius*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



