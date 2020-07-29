class ball
{
constructor(x, y, sides, radius)
{
var options =
{
density:1,
restitution:1
}
this.body=Bodies.polygon(x, y, sides, radius, [options])
this.sides = sides
this.radius = radius
World.add(world, this.body);
    }
    display()
    {
    var pos =this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height)

    
}
}
