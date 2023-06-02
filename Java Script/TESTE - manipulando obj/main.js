const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {   // o parametro evento serve para mostrar detalhadamente as açoes no console. => Função anonima. 
  resultado.innerHTML = "Fui clicado"             //innerHTML - adiciona um texto na tela
})