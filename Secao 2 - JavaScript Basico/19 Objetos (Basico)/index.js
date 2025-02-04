const nome01 = 'Gabriel';   // A variaveis estão agrupadas de maneira manual (01, 02, etc.) por meio da criação de várias delas, porém, essa não é a forma mais eficiente de se fazer isso.
const sobrenome01 = 'Maciel';
const idade01 = 21;
const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

const pessoa1 = {   //  Objeto é criado com a inserção de chaves
    nome: 'Gabriel',    // Atributos são as "variáveis" dentro de um objeto

    sobrenome: 'Maciel',

    idade: 21

};

console.log(pessoa1.nome);  // Para referencia à um atributo, deve referencia-lo da seguinte forma: objeto.pessoa; Gabriel.
console.log(pessoa1.sobrenome); // Maciel

const pessoa2 = {
    nome: 'Maria',

    sobrenome: 'Oliveira',

    idade: 55

};

console.log(pessoa2.nome);  // Maria
console.log(pessoa2.sobrenome); // Oliveira

function criaPessoa (n, s, i) {  // É possível utilizar uma função para delcarar um objeto diretamente.
    return {   // O objeto pode ser retornado pela função também diretamente.
        n, s, i

    }
    
}

const pessoa3 = criaPessoa('Luiz', 'Miranda', 25);  // Argumentos a serem passado como parâmetros para a função.
const pessoa4 = criaPessoa('Maria', 'Oliveira', 32); 
const pessoa5 = criaPessoa('João', 'Moreira', 55); 
const pessoa6 = criaPessoa('Junior', 'Lara', 44); 
const pessoa7 = criaPessoa('Jean', 'Otávio', 69); 

console.log(pessoa3.nome, pessoa4.nome);    // Luiz Maria

const pessoa8 = {
    nome: 'Gabriel',

    sobrenome: 'Maciel',

    idade: 21,

    fala() {    // É possível criar funções dentro de objetos, sem a necessidade da declaração "function", apenas como um método.
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); //  this significa isso, se referencia a ESSE OBJETO NESSE CONTEXTO (pessoa8).

        console.log(`A minda idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        ++this.idade;   // Pré-incrementa o valor da idade em +1
    }

}

pessoa8.fala(); // É possível chamar funções dentro de objetos da seguinte forma: objeto.função(); Gabriel Maciel está falando oi...
pessoa8.incrementaIdade(); // Aumenta a idade em 1
pessoa8.fala(); // Gabriel Maciel está falando oi... A minda idade atual é 22

