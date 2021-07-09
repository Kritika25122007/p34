class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution:0.8,
             friction: 1,
             density: 0.04
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        //if (this.body.speed < 3) {
             translate(pos.x, pos.y);
             rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke("red")
            fill("pink");
            rect(0, 0, this.width, this.height);
             pop();
            //stroke(border);
           
            
           
        //} else {
           /* push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 1;
            tint(255, this.visibility);
            pop();
        }*/
    }
}