// RETURN - TERMINA A FUNÇÃO E RETORNA UM VALOR

function soma (a, b) {
    return a + b;   // Retorna o valor requisitado, nesse caso, uma soma.

}

console.log(soma(5, 2));    // 7. O console log referenciou a função com 2 e 5 como argumentos, a função foi executada usando esse argumentos como parametros e então o console log exibe o RETORNO dessa função.

function soma2 (a, b) {
    console.log(a + b);  // Essa função não retorna nada, apenas executa o console log que está dentro dela.
}

function criaPessoa(n, sn) {
    return {    // Return com um objeto literal (sem declaração anterior).
        nome: n,
        sobrenome: sn
    };

}

const p1 = criaPessoa('Gabriel', 'Maciel');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};  // p1 e p2 funcionam basicamente da mesma forma, porém o uso de função pode ajudar a criação de vários objetos, evitando a criação de um objeto unico várais vezes.

console.log(p1);    // { nome: 'Gabriel', sobrenome: 'Maciel' }
console.log(p2);    // { nome: 'João', sobrenome: 'Oliveira' }
console.log(typeof p1); // object
console.log(typeof p2); // object. ambos são do mesmo tipo, mesmo que criados de formas diferentes.

    // FUNÇÃO CLOSURE - fecha o escopo depois dele ter sido usado

function falaFrase(comeco) {
    function falaResto (resto) {    // função dentro de outra
        return comeco + ' ' + resto;    // é possível utilizar parametros da função externa na função interna.

    }

    return falaResto;

}

const olaMundo = falaFrase('Olá');

console.log(olaMundo);  // [Function: falaResto]. a const olaMundo recebe todos os valores e funcionalidades no retorno da função a qual ela está referenciando: falaFrase. E pelo retorno ser uma função em si, é basicamente como se olaMundo se transformasse na função retornada.
console.log(olaMundo('mundo!'));    // Sabendo disso, ao passar um argumento referenciando essa const (que agora se transformou numa função), a função falaResto funciona normalmente.

    // Exemplo de utilidade
    // forma como funções são comumente usadas
function duplica (n) {
    return n * 2;
    
}
function triplica (n) {
    return n * 3;
    
}
function quadriplica (n) {
    return n * 4;
    
}

console.log(duplica(2));    // 4
console.log(triplica(2));   // 6
console.log(quadriplica(2));    // 8

function criaMultiplicador (multiplicador){
    return function (n) {   // fução literal no proprio return
        return n * multiplicador;

    };

}

const duplica2     = criaMultiplicador(2);  //  essas consts se "transformam" nas funções retornadas pela função que elas referenciam, passando um valor como argumento para essa função maior.
const triplica2    = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

console.log(duplica2(2));   // 4. e após isso, é possível as referenciar com um argumento (já que agora elas se comportam como funções) para que o valor do argumento atual seja multiplicado pelo valor do parametro argumentado anteriormente.
console.log(triplica2(2));  // 6
console.log(quadriplica2(2));   // 8