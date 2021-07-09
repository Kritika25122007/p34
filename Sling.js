class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 500
        };
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display() {
        if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(48,32.8);
            strokeWeight(3);

            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            pop();
        }
    }
    
    
}
