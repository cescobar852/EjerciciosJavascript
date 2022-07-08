// Revision de que la pagina conecta Ok
// console.log("app.js conectada");

// Inicio de codigo para el color picker, primer articulo del blog

const inputColor = document.getElementById("inputColor");
const boton = document.getElementById("boton");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);

boton.addEventListener("click", () => {
    console.log(inputColor.value);
    textoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
});

// Fin de codigo para el color picker





