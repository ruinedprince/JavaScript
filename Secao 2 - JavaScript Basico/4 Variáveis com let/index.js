let nome = 'Gabriel'; // Variavel let com valor em String

console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'se casou com Maria em 2012');
console.log('Maria teve 1 filho com' ,nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');


let variavel; // Declarando a variável sem definir um valor

variavel = 'Qualquer valor'; // Inicializando a vaiável

console.log(variavel);

variavel = 'Outro valor'; // Alteração de valor da variável

console.log(variavel);


// Não é possível criar variaveis com palavras reservadas
/* let console;
   let if;
*/


// Variáveis precisam ter nomes significativos, boa prática
let n = campoBasedeDados; //O que 'n' significa?
let nomeCliente = 'Carlos';

console.log(nomeCliente); //Aqui sabemos oq a variável se refere pelo nome


// Não pode começar o nome de uma variável com um número
// let 1valor;
let umValor;
let val1or


// Não podem contem espaços ou traços
/* let nome-Client;
   let nome Client;
*/
// Utilizamos camelCase
let nomeClient;
let nomeCompletoDoCliente;


// Variáveis são Case-sensitive
let pessoa = 'eu';
let Pessoa = 'você';


// Não podemos redeclarar variáveis com let
let numero = 1;
// let numero = 2;


// ! ! ! NAO UTILIZE VAR, UTILIZE LET ! ! !