console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2")); // Força a conversão texto em numero inteiro

console.log("10" / "2"); //No caso de divisões, o comportamento do leitor é outro. Veremos que o retorno para este caso é 5, mesmo que não tenhamos realizado uma conversão explícita para números inteiros, afinal uma divisão só faz sentido com elementos numéricos. caso adicione texto, irá retornar erro.

console.log(6.5);
console.log(6,5); //Se escrevemos o mesmo valor com vírgula, é lido um espaço no lugar da vírgula, algo como 6   5.