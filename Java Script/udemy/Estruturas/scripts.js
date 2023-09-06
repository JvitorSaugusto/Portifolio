/* Variaveis "let e const" são como container que salvam informação para quando precisarmos UserActivation. */

// 1 - variáveis
//Por ser uma Variavel o valor pode ser alterado na linha 9
let nome = "Matheus ";

console.log(nome);

nome = "Matheus Battisti";

console.log(nome);

//Por ser uma const o valor n pode ser alterado na linha 17
const idade = 31;

console.log(idade);

//idade = 32;

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variáveis

//Não podem ser iniciadas com numeros ou alguns caracter especiais, porém "_" e "$" são permitidos.
//let 2teste = "inválido";

//Variaveis podem ser escritas em seguida
let a = 10, b = 20, c = 30;

console.log(a, b, c);

//3 - Função

/* Uma função é um bloco de código que pode ser reaproveitado ao longo do nosso programa;

Chamamos ela pelo nome e um paranteses: funcao()

também podemos inserir parametros que deixam a execução da função única, ex: soma (a,b);

Log de console.log também é uma função 


FUNÇÃO PROMPT

Ela recebe um dado do usuario; podemos salvar esse valor em uma variavel. ex:
Const x = prompt("Digite um numero:")


const age = prompt("Digite a sua idade:")

console.log(`Você tem ${age} anos.`);
*/

/* 
FUNÇÃO Math.x

Math é um objeto, que possui diversas funções para fins matemáticos; Ex:
max: encontra o maior número;
floor: arredonda para baixo o número; */

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

/* FUNÇÕES console.x

O console também é um objeto, assim como Math, tem várias funções;
sua principal é exibir uma mensagem de alguma categoria na aba console; */

console.log("teste!");

console.error("erro!");

console.warn("aviso!");

// 4 - Estruturas de controle

/* Os programas são executados de cima para baixo;

Com esta estrutura podemos alterar o fluxo de execução;

As principais são IF e ELSE*/

/* Estrutura condicional: if

No if se a condição for verdadeira ela é validada por um boolean após o trecho de execução; */

const m = 10;

if(m > 5) {
    console.log("M é maior que 5!");
}

const user = "João";

if(user === "João") {
    console.log("Olá João!");
}

if(user === "Maria") {
    console.log("Olá Maria!"); //Aqui não retorna nada pois a condição deu false
}

console.log(user === "João", user === "Maria");

/* Estrutura condicional: else

O else executa quand o if não atende sua condição, ou seja, ser false;

Ou seja não temos um bloco de validação, apenas do que será executado;

Exemplo: Execute algo SE(IF) x > 5, SE NÃO(ELSE) execute isso;*/

const loggedIn = false;

if(loggedIn) {
    console.log("Está autenticado!")
} else {
    console.log("Não está autenticado!")
}

const q = 10;
const w = 15;

if(q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

/* Estrutura condicional: else if

else if é usada para criar condições adicionais em seu código JavaScript, caso a primeira condição em um if não seja atendida. 

É como dizer: "Se a primeira condição não for verdadeira, verifique esta outra condição.

Ele vai ignorando os Falses até encontrar um True ou ser interrompido.

O else if permite que você lide com várias condições de maneira organizada, permitindo que seu código tome diferentes caminhos com base em diferentes situações
 */

if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

//exemplo avançado

const userName = "Matheus"
const userAge = 31

if(userName === "José") {
    console.log("Bem vindo José");
} else if (userName === "Matheus" && userAge === 31) {
    console.log("Olá Matheus, você tem 31 anos");
} else {
    console.log("Nenhuma condição aceita!");
}

/* Estruturas de repetição

FOR e WHILE

As suas sintaxes são diferentes, mas as duas chegam no mesmo resultado*/

//WHILE

let p = 0

while(p < 5) {
    console.log(`Repetindo ${p}`)
    p = p + 1; //incrementador, faz com que a condição p < 5 seja atingida
}

/* loop infinito

let x = 10

while(x > 5) {
    console.log(`Imprimindo ${x}`)
} */


//DO WHILE também é uma estrutura de repetição, mas não é tão utilizado

let o = 10

do {
    console.log(`Valor de o: ${o}`)
    o--
} while (o > 1);

// FOR é a estrutura de repetição mais utilizada
// ela condensa toda lógica em uma linha, variavel > condição > incrementador > condição final > progressão;

for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...")
}

//A variavel tbm pode ser declarada fora do FOR

let r = 10

for(r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`)
}