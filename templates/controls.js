const keys={
    a:{
        pressed:false
    },
    w:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    },
    space:{
        pressed:false
    }
}
window.addEventListener("keydown", e =>{
    let key =e.key
    switch(key){
        case "a":
            player.velocity.x +=10
            break
        case "d":
            player.velocity.x -=10
            break
    }
})