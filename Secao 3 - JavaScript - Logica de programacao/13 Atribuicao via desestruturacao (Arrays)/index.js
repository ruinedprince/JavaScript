    // Atribuição via desestruturação é uma forma de atribuir valores de um array ou objeto a variáveis de forma mais simples.

let a = 'A';
let b = 'B';
let c = 'C';

console.log(a, b, c);  // A B C

const letras = ['B', 'C', 'A'];

[a, b, c] = letras;  // Atribuição via desestruturação.

console.log(a, b, c);  // B C A


    // REST OPERATOR e SPREAD OPERATOR
    // ...rest -> Rest Operator (operador de resto).
    // ...spread -> Spread Operator (operador de propagação).

    //           0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const indicezero = numeros[0];

console.log(indicezero);  // 1

const [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero, sextoNumero, setimoNumero, oitavoNumero, nonoNumero] = numeros;  // Atribuição via desestruturação.

console.log(quartoNumero, quintoNumero);  // 4 5

const [primeiro, segundo, ...resto] = numeros;  // Atribuição via desestruturação com rest operator (operador de resto).

console.log(primeiro, segundo);  // 1 2
console.log(resto);  // [3, 4, 5, 6, 7, 8, 9]

const [um, , tres, , cinco, , sete, , nove] = numeros;  // Atribuição via desestruturação com espaços vazios.


    //                0          1          2
    //             0  1  2    0  1  2    0  1  2       
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros2[1][2]);  // 6

const [,[,,seis],] = numeros2;  // Atribuição via desestruturação de um array multidimensional.

console.log(seis);  // 6

const [lista1, lista2, lista3] = numeros2;

console.log(lista3[2]);  // 9