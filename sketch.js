function setup() {
  createCanvas(800 , 800);
  background(255);
}

function draw() {
  //todo: add color and hand tracking
  translate(width/2, height/2);
  let v = p5.Vector.random2D();
  v = v.mult(random(50, 200))
  strokeWeight(4);
  stroke(0, 50);
  line(0, 0, v.x, v.y);

}