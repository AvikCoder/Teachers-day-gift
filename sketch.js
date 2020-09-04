const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "start"

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  paper1 = new Paper(800,300,400,500)
  paper2 = new Rectangle(595,300,400,500);
  paper3 = new Page2(1005,300,400,500);
  com = new Common(800,300,840,520);
  var line = createSprite(800,300,5,520)


  Engine.run(engine);
}



function draw() {
  background(255);
  textSize(20)
  stroke(0)
  text("Made By Your Student :-",100,200);
  textFont("mono")
  text("AVIK",100,230)
  if (gameState ==="start"){
    fill("red")
    noStroke();
    beginShape();
    vertex(600,50);
    vertex(1020,520);
    vertex(1020,20);
    vertex(800,30);
    vertex(700,35);
    vertex(600,40);
    vertex(600,550);
    vertex(800,540);
    vertex(900,535);
    vertex(1000,530);
    vertex(1020,520);
    endShape(CLOSE);
    fill(0,255,250)
    paper1.display();
}

if(gameState === "end"){
  fill("red")
  com.display();
  paper2.display();
  paper3.display();
  line.shapeColor = "black"
  drawSprites();
}
}

function mouseDragged(){
  paper1.clicked();
}