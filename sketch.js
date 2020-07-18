var helicopterIMG, helicopterSprite, packageSprite,packageIMG,shapeSprite,shape2Sprite,shape3Sprite;
var packageBody,ground,shape;
var shape;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
    

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	World.add(world,helicopterSprite);

	shapeSprite=createSprite(400,655,200,10, {isStatic:true});
	shapeSprite.shapeColor=color(255,0,0)
	World.add(world,shapeSprite);

	shape2Sprite=createSprite(300,600,10,120);
	shape2Sprite.shapeColor=color(255,0,0)
	World.add(world,shape2Sprite)

	shape3Sprite=createSprite(500,600,10,120);
	shape3Sprite.shapeColor=color(255,0,0)
	World.add(world,shape3Sprite)

	//packageBody.collide(shapeSprite);
	//World.add(world,helicopterSprite);
	
	
	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   
	Matter.Body.setStatic(packageBody,false);
  }
}



