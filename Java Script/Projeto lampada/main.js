const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > - 1 //indexOf procura um trecho de string dentro de outra string, aqui ele vai procurar o trecho "quebrada", o src é por ser uma imagem, quando ele achar o trecho ele retorna um valor maior que - 1 e quando é falso ele retorna -1, neste caso querem que seja verdadeira quando encontrar a imagem quebrada ou seja quando for > -1.
}

function lampOn () {
    if (!isLampBroken() )      // ! - significa não, neste caso quando a lampada não estiver quebrada ela irá acender.
    lamp.src = './img/ligada.jpg';
}

function lampOff () {
    lamp.src = './img/desligada.jpg';
}

function lampBroken () {
    if (!isLampBroken() )
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);