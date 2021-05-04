var boundary1,boundary2,boundary3,boundary4;
var p1,p2,p3,p4,a1,a2,a3,a4,c1,c2,c3;
var hyphen;
var m1,m2,m3,m4,A1,A2,A3,A4,n1,n2,n3;

function setup() {
  createCanvas(1100,500);
  
  boundary1 = createSprite(550,40,1000,20);
  boundary1.shapeColor = "red";
  boundary2 = createSprite(550,445,1000,20);
  boundary2.shapeColor = "red";
  boundary3 = createSprite(60,250,20,400);
  boundary3.shapeColor = "red";
  boundary4 = createSprite(1040,250,20,400);
  boundary4.shapeColor = "red";
  //letter P
  p1 = createSprite(120,240,10,100);
  p1.shapeColor = "lightblue";
  p2 = createSprite(155,195,60,10);
  p2.shapeColor = "lightblue";
  p3 = createSprite(180,225,10,60);
  p3.shapeColor = "lightblue";
  p4 = createSprite(145,250,60,10);
  p4.shapeColor = "lightblue";
  //letter A 
  a1 = createSprite(230,240,10,100);
  a1.shapeColor = "lightblue";
  a2 = createSprite(255,195,60,10);
  a2.shapeColor = "lightblue";
  a3 = createSprite(285,240,10,100);
  a3.shapeColor = "lightblue";
  a4 = createSprite(255,245,60,10);
  a4.shapeColor = "lightblue";
  //letter C
  c1 = createSprite(330,240,10,100);
  c1.shapeColor = "lightblue";
  c2 = createSprite(365,195,60,10);
  c2.shapeColor = "lightblue";
  c3 = createSprite(365,285,60,10);
  c3.shapeColor = "lightblue";
  //-
  hyphen = createSprite(520,240,70,10);
  hyphen.shapeColor = "lightblue";
  //letter M
  m1 = createSprite(645,235,10,100);
  m1.shapeColor = "lightblue";
  m4 = createSprite(755,235,10,100);
  m4.shapeColor = "lightblue";

  /*fill("lightblue");
  textSize(30);
  text("M",650,240);*/
   
}

function draw() {
  background(0); 

  push();
  translate(width/2,height/2);
  rotate(PI*10.0);
  fill("lightblue");
  m2 = rect(50,-107,70,10);
  pop();
  push();
  translate(width/2,height/2);
  rotate(PI*-10.0);
  fill("lightblue");
  m3 = rect(139,50,70,10);
  pop();

  textSize(20);
  fill(255);
  text(mouseX + "," + mouseY,100,100);

  drawSprites();
}