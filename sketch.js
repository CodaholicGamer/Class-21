const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground, leftwall, rightwall, topwall;
var ball;
var btn1, btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground = new Ground(200 ,390, 400, 20);
  leftwall = new Ground(10, 200, 20, 400);
  rightwall = new Ground(390, 200, 20, 400);
  topwall = new Ground(200, 10, 400 ,20);

  var ball_options = {
    restitution:0.50,
    FrictionAir:1
  }
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  btn1 = createImg("right.png");
  btn1.position(220, 30);
  btn1.size(50, 50);
  btn1.mouseClicked(hForce);

  btn2 = createImg("up.png");
  btn2.position(20, 30); 
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  leftwall.show();
  rightwall.show();
  topwall.show();

  ellipse(ball.position.x, ball.position.y, 20);
}

function hForce() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
}

function vForce() {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});
}