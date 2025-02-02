let num1 = 1;           //number
let num2 = 2.545454545; //number

console.log(num1 + num2);            // 3.545454545
console.log(num1.toString() + num2); // 12.545454545, usando a função (()) toString, eu estou convertendo TEMPORARIAMENTE uma variavel do tipo number para o tipo string.
console.log(typeof num1);            // num1 ainda é um number.

num1 = num1.toString(); // Utilizando a função toString como atribuição, é possível converter o tipo number do valor da variavel para string permanentemente.

console.log(typeof num1); // string

num1 = Number(num1);

console.log(typeof num1); // number

num1 = num1.toString(2); // Usando 2 como parametro da função, temos a representação binária do valor da variavel.
num1 = 1;

console.log(num2.toFixed(2));        // 2.55, usando a função toFixed, é possível limitar a quantidade de casas decimais do valor da variável e arredonda-lo, isso conforme o parâmetro inserido.
console.log(Number.isInteger(num1)); //true, o método number.isInteger verifica se o number é um, valor inteiro (sem csa decimal, ponto flutuante), retornando um valor de verdadeiro ou falso.

let temp = num1 * 'Ola'; // Multiplicação com erro, number com string;

console.log(temp);               // NaN
console.log(Number.isNaN(temp)); // true, o método Number.isNaN verifica se o valor no parâmetro é um "Not a Number", retornando um valor de verdadeiro ou falso.

// PADRÃO IEEE 754-2008
num1 = 0.7;
num2 = 0.1;

console.log(num1 + num2); // 0.7999999999999999, retorna um resultado impreciso.

num1 = 0.7;
num2 = 0.1;
num1 += num2; // num1 = 0.7 + 0.1 = 0.8

console.log(num1); // 0.7999999999999999

num1 += num2; // 0.9
num1 += num2; // 1.0

console.log(num1); // 0.9999999999999999
// toFixed não resolve a imprecisão, já que seu arredondamento é apenas visual
console.log(num1.toFixed(2));
console.log(num1);                   // 1.00
console.log(Number.isInteger(1.00)); // true
console.log(Number.isInteger(num1)); // false, por mais que seja exibido o mesmo valor, eles não são os mesmo, pois num1 ainda é considerado 0.9999999999999999

// é possível resolver esse problema com a função parseFloat ou Number
num1 = Number(num1.toFixed(2));

console.log(num1);                   // 1 real
console.log(Number.isInteger(num1)); // true

num1 += num2; 

console.log(num1); // 1.1

num1 = 0.7;
num2 = 0.1;
num1 = ((num1 * 100) + (num2 * 100)) / 100; // Forma "manual" de resolver esse problema de imprecisão

console.log(num1); 