console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `rioDeJaneiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;


listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }
// || significa ou

if (idadeComprador >= 17 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Não é maior de idade e sem acompanhante, não posso vender");
}

console.log("Embarque: \n\n"); // O \n é um caractere especial que possibilita que pulemos uma linha no momento de imprimir a mensagem de texto.
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

// Operadores Booleanos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);