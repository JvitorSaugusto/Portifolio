const controle = document.querySelectorAll("[data-controle]");

controle.forEach( (elemento)=> {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
};



/*
parseInt transforma uma string numerica em numero inteiro, não converte expressões com casos decimais ouu que não são realmente numeros

Aqui os eventos click - soma - subtrair - Vão avisar a função MANIPULADADOS o que ela deve realizar, somar ou diminuir em 1 ao ser clicado.

FOREACH - O forEach() é muito simples de ser utilizado, toda vez ele é usado temos um elemento e um índice. O elemento é aquilo que foi clicado e o índice é o indíce do array. Então controle.forEach() faz algo.

Evento.target - informa o alvo do evento realizado
------------------------------------ explicação parametro controle no manipulaDados--------------------------------------------
não queremos buscar isos no documento inteiro senão vamos encontrar cinco controle-contador, queremos buscar o controle-contador só do controle, do elemento que foi clicado. Para isso, é preciso passar o elemento como parâmetro para função manipulaDados().

Agora estamos passando dois blocos de informação para manipulaDados(), um é o operacao e o segundo vamos chamar de controle, que é o pai do elemento clicado.

O querySelector() não será mais no documento inteiro, será apenas em controle. Toda vez que clicarmos no controle, vamos buscar o controle-contador e adicionar ou subtrair um item.
*/