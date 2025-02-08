    // For in -> lê os índices ou chaves do objeto
    //         0       1       2
let frutas = ['Pera', 'Maça', 'Uva'];

for (let i = 0; i < frutas.length; i++){  // for normal
    console.log(frutas[i]);  // Pera, Maça, Uva

}
for (let i in frutas){  // for in
    console.log(i, frutas[i]);  // 0 Pera, 1 Maça, 2 Uva

}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Maciel',
    idade: 21

};

console.log(pessoa.nome);  // Gabriel
console.log(pessoa['nome']);  // Gabriel

for (let i in pessoa){  // for in lendo indices do objeto
    console.log(i, pessoa[i]);  // nome Gabriel, sobrenome Maciel, idade 21

}

    // For clássico - Geralmente com iteráveis (arrays ou strings)
    // For in - Retorna o índice ou chave (string) [iteráveis, objetos]