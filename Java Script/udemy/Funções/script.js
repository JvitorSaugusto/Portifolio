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