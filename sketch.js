
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var groundObj;
var paperObj;
var binObj;

function setup() {
createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  paperObj = new Paper(200,450,70);
  groundObj = new Ground(width/2,670,width,20);
  binObj = new Dustbin(1200,430);
  
	//var render = Render.create({
	//  element: document.body,
	//  engine: engine,
	//  options: {
	//  width: 1300,
	//  height: 500,
	//  wireframes: false
  //}
 //})

	Engine.run(engine);
	//Render.run(render);
	
}

function draw() {
 
 background(230);

 Engine.update(engine);

  groundObj.display();
  paperObj.display();
  binObj.display();

}
 
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObj.body, paperObj.body.position,{x:25,y:-15})
  }
}