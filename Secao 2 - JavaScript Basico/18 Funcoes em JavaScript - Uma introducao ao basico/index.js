function saudacao(){    // Criação da função, não funciona sem ser chamada.
    console.log('Bom dia!');    // Bom dia!

}   // Não é necessário o uso de ";" na declaração de uma function.

saudacao(); // Chamando a função para que o que estiver dentro dela seja executado.

function funComParametro(nome){
    console.log(`Bom dia, ${nome}!`);

}

funComParametro('Gabriel'); // Quando chamamos a função, é possível inserir um parametro com um valor que será levado em consideração quando a função for executada.
funComParametro('Maria');  // É possível executar a função com diferentes quantas vezes quiser em qualquer lugar do código, Bom dia, Maria!
funComParametro('Felipe'); // Bom dia, Felipe!

function funComParametroEmVar(nome){
    console.log(`Bom dia, ${nome}!`);

}

let vari = funComParametroEmVar('Luiz');    // É possível armazenar o valor resultando da função em uma variavel, porém, é necessário retorna-lá para que armazene o valor requirido, caso contrario, retorna indefinido.

console.log(vari);  // undefined.

function funComParametroEmVarComReturn(nome){
    return `Bom dia, ${nome}!`; // Por meio do return, retorna o valor requirido.
  
}

vari = funComParametroEmVarComReturn('Luiz');

console.log(vari);  // Bom dia, Luiz!.


function soma(x, y){
    const res = x + y;

    return res;

    console.log('Olá mundo');   // Tudo que estiver abaixo do return de uma função não será executado.

}

console.log(soma(2, 2));    // É possível chamar uma função dentro de outras; 4.
console.log(soma(3, 1));    // 4
console.log(soma(5, 10));   // 15

    // console.log(res); // Não é possível acessar nada dentro de uma função caso execute uma chamada fora da mesma, ela está protegida por escopo; ReferenceError: res is not defined.

let res = soma(2, 2); // Por mais que tenha o mesmo nome da variável dentro da função, o Motor não interpreta como erro dado ao fato de que o primeiro const res está protegido pelo escopo.

console.log(res);   // 4.

res = soma(5);   // Quando a função possui espaço para parâmetros e o código não preenche todos esses espaços, é possível que o código não se comporte da maneira esperada.

console.log(res);   // Como a função realiza a soma de 2 valores, mas os valores não foram definidos na hora de chamar essa função, ela realiza a soma com valores 'undefined', resultando num NaN; NaN.

res = soma('Gabriel', ' Maciel');

console.log(res);   // Gabriel Maciel.

function somaComValorPadrao(x = 1, y = 1){  // Na chamada da função, caso um valor de parametro não seja inserido, a função pode possuir valores padrões para que possa se executado da maneira correta.
    const res = x + y;

    return res;

}

res = somaComValorPadrao(5);  // Nessa chamada, x terá o valor de 5, mas como o parametro de y nao foi definido, ele continuará com o valor de 1.

console.log(res);   // 6.

const raiz = function(n){    // É possível declarar uma function dentro de uma variável, apelidada de função anônima (por não possuir nome próprio), porém o uso de ";" é necessário.
    return Math.sqrt(n);

};

console.log(raiz(9));   // 3
console.log(raiz(16));  // 4
console.log(raiz(25));  // 5

const raizArrow = n => Math.sqrt(n);  // É possível declarar funções com o uso de "=>", essas são chamadas de ArrowFunction, podendo ser anônima (como nesse caso) ou não, elas são funções montadas de forma simplificada, sem o uso de chaves, sem o uso de return e, caso tenha apenas um parametro, sem parentes.

console.log(raizArrow(9));   // 3
console.log(raizArrow(16));  // 4
console.log(raizArrow(25));  // 5