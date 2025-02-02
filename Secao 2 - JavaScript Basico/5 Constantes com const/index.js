// Constantes devem ser inicializadas
// const valor;
const valor = 10;

// Não é possível criar constantes com palavras reservadas
/* const console;
   const if;
*/


// Constantes precisam ter nomes significativos, boa prática
const n = campoBasedeDados; //O que 'n' significa?
const nomeCliente = 'Carlos';

console.log(nomeCliente); //Aqui sabemos oq a constante se refere pelo nome


// Não pode começar o nome de uma constante com um número
// const 1valor = 0;
const umValor = 1;
const val1or = 2;


// Não podem contem espaços ou traços
/* const nome-Client = 'João';
   const nome Client = 'João';
*/
// Utilizamos camelCase
const nomeClient = 'João';
const nomeCompletoDoCliente = 'Maria Eduarda';


// Constantes são Case-sensitive
const pessoa = 'eu';
const Pessoa = 'você';


// Não pode modificar o valor de uma constante
const numero = 1;
// numero = 2; Erro, não é possível reatribuir o valor de uma constante

// ! ! ! NAO UTILIZE VAR, UTILIZE CONST ! ! !


// É possível realizar operações com valores de uma const
const valor1              = 10;
const valor2              = 20;
const resultado           = valor1 * valor2;
const resultadoDuplicado  = resultado * 2;

let   resultadoTriplicado = resultado * 3;

      resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado); // 200
console.log(resultadoDuplicado); //400
console.log(resultadoTriplicado); //605