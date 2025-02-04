/*
Operadores de comparação
>   Maior que
>=  Maior ou igual a
<   Menor que
<=  Menor ou igual a
==  Igualdade
=== Igualdade estrita
!=  Diferença
!== Diferença estrita
*/

    // MAIOR QUE
let comp = 10 > 5;

console.log(comp);    // true. 10 é maior do que 5.

    // MAIOR OU IGUAL A
comp = 10 >= 5;

console.log(comp);  // true. Mesmo que 10 não seja igual a 5, ele ainda é maior, e a comparação só precisa que uma das condições sejam verdadeiras para que ela seja true (se é maior ou se é igual).

comp = 10 >= 11;

console.log(comp);  // false. Nenhuma das opções é verdadeira, 10 não é maior nem igual a 11.

    // MENOR QUE
comp = 10 < 11;

console.log(comp);  // true. 10 é menor que 11.

    // MENOR OU IGUAL A
comp = 10 <= 11;

console.log(comp);  // true. Mesmo que 10 não seja igual a 11, ele ainda é menor, e a comparação só precisa que uma das condições sejam verdadeiras para que ela seja true (se é menor ou se é igual).

comp = 12 <= 11;

console.log(comp);  // false. Nenhuma das opções é verdadeira, 12 não é menor nem igual a 11.

    // IGUALDADE
let num1 = 10;
let num2 = 10;

comp = num1 == num2;

console.log(comp);  // true. O Valor de num1(10) e de num2(10) é o mesmo.

num2 = 11;

comp = num1 == num2;

console.log(comp);  // false. O Valor de num1(10) não é igual ao novo valor de num2(11).

num2 = '10';

comp = num1 == num2;

console.log(comp);  // true. A linguagem comparou um number (num1) com uma string (num2). O que não é correto, pois são duas coisas diferentes, isso ocorre por causa da coerção de tipo, feito automaticamente pelo motor no momento da comparação.

    // IGUALDADE ESTRITA
comp = num1 === num2;

console.log(comp);  // false. O motor, mesmo sabendo que as variaveis possui valores iguais, entende que são de tipos diferentes, então não são a mesma coisa.

num2 = 10;

comp = num1 === num2

console.log(comp);  // true. No caso de igualdade estrita, é necessário que duas condições sejam atendidas para que a comparação seja verdadeira.

    // DIFERENÇA
num2 = '10';

comp = num1 != num2;

console.log(comp);  // false. O valor de num1(10), é igual ao valor de num2('10'), mesmo que sejam tipos diferentes.

    // DIFERENÇA ESTRITA
comp = num1 !== num2;

console.log(comp);  // true. Por mais que o valor seja igual(num1 = 10 e num2 = '10'), seus tipos são diferentes, logo, não são iguais.