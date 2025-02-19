    // EU NÃO ENTENDI ! ! !
    
    // CLOSURES - A capacidade de uma função ter outra dentro de si, e essa função interior ter a capacidade de acessar os escopos dos diferentes contextos que o código a colocar (acho que é isso eu não entendi perfeitamente, só sei que os valores mudam).

function retornaFuncao () {
    const nome = 'Gabriel'; // No escopo dessa função eu tenho a variavel gabriel.

    return function () {    // Posso retornar uma função para que ela tenha acesso as variaveis do pai dela (e do pai do pai dela, e do pai do pai do pai dela, etc.).
        return nome;

    }

}  

const funcao = retornaFuncao();   // atribuo a função retornada por ela à variável funcao (que beleza).

console.log(funcao);    // [Funcion (anonymous)].

console.dir(funcao);    // Exibido no console do navegador. Mostra que a funcao possui acesso à 3 escopos: ela mesma, o pai dela (retornaFuncao) e o global.

function retornaFuncao2 (nome) {    // função exterior recebendo parâmetro
    return function () {
        return nome;    // retornando parametro da função exterior na função interior

    };

}

const funcao1 = retornaFuncao2('Gabriel');
const funcao2 = retornaFuncao2('Maciel');

console.dir(funcao1);   // o closure da funcao1, que recebe o retorno do retornaFuncao2, leva 'Gabriel' como argumento, fazendo com que o parametro seja nome: "Gabriel".
console.dir(funcao2);   // Mesma coisa só que com Maciel.
console.log(funcao1(), funcao2());  // Gabriel Maciel. Os valores sempre serão esses.