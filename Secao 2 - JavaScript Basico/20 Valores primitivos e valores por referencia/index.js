/*
    Primitivos (imutáveis) - string, number, boolean, undefined
    null, não vistos: bigint e symbol.

    São copiados quando usado o sinal de atribuição '='.
*/
    //      0123456
let nome = 'Gabriel';

    //  012345
nome = 'Otávio';
nome[0] = 'R';  // A String não pode ser mudada internamente, seu valor é imutável, o valor apenas muda quando você deixa de apontar de um valor e passa a apontar a outro, essa linha não faz nada.

console.log(nome);  // Não estou mudando o dado em si, apenas o valor da variável; Otávio.
console.log(nome[0]);   // O.

nome = 'Maciel';

console.log(nome);  // Maciel. O valor da variável mudou.
console.log(nome[0]);   // M. O valor da variável mudou.

let a = 'A';
let b = a;  // Tanto a quando b possuem o mesmo valor, porém, depois dessa linha as variaveis a e b são totalmente independentes, nao interferindo uma no valor da outra.

console.log(a, b);  // A A.

a = 'Outra coisa';

console.log(a, b);  // Outra coisa A. A variável b continua coom o valor de A.

/* 
    Referência (mutável) - Array, objeto e function.

    São passados por referência quando usado o sinal de atribuição '='.
*/

let c = [1, 2, 3];
let d = c;  // Tanto c quanto d apontam para o mesmo lugar na memória: 1, 2, 3.

console.log(c, d);  // [ 1, 2, 3 ] [ 1, 2, 3 ]

c.push(4);

console.log(c, d); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]. Ambos continuam apontando para o mesmo lugar na memória, logo, terão o mesmo valor.

d.pop();

console.log(c, d); // [ 1, 2, 3 ] [ 1, 2, 3 ]. Ambos continuam apontando para o mesmo lugar na memória, logo, terão o mesmo valor, independente da origem da mudança de valor.

let e = [1, 2, 3];
let f = [...e]; // Utilizando do spread (...), o valor de e foi COPIADO para f, e eles não apontam mais para o mesmo lugar na memória, apenas possuem valores iguais.
let g = f;

console.log(e, f);  // [ 1, 2, 3 ] [ 1, 2, 3 ].

e.push(4);

f.pop();

console.log(e, f, g);  // [ 1, 2, 3, 4 ] [ 1, 2 ] [ 1, 2 ].

const h = {
    nome: 'Gabriel',
    sobrenome: 'Maciel'
};

const i = h;

console.log(i); // { nome: 'Gabriel', sobrenome: 'Maciel' }.

h.nome = 'João';

console.log(i); // { nome: 'João', sobrenome: 'Maciel' }. o objeto h e o objeto i apontam para o mesmo lugar na memória.

const j = {
    nome: 'Gabriel',
    sobrenome: 'Maciel'
};

const k = {...j};   // Utilizando o spread (...).

console.log(k); // { nome: 'Gabriel', sobrenome: 'Maciel' }.

j.nome = 'João';

console.log(k); // { nome: 'Gabriel', sobrenome: 'Maciel' }.