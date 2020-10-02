class Rope {
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: offsetX, y: offsetY},
            stiffness: 1,
            length: 200
        }
        this.pointB = body2.position;
        this.pointA = body1.position;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        push();
        strokeWeight(5);
        line(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y);
        pop();
    }
    
}