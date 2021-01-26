class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    //    image(sling1,200,20)
      //  image(sling2,173,20)
     
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
stroke(51,22,8)
            
            strokeWeight(7);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+30, pointB.y-2);
            
            image(sling3,pointA.x-30,pointA.y-10,15,30)
            }
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-2);
                image(sling3,pointA.x+20,pointA.y-10,15,30)

            }
        }
    }
    
}