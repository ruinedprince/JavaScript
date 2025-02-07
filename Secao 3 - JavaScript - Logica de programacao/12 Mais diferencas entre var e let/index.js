    //  let tem escopo de bloco { ... bloco }.
    //  var só tem escopo de função.
    // variavel != { variavel }.

    // ESCOPO DE BLOCO
let nome = 'Gabriel';

var nomw2 = 'Gabriel';

// let nome = 'Otávio';  // Não é possível redeclarar uma variável com let.

var nome2 = 'Maciel';  // É possível redeclarar uma variável com var independente do escopo.

console.log(nome, nome2);   // Gabriel Maciel

const verdadeira = true;

if (verdadeira) {
    let nome = 'Maciel';    // É possível redeclarar uma variável com let dentro de um bloco.
    
    var nome2 = 'de Oliveira'; 

    console.log(nome, nome2);   // Maciel de Oliveira

    if (verdadeira) {
        var nome2 = 'Gabriel';  // É possível redeclarar uma variável com var independente do escopo.

        // console.log(nome, nome2);   // Maciel Gabriel

        let nome = 'de Oliveira';  // Caso declare a variável com let após a redeclaração com var, o console.log(nome) retornará um erro, mesmo que a variável já tenha sido declarada anteriormente fora desse bloco. Pois elas são consideradas diferentes.
         
    }

}

console.log(nome, nome2);   // Gabriel Gabriel. Mesmo que tenha sido redeclarada dentro do bloco, a variável let nome não sofre alteração fora do bloco. Pois elas são consideradas diferentes. Já a variável var nome2 sofre alteração fora do bloco, pois var não tem escopo de bloco.

    // ESCOPO DE FUNÇÃO
var sobrenome = 'Maciel';

function falaOi() {
    var nome3 = 'Gabriel';  // Variável com escopo de função.
    console.log(nome3);
    console.log(sobrenome); // É possível acessar a variável sobrenome, pois ela foi declarada fora da função falaOi.

}

// console.log(nome3);  // Retorna um erro, pois a variável nome3 não foi declarada fora da função falaOi.
    //  Básicamente, variável com var podem "entrar" e "sair" de escopos de bloco, mas não podem "sair" de escopos de função.
    //  Variável let não podem "entrar" nem "sair" de nenhum tipo de escopo.

falaOi();

    // HOISTING
console.log(sobrenome1);    // Retorna undefined, pois a variável foi declarada após o console.log. Ele "sobe" a variável para o topo do código, mas não o valor atribuído a ela.

var sobrenome1 = 'Maciel';