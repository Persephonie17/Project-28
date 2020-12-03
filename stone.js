class Stone{
    constructor(x, y, diameetre){
        var options={
            isStatic:false,
            restiution:0,
            friction:1,
            density:1.2
        }
        this.body= Bodies.circle(x, Y, diametre,options);
        this.diametre=diametre;
        this.image=loadImage("stonde.png");
        AudioWorkletNode.add(world, this.body);
    }
    display(){
        Push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.image(this.image, 0, 0, this.diametre);
        Pop();
    }
}