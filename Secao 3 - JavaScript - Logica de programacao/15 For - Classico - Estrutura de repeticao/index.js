console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5'); // Vai até a linha 5 de forma manual.

    // Estrutura de repetição
    // for (inicialização; condição; incremento) { }
    // i significa index (indexador, indice)
for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);    // Vai até a linha 5 de forma automática.

}
for (let i = 4; i <= 50; i++) {
  console.log(`Linha ${i}`);    // A partir da linha 40 até a linha 50 de forma automática.

}
for (let i = 10; i >= 100; i+= 10){
    console.log(`Linha ${i}`);    // A partir da linha 10 até a linha 100 de forma automática de 10 em 10.
}
for (let i = 10; i >= 0; i--){
    console.log(`Linha ${i}`);    // A partir da linha 10 até a linha 0 de forma automática.

}
for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);

}

    // Exemplo de for
    //           0       1       2      3         4
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i]);

}