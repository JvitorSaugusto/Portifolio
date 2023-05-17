console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `rioDeJaneiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";


console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador <3){       // Enquanto = While
    if(listaDeDestinos [contador] == destino){
        destinoExiste = true;
        break; //interrompe o código fazendo que a execução pule 1 laço, neste caso o código ira pular o "contador +=1;" e irá direto para  o "console.log("Destino existe: ", destinoExiste);"
    }
    contador +=1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

/*exemplo utilizando for - O for possui uma organização de execução que pode soar estranha: a inicialização, a condicional e o incremento. No momento em que a condição que inserimos não for mais verdadeira o looping é encerrado.

for(let cont = 0 ; cont < 3 ; cont++){
    if(listaDeDestinos [contador] == destino){
        destinoExiste = true;
}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O for é bastante popular e comum no universo da programação, inclusive, utilizamos a variável cont, mas o mais comum para este tipo de operação é utilizar o nome i como auxiliar do for:

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}

*/