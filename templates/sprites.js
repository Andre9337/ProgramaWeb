const gravity =0.15;
class Sprite{
    constructor({ position, velocity, dimensions}){
        this.position=position
        this.velocity=velocity 
        this.width= dimensions.width
        this.height= dimensions.height
    }
    draw(){
        ctx.fillStyle="white";
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){
        if(this.position.y+this.height > canvasHeight){
            this.position.y=canvas.height-this.height
            this.velocity.y=0
            this.isground=true
        }else{
            this.velocity.y += gravity
            this.isground=false
        }
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.draw()
    }
}
class user extends Sprite{
    constructor({
        position,
        velocity,
        dimensions
    }){
        super({
            position,
            velocity,
            dimensions
        })
        this.velocity = velocity
        this.width=dimensions.width
        this.height=dimensions.height
        this.lastkeypressed
        this.isground=true
    }
}
const player= new user({
    position:{
        x:50,
        y:0
    },
    velocity:{
        x:0,
        y:0
    },
    dimensions:{
        width:50,
        height:150
    }
})
const player2= new Sprite({
    position:{
        x:250,
        y:50
    },
    velocity:{
        x:0,
        y:0
    },
    dimensions:{
        width:25,
        height:100
    }
})