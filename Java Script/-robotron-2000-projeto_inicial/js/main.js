const subtrair = document.querySelector("#subtrair");
const somar= document.querySelector("#somar");
const braco= document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento)=> {
    console.log(elemento)
})

somar.addEventListener("click", ()=> {manipulaDados("somar")});

subtrair.addEventListener("click",()=> {manipulaDados("subtrair")});

function manipulaDados(operacao) {
    if(operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
};

/*
parseInt transforma uma string numerica em numero inteiro, não converte expressões com casos decimais ouu que não são realmente numeros

Aqui os eventos click - soma - subtrair - Vão avisar a função MANIPULADADOS o que ela deve realizar, somar ou diminuir em 1 ao ser clicado.

FOREACH - O forEach() é muito simples de ser utilizado, toda vez ele é usado temos um elemento e um índice. O elemento é aquilo que foi clicado e o índice é o indíce do array. Então controle.forEach() faz algo.
*/