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

/*OBJETOS 

Em JS um tipo de dado que é o objeto, mas seu nome tecnico é object literals;
Isso pq o objeto vem da orientação a objetos, com outros recursos: instancia, herança...
Já o literals possui apenas propriedades e métodos, nós mesmos os criamos;
O objeto fica em um bloco de {}

Basicamente eles armazenam informações como se fossem perfis de usuario e etc
exemplos:

const user1 = {
    name: "João Vitor",
    email: "joao@example.com",
    password: "senha123",
    age: 25,
    address: "Rua ABC, 123",
    // Outras informações do perfil do usuário
};

const user2 = {
    name: "Maria Silva",
    email: "maria@example.com",
    password: "senha456",
    age: 30,
    address: "Avenida XYZ, 456",
    // Outras informações do perfil do usuário
};

*/

const person = {
    name:"Joao Vitor",
    age: 23,
    job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);


console.log(typeof person);

/* OUTRO EXEMPLO DE OBJETO

const city = {
     name: "Itatiaia",
     population: "22.345",
     schools: "4",
};

O código que você forneceu define um objeto chamado city em JavaScript. Este objeto contém informações relacionadas a uma cidade, como o nome da cidade, a população e o número de escolas.

Cada propriedade do objeto (name, population e schools) é uma chave que está associada a um valor correspondente. No seu caso, as chaves são strings que descrevem os tipos de informações armazenadas no objeto, e os valores associados são os dados específicos.

Você pode acessar as informações contidas no objeto city usando a notação de ponto ou a notação de colchetes. Por exemplo:

console.log(city.name); // Saída: "Itatiaia"
console.log(city.population); // Saída: "22.345"
console.log(city.schools); // Saída: "4"

Assim, o objeto city é uma maneira eficaz de organizar e acessar informações sobre uma cidade em JavaScript.
*/

/*Removendo e criando propriedades

Para adicionar uma nova propriedade a um objeto, utilizamos a notação de ponto e atribuimos um valor;
Já para excluir, vamos utilizar o operador delete na propriedade alvo;*/

const moto = {
    engine: 250,
    brand: "Yamaha",
    model: "Fazer 250",
    km: 25000,
};

console.log(moto);

moto.combustive = "alcool/gasoline";

console.log(moto);

delete moto.km;

console.log(moto)

/**  Diferença entre arrays e objetos

**Os arrays são utilizados como listas de itens, geralmente todos possuem o mesmo tipo;
**Já os objetos são utilizados para descrever um item, contém as informaçoes do mesmo, e as propriedades possuem diferentes tipos de dados;
Podemos ter também um array de objetos, isso é muito utilizado;
Este dois dados são muito importantes na programação;
*/

