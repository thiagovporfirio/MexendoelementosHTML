let x = 0
let y = 0

let filho = document.getElementById("Filho")

function mover(event){

    console.log(event.key)

    if (event.key === "d"){
    x = x +5
    filho.style.left = x + "px"
}
    if (event.key === "a"){
        x -= 5
        filho.style.left = x + "px"
    }
    if (event.key === "s"){
        y += 5
        filho.style.top = y + "px"
    }
    if (event.key === "w"){
        y -= 5
        filho.style.top = y + "px"
    }
}