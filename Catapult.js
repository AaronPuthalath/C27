class Catapult{
    constructor(body1, body2){
        this.Rope = Matter.Constraint.create({
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.4,
            length: 50
        });
    World.add(world, this.Rope);    
    }
    display(){
        var point1 = this.Rope.bodyA.position;
        var point2 = this.Rope.bodyB.position;
        line(point1.x, point1.y, point2.x, point2.y);
    }
}