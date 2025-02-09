    // BREAK E CONTINUE FUNCIONAM EM TODOS OS LAÇOS DE REPETIÇÃO
    // BREAK: INTERROMPE O LAÇO DE REPETIÇÃO
    // CONTINUE: INTERROMPE A ITERAÇÃO ATUAL E VAI PARA A PRÓXIMA

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('FOR OF');

for (let number of numbers){
    

    if (number === 2){
        console.log('Pulei o número 2');

        continue;   // Pula a iteração atual e vai para a próxima, pulou o numero 2.

        console.log('Não vou ser exibido');

    }
    if (number === 7){  // Se o número for 7, ele vai parar o laço de repetição.
        console.log('7 encontrado, saindo...');

        break;  // Interrompe o laço de repetição.  

        console.log('Não vou ser exibido');

    }

    console.log(number);

}

    // FOR IN
console.log('FOR IN');

for (let i in numbers){
    let number = numbers[i];

    if (number === 2){
        console.log('Pulei o número 2');

        continue;   // Pula a iteração atual e vai para a próxima, pulou o numero 2.

        console.log('Não vou ser exibido');

    }
    if (number === 7){  // Se o número for 7, ele vai parar o laço de repetição.
        console.log('7 encontrado, saindo...');

        break;  // Interrompe o laço de repetição.  

        console.log('Não vou ser exibido');

    }

    console.log(number);

}

    // FOR CLÁSSICO
console.log('FOR CLÁSSICO');

for (let i = 0; i < numbers.length; i++){


    let number = numbers[i];

    if (number === 2){
        console.log('Pulei o número 2');

        continue;   // Pula a iteração atual e vai para a próxima, pulou o numero 2.

        console.log('Não vou ser exibido');

    }
    if (number === 7){  // Se o número for 7, ele vai parar o laço de repetição.
        console.log('7 encontrado, saindo...');

        break;  // Interrompe o laço de repetição.  

        console.log('Não vou ser exibido');

    }

    console.log(number);
}

    // WHILE
console.log('WHILE');

let i = 0;

while(i < numbers.length){
    let number = numbers[i];

    if (number === 2){
        console.log('Pulei o número 2');

        i++;    // Incrementa o i para não ficar em loop infinito. Laço seguro.

        continue;   // Pula a iteração atual e vai para a próxima, pulou o numero 2.

        console.log('Não vou ser exibido');

    }
    if (number === 7){  // Se o número for 7, ele vai parar o laço de repetição.
        console.log('7 encontrado, saindo...');

        break;  // Interrompe o laço de repetição.  

        console.log('Não vou ser exibido');

    }

    console.log(number);

    i++;
}

    // DO WHILE
console.log('DO WHILE');

i = 0;

do {
    let number = numbers[i];

    if (number === 2){
        console.log('Pulei o número 2');

        i++;    // Incrementa o i para não ficar em loop infinito. Laço seguro.

        continue;   // Pula a iteração atual e vai para a próxima, pulou o numero 2.

        console.log('Não vou ser exibido');

    }
    if (number === 7){  // Se o número for 7, ele vai parar o laço de repetição.
        console.log('7 encontrado, saindo...');

        break;  // Interrompe o laço de repetição.  

        console.log('Não vou ser exibido');

    }

    console.log(number);

    i++;

} while (i < numbers.length);