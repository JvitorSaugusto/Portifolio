/*Arrays são listas;
Podemos inserir valores de qualquer tipo de dado;
Os valores são inseridos entre [];
Cada valor é separado do outro por uma virgula; */

const lista = [1, 2, 3, 4, 5]

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", ture, 2, 4.12, []];

console.log(itens);

//acessando os objetos individuais da lista

const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0]);

console.log(arr[3]);

console.log(arr[10]);


/*Propriedades

São como informações de um objeto;
Os arrays tem propriedades, assim como outros tipos de dados;
As propriedades podem ser acessadas por notação de ponto ou colchetes:
    dado.prop ou dado[´prop´]*/

const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length); // Da a quantia de caracteres que uma string tem

/*Métodos

São como funções, acessamos com notação de ponto e utilizamos () para invocar;

Um importante conceito da OOP: Objetos são compstos por métodos e propriedades;

Como muitos dados são objetos em JS, temos métodos e propriedades neles;*/

const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text,toUpperCase()); // deixa o texto maiusculo

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));  // mostra a posição de um caractere em uma string

/*OBJETOS */