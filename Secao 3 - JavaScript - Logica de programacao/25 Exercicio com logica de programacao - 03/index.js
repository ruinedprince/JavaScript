/*
Escreva uma função que recebe um número e retorne o seguinte:
Se o número é divisivel por 3 => Fizz
Se o número é divisível por 5 => Buzz
Se o número é divisível por ambos => FizzBuzz
Se o número NÃO é divisivel por 3 e 5 => Retorna ele mesmo
*/

function fizzBuzz (number) {
    if (number % 3 == 0 && number % 5 == 0) return 'FizzBuzz';
    if (number % 3 == 0)                    return 'Fizz';
    if (number % 5 == 0)                    return 'Buzz';
    
    return number;

}
function random   ()       {
    const r = Math.random() * (100 - 0) + 0;
  
    return Math.floor(r); // Math.floor arredonda para baixo. Ex: 9.9 vira 

}

const num = random();

console.log(`Número gerado: ${num}.`)
console.log(fizzBuzz(num));