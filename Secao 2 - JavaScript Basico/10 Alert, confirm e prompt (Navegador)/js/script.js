//alert('Minha mensagem!');                        // Chamando função, função = ação. No navegador, não aponta para lugar nenhum da memória, retorna valor indefinido.

// window.confirm('Deseja realmente apagar?');      // No navegador, retorna true ou false.
// window.prompt('Digite seu nome: ');              // No navegador, retorna o valor inserido.

// const confirma = confirm('Gostaria de apagar?'); // Atribui o valor retornado pela função confirm (true ou false) para a variável confirm. No navegador, retorna valor indefinido pois esse já foi "capturado" pela variável confirma, nao restando nada.

// console.log(confirma);                           // No navegador, imprime true ou false.

// Exercício no navegador

let num1 = prompt('Digite um número: ');
let num2 = prompt('Digite outro número: ');

let soma = num1 + num2; // Concatena as Strings

alert(`Resultado em String = ${soma}`); // Exibe resultado da concatenação.

num1 = Number(num1); // Converte as Strings para Number
num2 = Number(num2);

soma = num1 + num2; // Somas os Numbers

alert(`Resultado em Number = ${soma}`); // Exibe resultado da soma.