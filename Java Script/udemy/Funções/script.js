// Funções são estruturas de código menores, o ideal é que elas só tenham um objeto; JS Já tem funções prontas mas tbm podemos crialas

// Definindo uma função; Primeiramente digite Function > nome > parâmetro que são uma especie de configuração que ficam entre () o nome no paramentro é definido por nós mesmos > corpo da função fica entre {}; Geralmente uma função retorna um valor

// Criando uma função

function minhaFuncao() {
    console.log("Testando");
}
minhaFuncao();

// Função em variavel - util para uma função que não vai poder ser alterada

const minhaFuncaoEmVariavel = function () { //Não temos nome aqui pois ja está declarado na const
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();


//Você pode alterar o nome do parâmetro txt para qualquer outro nome válido de variável que você preferir. O nome do parâmetro (como txt, texto, ou qualquer outro identificador válido) é apenas uma referência ao valor que você passa quando chama a função. O que importa é como você usa esse nome dentro da função. Portanto, se você mudar txt para texto tanto na definição da função quanto no uso dentro da função, o código ainda funcionará da mesma forma.


function funcaoComParametro(txt) {  
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa");

funcaoComParametro("Outra função");

//RETURN - retorna um valor para o programa - e finaliza a execução da função

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

//ESCOPO - as variaveis só alteram com base em escopo

let y = 10

function testandoEscopo() {
    let y =  20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo();

console.log(`Y fora da função é: ${y}`)

testandoEscopo();

//ESCOPO ANINHADO (NESTED SCOPES) - Ter em qualquer bloco a declaração de variaveis separdas dos outros escopos - um bloco é caracterizado por {}

let m = 10

function escopoAninhado () {
    let m = 20

    if(true) {
        let m = 30

        if(true) {
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado();

console.log(m)

//ARROW FUNCTION - ela é uma função anonima netão precisa estar dentro de uma variavel

const testeArrow = () => {
    console.log("Esta é uma arrow function")
};

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par");
        return
    }

    console.log("Impar");
};

parOuImpar(5);
parOuImpar(10);

//ARROW FUNCTION RESUMIDA - omitimos as {} e o return - bom para funçoes pequenas

const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(4));

//resumida:

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

console.log(raizQuadrada(12));

//nem sempre é necessario o return

const helloWorld = () => console.log("hello world");

helloWorld();

//ARGUMENTOS/PARAMETRO OPCIONAIS

const multiplication = function(m, n) {
    if(n === undefined) {
        return m * 2
    } else {
        return m * n
    }
};

console.log(multiplication(5));

console.log(multiplication(2, 4));

const greeting = (name) => {
    if (!name) {
        console.log("Olá!");
        return;
    }
    console.log(`Olá ${name}!`);
};

greeting();

greeting("João");

//ARGUMENTOS/PARAMETRO DEFAULT - Ele tem um valo base mas se for passado um novo ele é substituido

// Um argumento opcional é um parâmetro de função que não precisa ser fornecido quando a função é chamada. Em outras palavras, é um valor que a função pode aceitar, mas não é obrigatório.

// A presença de argumentos opcionais em uma função torna essa função mais flexível, pois permite que você chame a função com um número diferente de argumentos, dependendo das necessidades específicas.

// Aqui está um exemplo simples em JavaScript de uma função com um argumento opcional:

function saudacao(nome, saudacaoPersonalizada) {
    if (saudacaoPersonalizada) {
        return saudacaoPersonalizada + ", " + nome + "!";
    } else {
        return "Olá, " + nome + "!";
    }
}

// Neste exemplo, a função saudacao aceita dois argumentos: nome e saudacaoPersonalizada. O primeiro argumento, nome, é obrigatório e deve ser fornecido quando você chama a função. O segundo argumento, saudacaoPersonalizada, é opcional, o que significa que você pode escolher fornecê-lo ou não.

// Aqui estão algumas maneiras de chamar essa função:

console.log(saudacao("Alice")); // Saída: "Olá, Alice!"
console.log(saudacao("Bob", "E aí")); // Saída: "E aí, Bob!"

// No primeiro exemplo, apenas o argumento obrigatório nome é fornecido, e a função usa a saudação padrão "Olá". No segundo exemplo, tanto o nome quanto a saudacaoPersonalizada são fornecidos, e a função usa a saudação personalizada "E aí".

// Os argumentos opcionais são úteis quando você deseja fornecer valores padrão para um parâmetro de função, mas também deseja dar aos usuarios a opção de substituir esse valor padrão, se desejarem, mas se elas não fornecerem, a função ainda funcionará usando um valor padrão que você especificou.


const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Matheus"))

console.log(customGreeting("João", "Bom dia"));



const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando");

repeatText("Agora repete 5 vezes", 5);