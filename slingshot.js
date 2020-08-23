class Slingshot {
    constructor(bodyA,pointB){
var option ={
    bodyA:bodyA,
    pointB:pointB,
    stiffnes:0.4,
    length:20
}

this.sling=Matter.Constraint.create(option);
this.pointB=pointB
World.add(world,this.sling);
    }
    display(){
        
        var pA=this.sling.bodyA.position;
        push()
        strokeWeight(4);
line(pA.x,pA.y,this.pointB.x,this.pointB.y);
pop()
    }


}