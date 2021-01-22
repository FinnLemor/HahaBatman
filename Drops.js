class createDrops{
    constructor(x, y, radius){
        var options = { 
            'restitution':1,
            'friction':1
          }
          this.body = Bodies.circle(x, y, 10, options);
          this.radius = 10;

    }
   
  
    display(){
      var pos =this.body.position;
      var radius = this.body.radius;
      ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}