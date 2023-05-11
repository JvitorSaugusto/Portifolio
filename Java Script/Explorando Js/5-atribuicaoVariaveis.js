console.log("Trabalhando com atribuição de variáveis");

const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

//console.log(nome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`); //${} declara uma variavel contatenando dentro de um texto.   `` interpolar variaveis 

let contador = 0;
contador = contador +1;


//sobrescrita
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);

/* Conhecemos os tipos const e let e qual a diferença entre eles: sendo que no primeiro caso os valores da variável não podem se modificar, e no segundo caso sim. */