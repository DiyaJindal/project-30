class blocks {
    constructor(x,y,width,height) {
      var options = {
          friction:10
      }
      this.body = Bodies.rectangle(x,y,25,35,options);
      this.width = 30;
      this.height = 40;
      this.visibility= 10000;
      World.add(world, this.body);
    }
    display(){
     
      if (this.body.speed<4)
      {
       var pos =this.body.position;
       rectMode(CENTER);
       fill("pink");
       rect(pos.x, pos.y, 30, 40)
      }
      else 
      {
          World.remove(world, this.body)
          push();
          this.visibility=this.visibility-5
          tint(225, this.visibility)
          rect(this.body.x, this.body.y, 30, 40)
      }
    }
  };