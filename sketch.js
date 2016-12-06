function setup() {
  createCanvas(600,600)
  angleMode(DEGREES)
}

function draw() {
  background(20)
  translate(width/2,height/2)
  
  noStroke();
  
  noStroke();
  fill(255,50);
  ellipse(0,0,500);
  
 
  stroke(0)
  for(var i = 1; i <= 12; i++) {
  push();
  rotate(i * 30);
  line(220,0,230,0);
  pop();
  }
  
  
  fill(0)
  ellipse(0,0,20)
  

 
 
  drawHandle(minute(),60,3,150,[0])
  
   
  drawHandle(second(),60,1,200,[0])
  
  
 
  if(hour()>12){
    var hour12 = hour()-12
  }else{
    var hour12 = hour()
  }
  drawHandle(hour12,12,5,90,[0])
  
}

function drawHandle(handlevalue,handlerange,handleweight,handleradius,handlecol){
  var angle = map(handlevalue,0,handlerange,-90,270)
  stroke(handlecol)
  strokeWeight(handleweight)
  line(0,0,handleradius*cos(angle),handleradius*sin(angle))
  
}