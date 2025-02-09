    // Diferente do for, o while e o do while são estruturas de repetição que não possuem um número fixo de repetições.
    // O while é uma estrutura de repetição que recebe uma condição para ser executada. Enquanto a condição for verdadeira, o bloco de código será executado.

let i = 0;  // Variavel de controle foi criada fora do laço de repetição

while (i <= 10) {
    console.log(i);

    i++;  // Incremento da variavel de controle. Se não houver incremento, o laço de repetição será infinito.
    
}

const nome = 'Gabriel';

i = 0;

while (i < nome.length) {
    console.log(nome[i]);   // Imprime cada letra do nome
    i++;

}

console.log('Segue a vida...');

const min = 1;
const max = 50;

function random(min, max) {
    const r = Math.random() * (max - min) + min;    // Gera um número aleatório entre min e max

    return Math.floor(r);   // Math.floor arredonda para baixo. Ex: 9.9 vira 9

}

let randomNum = random(min, max);
var aux = 0;
console.log(randomNum);

while (randomNum !== 10) {
    randomNum = random(min, max);
    
    if (randomNum !== 10) {
        aux++;

    }
    if (randomNum === 10) {
        console.log('Número 10 foi encontrado');
        console.log(`Número de tentativas: ${aux}`);

    }

}

    // DO WHILE
    // O do while é uma estrutura de repetição semelhante ao while, porém, com uma diferença: ele executa o bloco de código pelo menos uma vez antes de verificar a condição.

do {
    randomNum = random(min, max);

    if (randomNum !== 10) {
        aux++;

    }
    if (randomNum === 10) {
        console.log('Número 10 foi encontrado');
        console.log(`Número de tentativas: ${aux}`);

    }

} while (randomNum !== 10);