let num = 10;

if (num >= 0){
    console.log('Sim, o número é maior ou igual a zero.');

}
// O if e o else depéndem um do outro, justamente por se oporem.
if (num >= 0 && num <= 5){  // Se (isso ocorrer), {faça isso}
    console.log('O número está entre 0 e 5.');

} else if (num >= 6 && num <= 8){   // Se não, se (isso ocorrer), {faça isso}
    console.log('O número está entre 6 e 8.');

/*} else if (1 === 1) {   // Essa condição é inútil para a lógica do meu código, porém com a existência dela, a condição passa a ter 2 valores verdadeiros, como esse vem em primeiro, a informação é passada e toda a lógica de condição aqui é destruída.
    console.log('LITERAL'); 
*/
} else if (num >= 9 && num <= 11) { // Se não, se (isso ocorrer), {faça isso}
    console.log('O número está entre 9 e 11.');

} else {    // Se não, {faça isso}
    console.log('O número não está entre 0 e 11.');

}

if (1 === 1) {   // Se há a REAL NECESSIDADE da inserção dessa outra lógica de condição no código, é possível adiciona-lá em outra parte como um novo if de forma simples e independente, sem comprometer outra parte do código.
    console.log('LITERAL');

}
console.log('Essa linha será executada de qualquer forma por não estar dentro da lógica de condição');