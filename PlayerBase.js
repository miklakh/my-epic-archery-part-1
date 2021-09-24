class PlayerBase {
    constructor (x, y, width, height){
        var options ={
            isStatic:true
        }; 
    this.image = loadimage("assets/base1.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    World.add(worls,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imagemode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}