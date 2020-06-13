class BaseClass  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.9,
      'friction':0.5,
      'density':0.3
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  }

  display(){
   var pos1 = this.body.position;
  push();
  rectMode(CENTER);
  rect(pos1.x, pos1.y, this.width, this.height);
  pop();

  }

};
