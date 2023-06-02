//alert('Olá mundo');
//buscando elementos no HTML
//document.querySelector('.tecla');

function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

    const listaDeTeclas = document.querySelectorAll('.tecla');


    for (let contador = 0; contador < listaDeTeclas.length; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`; //template string..

        tecla.onclick = function () {
            tocaSom(idAudio);
        }

        tecla.onkeydown = function (evento) {
            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa'); //.add - adiciona uma classe
            }
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa'); // remove uma classe
        }
    }

/* ANOTAÇÕES

Explicação sobre esse parametro idElementoAudio
https://cursos.alura.com.br/forum/topico-duvida-parametro-255135
https://cursos.alura.com.br/forum/topico-aula-274036
https://cursos.alura.com.br/forum/topico-duvida-sobre-idelementoaudio-nao-entendi-a-funcionalidade-dele-200183

--------------------------------------------------------------------------------------------------------------------------------------

O parâmetro é alguma coisa que conseguimos passar para nossa função e que a execução, que o código da nossa função depende para funcionar corretamente. E muitas vezes esse parâmetro pode ser opcional, no nosso caso não é, realmente precisamos desse parâmetro, ou seja, desta informação, para nossa função tocar o som corretamente. Então para eu declarar um parâmetro de uma função basta que na assinatura dessa função, que é a declaração function, o nome desta função e o parâmetro dentro dos parênteses vamos criar o parâmetro.

--------------------------------------------------------------------------------------------------------------------------------------

let contador = 0; - foi removido por conta que o for ja consegue declarar variaveis dentro de seu parenteses 
--------------------------------------------------------------------------------------------------------------------------------------

document.querySelector('.tecla_pom').onclick = tocaSomPom;

quando o onclick deste elemento da tecla pom seja executado, queremos que chame a função tocaSomPom;.

Utilizamos o document.querySelectorAll() para selecionarmos todos os elementos do seletor desejado, reduzindo a quantidade de repetição de código, que consequentemente, promoverá uma otimização no código em alternativa a repetição.

Ele retorna uma lista (NodeList) com todos os elementos do seletor informado evitando a repetição de código.

As listas se iniciam em 0 e vão até o valor total de itens -1 utilizando do simbolo []
--------------------------------------------------------------------------------------------------------------------------------------

While- Enquanto

O while é uma estrutura de repetição que foi necessária para trabalhar com a lista de teclas. Esta estrutura possibilita que uma variável de contador tenha seu valor incrementado a cada repetição, e que pode ser utilizado para acessar os indices de uma lista além de ser comparado com o tamanho de lista, formando a condição para a repetição cessar.

 Foi necessário usar o while como estrutura de repetição para auxiliar o acesso a cada elemento dentro da lista de teclas, podendo aplicar a rotina de associar uma função no atributo onclick de cada um destes elementos.
 

O atributo lenght guarda o numero total de elementos de uma lista

while (contador < listaDeTeclas.length) {
--------------------------------------------------------------------------------------------------------------------------------------

for, e for significa “para”. O for uma estrutura de laço de repetição ou de loop, que também vai fazer a mesma coisa, enquanto uma instrução, uma condição for verdade, ele vai repetir essa rotina, porém a vantagem em relação ao while é que o contador pode ser declarado ainda dentro dos parênteses do for.    Uma das vantagens é podermos declarar uma variavel (contador neste caso) dentro do for + um incrementador.

--------------------------------------------------------------------------------------------------------------------------------------

/classlist cria uma lista de classes por exemplo: <button class="tecla tecla_pom">Pom</button> ele vai pegar a segunda classe tecla_pom,  permitindo o acesso de elementos dentro de outro.


template string - neste caso será uma string com um pedaço dinamico, utilzamos a crase neste caso, a parte dinamica esta dentro de ${}, podemos acessar variaveis, contas e etc dentro da string através deste método, aqui chamamos a const instrumento que está pegando o segundo elemento da class tecla, que vai se alternando entre os bot/ões por conta const tecla que é um contador, juntando com a string #som-,  formando assim o idAudio, permitindo a repordução de fierentes sons conforme clicamos nos botões.
--------------------------------------------------------------------------------------------------------------------------------------
FUNÇÃO ANONIMA - vc declara a function sem um parametro logo em seguida abre chaves e coloca a ação que vc quer que execute, a function não é executada automaticamente pelo JS será necessário uma ação para ativala neste caso o paramentro onclick.
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}

--------------------------------------------------------------------------------------------------------------------------------------

Explicação contador + 1 ou contador++

temos que ter contador para receber algum valor algum mais 1, só que esse algum valor vai ter que ser o valor antigo do contador, então pode ser ele mesmo, contador = contador+1;.

[07:40] Como assim? Vamos pensar. Então aqui na primeira repetição o contador vai valer 0, 0 é menor que 9? Verdade. Então 0 + 1 vai ser 1, então ele primeiro faz essa conta, ele sempre vai processar essa conta primeiro, como se tivesse entre parênteses como eu coloquei, e depois ele vai fazer 0 + 1 = 1, então vou guardar 1. Então volta a retornar. Contador vai ser 1, 1 é menor que 9? É. Então agora o contador vai valer um e vai somar com mais 1, ou seja, vai ser 2 e vai guardar o novo valor 2. E assim por diante.
--------------------------------------------------------------------------------------------------------------------------------------

FUNÇAO ANONIMA - PESQUISAR
--------------------------------------------------------------------------------------------------------------------------------------

== compara valores pra ver se são iguais
=== compara calores e o tipo de elemento para ver se são iguais
|| ou
!= Diferente
--------------------------------------------------------------------------------------------------------------------------------------
*/
