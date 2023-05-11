console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `rioDeJaneiro`
);

const idadeComprador = 17;
listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);

// Operadores Booleanos
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);