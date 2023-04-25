//alert('Olá mundo');
//buscando elementos no HTML
//document.querySelector('.tecla');

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

/*document.querySelector('.tecla_pom').onclick = tocaSomPom;

quando o onclick deste elemento da tecla pom seja executado, queremos que chame a função tocaSomPom;.

Utilizamos o document.querySelectorAll() para selecionarmos todos os elementos do seletor desejado, reduzindo a quantidade de repetição de código, que consequentemente, promoverá uma otimização no código em alternativa a repetição.

Ele retorna uma lista (NodeList) com todos os elementos do seletor informado evitando a repetição de código.

As listas se iniciam em 0 e vão até o valor total de itens -1 utilizando do simbolo []
*/

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0];

listaDeTeclas[0].onclick = tocaSomPom;