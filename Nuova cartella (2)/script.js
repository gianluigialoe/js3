 function rimuoviiltask(){
    const sceltaRimozione= document.getElementById("lista task")
    sceltaRimozione.remove(sceltaRimozione.ariaSelected)
 }

function invioo (){
    const colorare =document.getElementById("lista task")
    colorare.onclick (colorare.style.color="red")
}