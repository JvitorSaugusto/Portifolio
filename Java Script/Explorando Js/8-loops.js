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
while(contador <3){       // Enquanto = While
    if(listaDeDestinos [contador] == destino){
        console.log("Destino existe");
    }else{
        console.log("Destino não existe");
    }
    contador +=1;
}

console.log(listaDeDestinos);
