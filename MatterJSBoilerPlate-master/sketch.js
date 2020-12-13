
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var dustbin2;
var dustbin3;
var ground;
var paperball;
function preload()
{
	
}

function setup() {
	createCanvas(1100,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(700,320,10,150);
	dustbin2 = new Dustbin(920,320,10,150);
	dustbin3 = new Dustbin(810,360,220,10);
	ground = new Ground(550,380,1100,10);
	paperball = new Paperball(50, 100);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	paperball.display();

	keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:2.5,y:-5});
	}
}

