class Bob {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.3,
            friction: 0.5, 
            density: 1.2,
        }

        this.paper = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.paper);
    }

    display() {
        push();
        ellipseMode(CENTER);
        fill("red");
        translate(this.paper.position.x, this.paper.position.y);
        ellipse(this.paper.position.x, this.paper.position.y, this.radius);
        pop();
    }
}