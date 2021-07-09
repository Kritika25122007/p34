class Monster  {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/Monster-01.png");
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y-100);
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    /*if(this.body.speed < 3){
   
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      
     }
    }*/

    
   
  }
  }

