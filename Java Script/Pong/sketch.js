//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();


/*Se xBolinha for maior que a largura (width) da tela, queremos fazer algo, que por sua vez estará entre chaves (ou "bigodes"). 

No caso, iremos multiplicar velocidadeXBolinha por -1, para que ela se movimente no sentido oposto.

Ao testarmos este código, a bolinha parte da área central da tela, colide com a lateral direita da tela, inverte o sentido, e desaparece quando ultrapassa a lateral esquerda da tela. Sabemos que esta lateral esquerda é o X = 0, portanto acrescentaremos outra condição no código, por meio de duas barras verticais, o que quer dizer "ou"

if (xBolinha > width || xBolinha < 0){
  velocidadexBolinha *= -1;
}

O X da bolinha é o centro ou seja o diametro, a colisão inicialmente vai ocorrer nesse centro, mas ao adicionar o raio que é metade do diametro, a colisão irá ocorrer nas bordas da bolinha, o valor negativo sempre vai espelhar a mesma ação no ponto negativo do eixo da bolinha

*/

}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio  > height || yBolinha - raio  < 0){
    velocidadeyBolinha *= -1;
  }
}