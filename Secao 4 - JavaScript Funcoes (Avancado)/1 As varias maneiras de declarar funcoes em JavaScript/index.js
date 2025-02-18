    // Declaração de função (Function hoisting)
falaOi();   // Por mais que eu esteja chamando a função antes de declara-lá, o JavaScript faz o "Hoisting", "subindo" a função para o topo do código e o executando normalmente.

function falaOi() {
    console.log("Oie");

}

    // First-class objects (Objetos de primeira classe). É possível utilizar a função como dado de uma variável (como visto anteriormente).
    // Function expression
const souUmDado = function() {  // A constante está levando a função (anônima) como dado/valor a ser armazenado, e isso é completamente normal.
    console.log('Sou um dado.');

};

souUmDado();    // Aqui estou chamando a função anônima referenciando a variável em que ela está armazenada como se ela em si fosse uma função.

function executaFuncao(parametro) {
    console.log('Vou executar sua função abaixo: ');
    parametro();    // Recebe o parametro e o executa como uma função;

}

executaFuncao(souUmDado);   // Como declaramos a constante com o valor de uma função, é possível usá-la como argumento para que uma função se torne parametro em outras funções (PROGRAMAÇÃO UHUU ! ! !).

    // Arrow function (basicamente uma function expression só que bem mais curta)
const funcaoArrow = () => { // '() =>' é igual a 'function()'.
    console.log('Sou uma arrow function');

};

funcaoArrow();

function aFuncao(){
    return;

}

    // Exemplos de funcao como dado
setInterval (function(){}, 1000);   // Declaração de uma função anonima como parametro de um setInterval.
setInterval (aFuncao, 1000);    // Referencia de uma função ou variável com dado de função antes já declarada.

const nomeDaVariavel = function nomeDaFuncao() {    // É possível nomear uma faunção dentro de uma varável, por mais que isso não seja muito comum, pode ser útil em alguns casos.
    console.log('Sou um dado.')

}
    // Função dentro de objeto
const objeto = {
    falar: function() { // Função anônima dentro de um atributo do objeto
        console.log('Estou falando...');    //  Ficou um código bonito slk...

    }

}

objeto.falar(); // Como a função é anônima é preciso referenciar o atributo como se ele fosse a função.

const obj = {
    falar() {   // É possível fazer com que o próprio atributo seja a função, ele funciona da mesma forma que antes.
        console.log('Estou falando...');
    }

}

obj.falar();    // Referenciando o proprio atributo que já é uma função.