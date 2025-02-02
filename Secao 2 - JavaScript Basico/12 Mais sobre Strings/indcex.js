let umaString = "Um texto";

console.log(umaString);

umaString = "Um \"texto\""; // Contra-barra aqui é usada para "escapar" um caractere especial e fazer com que ele seja exibido na impressão.

console.log(umaString);

umaString = "Um \texto"; // Contra-barra junto do "t" é usada para formatar o texto e inseriro um tab ( ).

console.log(umaString);

umaString = "Um \\texto"; // Contra-barra aqui é usada junto de outra para que possa se exibir na impressão

console.log(umaString);

/* Strings são "indexadas", cada valor possui um índice (valor)
Exemplo: 01234567
        "Um texto"*/
umaString = "Um texto";

console.log(umaString[4]); // Podemos acessar cada valor da string usando o índice entre colchetes, nesse caso, imprimindo "e".
console.log(umaString[8]); // Caso a impressão busque um valor fora do "range" (alcance), um valor undefined será exibido.
console.log(umaString.charAt(6)); // É possível usar a função (()) charAt para o mesmo objetivo, mas caso a impressão busque um valor fora do "range", será exibido um valor vazio.
console.log(umaString.concat(' em', ' um', ' belo', ' dia')); // é possível usar concat para adicionar novos valores à variável.
// Formas de concatenação mais comuns
console.log(umaString + ' em um belo dia');
console.log(`${umaString} em um belo dia`);
console.log(umaString.indexOf('texto')); // Utilizando a função indexOf, é possível retornar o valor do indice inicial de um valor String específico, caso esteja fora do "range", o valor retornado é -1
console.log(umaString.indexOf('o', 3)); // É possível determinar o indice inicial de onde será procurado o indice de um valor String específico, caso esteja fora do "range", o valor retornado é -1
console.log(umaString.lastIndexOf('texto')); // A função lastIndexOf faz o mesmo, porém, de trás para frente,, caso esteja fora do "range", o valor retornado é -1
console.log(umaString.match(/[a-z]/g)); // Não entendi pra que serve, mas utilizando a flag 'g' ele retorna os valores strings a partir do primeiro valor encontrado entre os que eu pedi com exceção do 0 (a-z, primeiro valor encontrado "m", indice 1, flag g faz com que todos os valores strings sejam exibidos de maneira separada, semelhante a um array).
console.log(umaString.search(/x/)); // Com o a função search, ele me retorna o indice de um valor string específico, semelhante ao indexOf, mas ele aceita "expressões regulares" (/valor/).
console.log(umaString.replace('Um', 'Outro')); // Com a função replace, ele substitui uma parte específica da String por outro valor String específico, é possível utilizar "expressões regulares" para substituir também.

umaString = "o rato roeu a roupa do rei de roma";

console.log(umaString);
console.log(umaString.replace(/r/g, '#')); // Apenas o primeiro valor encontrado é substituido, porém, com a flag 'g', ele substitui todos os valores presente
console.log(umaString.length); // Com o atributo length, é possível saber a quantidade de indices presentes no valor string, ou seja, seu tamanho
// É possível realizar operações com o atributo length já que seu valor retornado é um number
console.log(umaString.slice(2, 6)); // Com a função slice, ele retorna um valor string baseado num "range" específico, para que ele retorne o "desejado", é necessário colocar a "fonta final" do "range" 1 indice acima.
// Outras formas de realizar slice
console.log(umaString.slice(-4)); // Com um valor negativo dentro da função, ele começa a retornar a partir do "length" total da String MENOS o valor específico
console.log(umaString.slice(30)); // Com um valor positivo, ele começa a retornar a partir do valor específico.
console.log(umaString.substring(umaString.length - 4, umaString.length)); // A função substring faz o mesmo que a slice, porém de uma forma mais complicada, utilizando do atributo "length".
console.log(umaString.split(' ')); // A função split separa e retorna os valores string a partir de um valor específico, o valor em específico não é retornado.
console.log(umaString.split(' ', 2)); // Com um valor específico dentro da função, ele retorna apenas a quantidade inserida.
console.log(umaString.toUpperCase()); // Deixa a String em maiusculo.
console.log(umaString.toLowerCase()); // Deixa a String em minusculo.
console.log(umaString.match(/r/g).length); // A combinação da função match junto do atributo length retorna a quandidade de vezes que um valor específico foi encontrado na minha String