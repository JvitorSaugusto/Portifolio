const img = document.getElementById( 'img');
const buttons = document.getElementById( 'buttons'); //Aqui capturamos o objeto através do pai
let colorIndex = 0;
intervalId = null;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]; // O event.target mapeia um evento realizado, o target mostra especificamente só o alvo desse evento, o id captura somente o id do alvo deste evento, que no caso seria o evento  de click ---- o uso de [] chama uma lista(array), este código faz com que ao clicar, a arrow function com o parametro event, passe o id do botão clicado para a const turnOn através do [event.target.id]. ex: ao clicar no botão vermelho por conta do evento o turnOn irá pega o Id 'Red', alternando assim entre as cores. ------------------- https://www.youtube.com/watch?v=EujFSEsZsk4 ----------------------------
}

// outro método de escrever o mesmo código----- const nextIndex = ()=> colorIndex <2 ? ++coloIndex : 0;

const nextIndex = () => { 

    if (colorIndex < 2) {  // Se colorIndex for menor que 2, então adicona 1 a ele, se não for menor que 2 ele irá se tornar 0.
        colorIndex++
    } else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'] //Array para troca de cores automatica
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}

const turnOn = {   // ARMAZENANDO FUNÇÕES EM OBJETOS JS 
    'red':       () => img.src = '.img/vermelho.png',
    'yellow':    () => img.src = '.img/amarelo.png',
    'green':     () => img.src = '.img/verde.png',
    'automatic': () => intervalId = setInterval (changeColor, 1000) //Vai executar a function changeColor a cada 1000 ms - 1 segundo, sempre que setInterval é ativado ele gera um Id unico, então para capturarmos esse Id usamos o IntervalId, ele serve para que possamos chamar esse id para possibilitar uma pausa na repetição através de ClearInterval, atribuindo o valor Nulo para este Id capturado.
}

buttons.addEventListener('click', trafficLight)