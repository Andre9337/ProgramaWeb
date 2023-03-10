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
    console.log("Key is "+e.key)
    let key =e.key
    switch(key){
        case "a":
            keys.a.pressed = true
            player.lastkeypressed = key
            break
        case "d":
            keys.d.pressed = true
            player.lastkeypressed = key
            break
        case "w":
            keys.w.pressed=true
            break 
    }
})
window.addEventListener("keyup", e =>{
    console.log("Key is "+e.key)
    let key =e.key
    switch(key){
        case "a":
            keys.a.pressed = false
            break
        case "d":
            keys.d.pressed = false
            break
        case "w":
            keys.w.pressed=false
            break 
            
    }
})
function handleControls(){
    movement()
    function movement(){
        player.velocity.x = 0
        
        if(keys.a.pressed&&["a","ArrowLeft"].includes(player.lastkeypressed)){
            player.velocity.x = -1.5
        }
        if(keys.d.pressed&&["d","ArrowRight"].includes(player.lastkeypressed)){
            player.velocity.x = 1.5
        }
        if(keys.w.pressed&&player.isground){
            player.velocity.y = -7
        }
    }
}