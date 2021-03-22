var hr, mn, sc;
var hrangle, mnangle, scangle;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(200, 200)
  rotate(-90)
  hr = hour()
  mn = minute()
  sc = second()
  scangle = map(sc, 0, 60, 0, 360)
  mnangle = map(mn, 0, 60, 0, 360)
  hrangle = map(hr%12, 0, 12, 0, 360)
  push()
  rotate(scangle)
  stroke("blue")
  strokeWeight(4)
  line(0,0,100,0)
  pop()

  push()
    rotate(mnangle)
    stroke("red")
    strokeWeight(6)
    line(0,0,75,0)
  pop()

  push()
    rotate(hrangle)
    stroke("green")
    strokeWeight(9)
    line(0,0, 50,0)
  pop()

  stroke(255, 0, 255)

  point(0, 0)

  strokeWeight(10)

  noFill()
    stroke("blue")
    arc(0,0,300,300,0, scangle)
  
    stroke("red")
    arc(0,0,280,280,0, mnangle)

    stroke("green")
    arc(0,0,260,260,0, hrangle)

  drawSprites();
}