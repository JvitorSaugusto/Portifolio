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

//ARROW FUNCTION - ela é uma função anonima então precisa estar dentro de uma variavel
/*Aqui está o que cada parte significa:

const nomeDaFuncao: Você declara uma variável (usando const, let ou var) para armazenar a função. Isso permite que você chame a função pelo nome que você escolher, como uma função normal.

(parâmetros): Dentro dos parênteses, você lista os parâmetros da função, separados por vírgulas. Esses parâmetros são como variáveis que a função pode usar para realizar seu trabalho.

=>: Esta seta é o que torna a função uma "arrow function". Ela vem após os parâmetros e indica que o código à direita da seta é o corpo da função.

{}: Dentro das chaves, você coloca o código que a função deve executar. Este é o corpo da função, onde você escreve as instruções que a função deve seguir. */

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

//ARGUMENTOS/PARAMETRO DEFAULT - Ele tem um valor base mas se for passado um novo ele é substituido

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

/*CLOSURE
Closure é um conjunto de funções, onde temos um reaproveitamento do escopo interno de uma função;
Pois este escopo não pode ser acessado fora da função, ja que é um bloco;
Então há funções internas que aproveitam o escopo, e são chamados de closure; */

function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();

/* CLOSURE +
As closures também podem servir para salvar os resultados já executados;
Criando uma espécie de incrementaão;
Assim temos uma variavel que executa uma função e modifica seu valor;

Um closure em JavaScript é como uma "lembrança" de um escopo de função, mesmo depois de a função ter terminado de ser executada. Isso significa que as variáveis dentro dessa função ainda podem ser acessadas e utilizadas fora dela. 

Em termos simples, um closure permite que você acesse variáveis de uma função em outro lugar do seu código, mesmo que essas variáveis não estejam mais no escopo original da função. Isso é útil para manter informações privadas ou para criar funções que "lembram" o contexto em que foram criadas.
*/

/*EXEMPLO BURRO

Imagine que a função someFunction() é como uma caixa que contém um papel escrito com a palavra "Alguma coisa". Dentro dessa caixa, há uma pessoa chamada display() que pode ver o papel e diz o que está escrito nele.

Quando você chama someFunction(), abre a caixa e permite que a pessoa display() veja o papel e diga em voz alta o que está escrito. O resultado é que você ouvirá "Alguma coisa" impresso no console.

A chave para entender isso é que a pessoa display() dentro da caixa tem acesso ao papel porque está dentro da mesma caixa. Essa é uma forma simples de pensar em closures em JavaScript. A função interna (display()) pode acessar variáveis definidas na função externa (someFunction()) porque elas compartilham o mesmo "espaço" ou escopo.*/

const multiplicationClosure = (n) => {
    return (m) => {
        return n*m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

/*EXPLICAÇÃO MULTIPLICATIONCLOSURE

No momento em que você chama multiplicationClosure(5), você está definindo o valor de n na função externa como 5. A função externa retorna a função interna (m) => { return n * m; }.

Quando você posteriormente chama c1(5), você está atribuindo o valor 5 ao parâmetro m na função interna. Nesse ponto, n já foi definido como 5 no contexto da função externa (ou seja, n é 5), e m se torna 5 devido ao argumento que você passou.

Então, dentro da função interna, a expressão n * m usa n (que é 5) e m (que é 5) para calcular o resultado. Isso resulta em 5 * 5, igual a 25. Portanto, a função interna c1 retorna 25 quando chamada com o argumento 5.*/

/*RECURSÃO

Um recurso que permite a função se autoinvocar continuamente;
Criamos uma especie de loop;
É interessante definir uma condição final, para parar a execução;*/

const untilTen = (n,m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)

/*EXPLICAÇÃO DO CÓDIGO

Este código JavaScript é uma função chamada untilTen que recebe dois argumentos, n e m. A função tem a finalidade de subtrair m de n repetidamente até que n seja menor que 10. Vou explicar o que acontece passo a passo:

const untilTen = (n, m) => { ... }: Aqui, definimos uma função chamada untilTen que aceita dois parâmetros, n e m.

if (n < 10) { ... }: Verifica se o valor de n é menor que 10.

Se n for menor que 10, a função exibe a mensagem "A função parou de executar!" usando console.log.

Caso contrário, a função continuará a executar o seguinte:

const x = n - m: Calcula a diferença entre n e m e armazena o resultado em uma variável x.

console.log(x): Exibe o valor de x no console.

untilTen(x, m): Chama recursivamente a função untilTen com os novos valores de x e m. Isso significa que a função será chamada repetidamente com o novo valor de x até que x seja menor que 10.

No exemplo final, a função untilTen é chamada com n igual a 100 e m igual a 7. A sequência de execução é a seguinte:

x = 100 - 7 resultando em x = 93, e "93" é exibido no console.
A função untilTen é chamada novamente com x = 93, e o processo se repete.
x = 93 - 7 resultando em x = 86, e "86" é exibido no console.
O processo continua até que x seja menor que 10.
A função continuará a chamar a si mesma, subtraindo m de n, até que n seja menor que 10, momento em que a mensagem "A função parou de executar!" será exibida no console.

A parte em que x chama recursivamente a função untilTen é essencialmente uma maneira de continuar executando a função repetidamente com um novo valor. Isso é chamado de recursão.

Quando x chama untilTen(x, m), a função é chamada novamente com os novos valores de x e m. Isso significa que a função vai repetir o mesmo processo com o novo valor de x.

É como se você estivesse resolvendo um problema em etapas, onde a solução de uma etapa leva à próxima etapa, e assim por diante, até que a condição (neste caso, n menor que 10) seja atendida.

Então, a ideia é que a função untilTen continue chamando a si mesma com valores atualizados até que a condição n < 10 seja verdadeira. Isso permite que a função execute a subtração repetidamente até que n seja menor que 10.*/

/*INFINITE RECURSION

function run() {
    console.log("Executando...");
    run();
}

run()*/


function factorial(x) {
    if(x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}`);

/*Este código JavaScript calcula o fatorial de um número usando uma função recursiva. Vou explicar passo a passo:

function factorial(x) { ... }: Aqui, definimos uma função chamada factorial que aceita um argumento x. O objetivo da função é calcular o fatorial desse número.

if (x === 0) { ... }: Verifica se x é igual a 0.

Se x for igual a 0, a função retorna 1. Isso é uma base para a recursão, pois o fatorial de 0 é definido como 1.

Caso contrário, se x não for igual a 0, a função chama a si mesma de forma recursiva, multiplicando x pelo fatorial de x - 1. Isso é feito com return x * factorial(x - 1).

Fora da função, definimos uma constante num com o valor 6, que é o número para o qual queremos calcular o fatorial.

Em seguida, chamamos a função factorial com num e armazenamos o resultado em result. Isso calculará o fatorial de 6.

Finalmente, usamos console.log para exibir uma mensagem que mostra o resultado do fatorial de num.

A função factorial funciona da seguinte maneira para calcular o fatorial de 6:

factorial(6) chama factorial(5), multiplicando 6 por factorial(5).
factorial(5) chama factorial(4), multiplicando 5 por factorial(4).
Isso continua até factorial(1), que chama factorial(0). Nesse ponto, a recursão atinge a base e retorna 1.
Em seguida, a multiplicação é desfeita, e factorial(1) retorna 1.
factorial(2) multiplica 2 por 1 (o resultado de factorial(1)) e retorna 2.
Isso continua até que factorial(6) multiplica 6 por 2 e retorna 720.
Portanto, o fatorial de 6 é calculado como 6 * 5 * 4 * 3 * 2 * 1, que é igual a 720. A mensagem final no console exibe o resultado.
 */

