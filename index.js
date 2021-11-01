let boton = document.getElementById("button_start")
let image = document.getElementById("img");
let frase = document.getElementById("frase");


boton.addEventListener("click", () => {
    let random = Math.round(Math.random());
    console.log(random);
    if(random===1){
        image.src="./assets/Cara.png";
        frase.innerHTML="Heads";
    } 
    else{
        image.src="./assets/Cruz.png";
        frase.innerHTML="Tails";
    }
});