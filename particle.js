class Particle{
    constructor(x,y){
        var options ={
            restitution: 0.4,
        }
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0, 225), random(0, 225), random(0, 225));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        noStroke();
        fill(this.color);
        ellipse(0, 0, 10, 10);
        pop();
    }
}