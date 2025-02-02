let num1 = 9.54578;

// Objeto Math
// ARREDONDAR PARA BAIXO (floor (chão))
console.log(Math.floor(num1)); // 9
// ARREDONDAR PARA CIMA (ceil (teto))
console.log(Math.ceil(num1));  // 10
// ARREDONDAR PARA O VALOR MAIS PRÓXIMO (round)
console.log(Math.round(num1)); // 10

num1 = 9.49

console.log(Math.round(num1)); // 9

num1 = 9.54578;

// ENCONTRAR O MAIOR VALOR ENTRE VÁRIOS (max)
console.log(Math.max(1, 2, 3, 4, 5)); // 5
// ENCONTRAR O MENOR VALOR ENTRE VÁRIOS (min)
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// GERAR E RETORNAR UM VALOR ALEATÓRIO (random)
let  aleatorio = Math.random()

console.log(aleatorio); // valor aleatório

aleatorio = Math.random() * (10 - 5) + 5 // calculo random * (max - min) + min serve para limitar o valor random que será retornado para um valor maior ou igual ao mínimo e menor ou igual ao máximo

console.log(aleatorio); // valor aleatório nunca maior que 10 e nunca menor que 5

aleatorio = Math.round(aleatorio); // é possível arredondar o valor aleatório, assim como qualquer outro

console.log(aleatorio);                   // valor aleatório nunca maior que 10 e nunca menor que 5 arredondado
// RAIZ QUADRADA (sqrt)
console.log(Math.sqrt(Math.floor(num1))); // 3
// RAIZ CÚBICA (cbrt)
console.log(Math.cbrt(8));                // 2

// RAIZ QUADRADA ALTERNATIVA (**)
num1 = 25;

console.log(num1 ** 0.5)     // 5
// Valor de PI (PI)
console.log(Math.PI);        // 3.141592653589793
// Potenciação (pow)
console.log(Math.pow(2, 3)); // 8

// RETORNO DE INFINIDADE (Infitiny)
console.log(100 / 0); // Infinity, toda conta que se aproxima de 0 se torna extremamente grande, chegando a um ponto onde ele considera um valor "infinito"