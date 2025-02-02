// Execício: Faça com que o valor de A tenha o valor de B, o valor de B tenha o valor de C e o valor de C tenha o valor de Am as sem digitar os valores literais de forma direta.

let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(`valor de A: ${varA}, valor de B: ${varB}, valor de C: ${varC}`);

let aux = varA; // Variável auxiliar para armazenar valor de varA

varA = varB; // B

varB = varC; // C

varC = aux; // A

console.log(`valor de A: ${varA}, valor de B: ${varB}, valor de C: ${varC}`);

//Método alternativo

varA = 'A';
varB = 'B';
varC = 'C';

console.log(`valor de A: ${varA}, valor de B: ${varB}, valor de C: ${varC}`);

[varA, varB, varC] = [varB, varC, varA]; // Transferência de valor por meio de array (?)

console.log(`valor de A: ${varA}, valor de B: ${varB}, valor de C: ${varC}`);