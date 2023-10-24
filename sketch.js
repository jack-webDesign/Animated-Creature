
let x = 185;
let y = 143;
let goLeft = false;
function setup() {
  createCanvas(400, 400);
}
//
function draw() {
  //head
  background(66, 135, 105);
  stroke(0)
  rect(310, 300, 30, 105, 0)
    rect(55, 300, 30, 105, 0)
  rect(235, 300, 20, 105, 0)
   rect(150, 300, 20, 105, 0)
  ellipse(80,290,70,30,20,)
  ellipse(315,290,70,30,20,)
   rect(310, 160, 30, 65, 0)
     rect(60, 160, 30, 65, 0)
 
  

  ellipse(200, 200, 250, 300);
  
  fill(12,30,266);
  rect(115, 150, 40, 75, 50)
  rect(250, 150, 40, 75, 50)
  
  fill(40,16,150)
  rect(167, 130, 70, 25, 50)

   rect(167, 280, 70, 45, 50)
    noStroke()
   rect(70, 50, 40, 95, 50)
  
    
  rect(290, 50, 40, 95, 50)
   let c = color(300, 50, 50);
fill(c)
      
   rect(290, 50, 90, 35, 50)
   rect(20, 50, 90, 35, 50)
    rect(350, 20, 30, 65, 50)
      rect(20, 20, 30, 65, 50)
  stroke(0)
  triangle(190,315,185,280,195,280)
   triangle(215,315,210,280,220,280)
  ellipse(x,y,30,25)
  
  if(goLeft == false){
    x= x+0.2;
  }
  if(goLeft == true){
    x=x-0.2;
  }
  if(x>220)
  {
    goLeft= true;
  }
   if(goLeft == true){
    x= x- 0.02;
  }
  if(x<185)
  {
    goLeft= false;
  }
 }


 