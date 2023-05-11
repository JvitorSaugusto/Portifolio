console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `rioDeJaneiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `rioDeJaneiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando remotamente um item na lista ja declarada;
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

// Removendo elementos da lista - splice(posição do elemento, quantia de elementos a ser apagada)
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//exibir elemento especifico da minha lista
console.log(listaDeDestinos[1], listaDeDestinos[0]);