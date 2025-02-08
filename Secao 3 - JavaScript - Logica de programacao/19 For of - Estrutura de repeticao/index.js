    // For clássico - Geralmente com iteráveis (arrays ou strings)
    // For in - Retorna o índice ou chave (string) [iteráveis, objetos]
    // For of - Retorna o valor em si [iteráveis, arrays, strings]

    //        0123456789...
const nome = 'Gabriel Maciel';

for (let i = 0; i < nome.length; i++){  // for normal
    console.log(nome[i]);   // G, a, b, r, i, e, l, M, a, c, i, e, l

}
for (let i in nome){  // for in
    console.log(nome[i]);   // G, a, b, r, i, e, l, M, a, c, i, e, l

}
for (let v of nome){  // for of. Retorna o valor em si presente no objeto.
    console.log(v);   // G, a, b, r, i, e, l, M, a, c, i, e, l

}

const nomes = ['Gabriel', 'Maciel', 'de', 'Oliveira'];

for (let v of nomes){
    console.log(v);   // Gabriel, Maciel, de, Oliveira

}

    // Quando usar for in: quando precisar de índices ou chaves do objeto.
    // Quando usar for of: quando precisar de valores diretos do objeto.

    // forEach -> Semelhante ao for in e for of, porém, com uma diferença: ele não retorna um novo array. Ele apenas itera sobre o array com a função que passarmos.    
nomes.forEach(function(valor) { // forEach apenas com valor.
    console.log(valor);   // Gabriel, Maciel, de, Oliveira

});
nomes.forEach(function(valor, indice) { // forEach com valor e índice.
    console.log(valor, indice);   // Gabriel 0, Maciel 1, de 2, Oliveira 3

})
nomes.forEach(function(valor, indice, array) { // forEach com valor, índice e array.
    console.log(valor, indice, array);   // Gabriel 0 ['Gabriel', 'Maciel', 'de', 'Oliveira'], Maciel 1 ['Gabriel', 'Maciel', 'de', 'Oliveira'], de 2 ['Gabriel', 'Maciel', 'de', 'Oliveira'], Oliveira 3 ['Gabriel', 'Maciel', 'de', 'Oliveira']
});

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Maciel'
};

    // for classico não consegue iterar sobre objetos, apenas sobre arrays.	
    // for in consegue iterar sobre objetos.
for (let i in pessoa){
    console.log(pessoa[i]);   // Gabriel, Maciel

}

    // for of não consegue iterar sobre objetos.
