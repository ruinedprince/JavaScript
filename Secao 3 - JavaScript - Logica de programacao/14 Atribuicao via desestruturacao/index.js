    // A diferença é que, neste código, estamos utilizando a desestruturação com objetos. A forma de desestruturação de arrays é semelhante, mas com objetos, é necessário utilizar chaves {}.

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Maciel',
    idade: 21,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const nome = pessoa.nome;

console.log(nome);  // Gabriel

const { nome: n = '', sobrenome: surname, idade: age } = pessoa;    // nome: n = '' -> Atribuição via desestruturação com valor padrão. Isso é útil para evitar erros caso a propriedade não exista no objeto.

console.log(n, surname, age);  // Gabriel Maciel 21

const { endereco: { rua: street = '', numero: number }, endereco } = pessoa;

console.log(street, number);  // Av Brasil 320. Atribuição via desestruturação de objetos aninhados.
console.log(endereco);  // { rua: 'Av Brasil', numero: 320 }

const { nome: name, ...resto } = pessoa;  // Atribuição via desestruturação com rest operator (operador de resto).
console.log(name);  // Gabriel
console.log(resto);  // { sobrenome: 'Maciel', idade: 21, endereco: { rua: 'Av Brasil', numero: 320 } }