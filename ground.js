class Ground{
    constructor(x, y, w, h){
        let options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
    }
    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke("cyan");
        fill("red");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}