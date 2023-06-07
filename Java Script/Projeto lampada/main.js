const turnOnOff = document.getElementById ('turnOnOff');
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

// Função LampOnOff -  Se (if) o texto do botão for igual a "Ligar" a função LampOn será executada e o texto ira mudar para 'desligar'. se não estiver escrito 'Ligar' no botão, ao clicar LampOff será executado e o texto irá mudar para ligar.
function lampOnOff () {
    if (turnOnOff.textContent === 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);