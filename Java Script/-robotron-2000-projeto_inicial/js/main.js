const robotron = document.querySelector("#Robotron");

robotron.addEventListener("click", dizOi); //adiciona um evento (clique) - addEventListener

function dizOi (nome) {
    console.log("oi" + nome);
    console.log("Bem vindo ao Robotron 2000")
} 
dizOi("Pedro")