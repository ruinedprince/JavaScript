const num1                          = 5;
const num2                          = 10;

// Aritméticos

//Ordem de prioridade das operações -> Parenteses > Potenciação e Raiz > Multiplicação, Divisão e Restante > Adição e Subtração.

// 1. Soma e/ou concatenação (+)

const soma                          = num1 + num2;

console.log(soma);                                        // 15 OU 510 caso um dos valores seja string (concatenação).

// 2. Subtração (-)
const subtracao                     = num1 - num2;

console.log(subtracao);                                   // -5

// 3. Multiplicação (*)
const multiplicacao                 = num1 * num2;

console.log(multiplicacao);                               // 50

// 4. Divisão (/)
const divisao                       = num1 / num2;

console.log(divisao);                                     // 0.5

// 5. Potência (**)
const potencia                      = num1 ** num2;

console.log(potencia);                                    // 9.765.625

// 6. Restante (%)
const resto                         = num1 % num2;

console.log(resto);                                       // 5

// 7. Operações realizada mais de uma vez/com mais elementos
const adicaoEMultiplicacao          = num1 + num2 * num2;

console.log(adicaoEMultiplicacao);                        // 105, operações seguem ordem de prioridade (* > +).

const adicaoEMultiplicacaoComEscopo = (num1 + num2) * num2;

console.log(adicaoEMultiplicacaoComEscopo);               // 150, operações seguem escopo.

// 8. Incremento ("let + valor" ou "++")
let   num3                          = 1;

num3++;                                                   // 2, pós
++num3;                                                   // 3, pré

console.log(num3);                                        // 3
console.log(num3++);                                      // 3, o valor foi incrementado, porém foi exibido antes, logo, seu valor incrementado (4) está na próxima linha.
console.log(num3);                                        // 4
console.log(++num3);                                      // 5, aqui o numero foi incrementado antes, e depois exibido.

num3 = num3 + 2;                                          // 7, aqui o valor da variavel foi alterada para o seu próprio valor + 2.
num3                                += 2;                 // 9, o mesmo acima porém abreviado.

console.log(num3);                                        // 9


// 9. Decremento ("let - valor" ou "--")
let   num4                          = 1;

num4--;                                                   // 0, pós
--num4;                                                   // -1, pré

console.log(num4);                                        // -1
console.log(num4--);                                      // -1, o valor foi incrementado, porém foi exibido antes, logo, seu valor decrementado (-2) está na próxima linha.
console.log(num4);                                        // -2
console.log(--num4);                                      // -3, aqui o numero foi decrementado antes, e depois exibido.

num4                                = num4 - 2;           // -5, aqui o valor da variavel foi alterada para o seu próprio valor - 2.
num4                                -= 2;                 // -7, o mesmo acima porém abreviado.

console.log(num4);                                        // -7

// 9. Atribuição multiplicação("let * valor" ou "**")
let   num5                          = 2;

num5                                = num5 * 2;           // 4, aqui o valor da variavel foi alterada para o seu próprio valor * 2.
num5                                *= 2;                 // 8, o mesmo acima porém abreviado.

console.log(num5);                                        // 8

// 9. Atribuição multiplicação("let * valor" ou "**")
let   num6                          = 3;

num6                                = num6 ** 2;          // 9, aqui o valor da variavel foi alterada para o seu próprio valor ** 2.
num6                                **= 2;                // 81, o mesmo acima porém abreviado.

console.log(num6);                                        // 81

// 10. NaN (Not a Number), parseInt (inteiro), parseFloat (flutuante/decimal) e Number(sem distinção).
const num7                          = 10;
const nome                          = 'prince';

console.log(num7 * nome);                                 // NaN

const num8                          = 11;
const num9                          = '2';

console.log(num8 * num9, typeof num9);                    // 22 string, O motor do JavaScript tenta resolver uma operaçao quando julgar possível, mesmo quando a tipagem for diferente.

const num10                         = parseInt('8.5');    // Conversão do tipo String para number (inteiro).

console.log(num8 * num10, typeof num10);                  // 88 number, (int)

const num11                         = parseFloat('8.5');  // Conversão do tipo String para number (flutuando/decimal).

console.log(num8 * num11, typeof num11);                  // 93.5 number, (float)

const num12                         = Number('7.62');     // Conversão do tipo String para number, a máquina julga e calcula conforme for necessário.

console.log(num8 * num12, typeof num12);                  // 83.82000000000001 number