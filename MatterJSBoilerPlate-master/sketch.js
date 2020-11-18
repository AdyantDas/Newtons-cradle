
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob=new Bob(300,300,100);



	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  bob.display();
  drawSprites();
 
  
}



