const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;


function preload(){
  bg = loadImage('images/bg.jpg')
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  ground = new Ground(600,380,1200,10)
boggie1 = new Boggie(50,70,50,50)
boggie2 = new Boggie(150,70,50,50)
boggie3 = new Boggie(250,70,50,50)
boggie4 = new Boggie(350,70,50,50)
boggie5 = new Boggie(450,70,50,50)
boggie6 = new Boggie(550,70,50,50)
connect1 = new Chain(boggie1.body,boggie2.body)
connect2 = new Chain(boggie2.body,boggie3.body)
connect3 = new Chain(boggie3.body,boggie4.body)
connect4 = new Chain(boggie4.body,boggie5.body)
connect5 = new Chain(boggie5.body,boggie6.body)
rock = new Rock(1100,350,150,100)





}

function draw() {
  background(bg);  
  Engine.update(myEngine);
boggie1.show()
boggie2.show()
boggie3.show()
boggie4.show()
boggie5.show()
boggie6.show()
connect1.show()
connect2.show()
connect3.show()
connect4.show()
connect5.show()
rock.show()
if (keyDown(RIGHT_ARROW)){
Matter.Body.applyForce(boggie6.body,boggie6.body.position,{x:0.5,y:-0.1})}
if (keyDown(LEFT_ARROW)){
  Matter.Body.applyForce(boggie1.body,boggie1.body.position,{x:-0.5,y:-0.1})
}
var collision1 = Matter.SAT.collides(boggie1.body,rock.body)
var collision6 = Matter.SAT.collides(boggie6.body,rock.body)
if (collision6.collided||collision1.collided)
{
  textSize(35)
  stroke('black')
  fill('blue')
  text('Train crashed',500,80)
} 
}