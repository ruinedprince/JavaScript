// String, number, undefined, null, boolean, symbol

const nome           = 'prince'; // String 
const nome1          = 'prince'; // String
const nome2          = 'prince'; // String
const num            = 10;       // Number
const num1           = 10.52;    // Number

let   nomeAluno;                 // Undefined -> nao aponta pra local nenhum na memória.
let   sobrenomeAluno = null;     // Null -> Não aponta para local nenhum na memória.

const aprovado       = true;     // Boolean = true ou false (valor lógico).

console.log(typeof aprovado, aprovado);

// Adição de valor com dado primitivo
let   c              = 2;        // Number
const d              = c;

console.log(c, d);               // 2, 2

c                    = 3;

console.log(c, d);               // 3, 2