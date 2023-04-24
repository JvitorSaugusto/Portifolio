//alert('Olá mundo');
//buscando elementos no HTML
//document.querySelector('.tecla');

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

//quando o onclick deste elemento da tecla pom seja executado, queremos que chame a função tocaSomPom;.