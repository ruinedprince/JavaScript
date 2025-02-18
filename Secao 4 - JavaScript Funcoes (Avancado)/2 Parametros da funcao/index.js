function funcao() { // Função extremamente básica, simples e sem parâmetro.
    console.log('Oie');

}

funcao();

function funcao2() {    // Por mais que a referencia possua um argumento, minha função não possui parâmetro. Ele executa normalmente mesmo que a função receba vários argumentos sem um parametro para recebe-los pois ele simplesmente os ignora.
    console.log('Oie');
    console.log(arguments); // [Arguments] { '0': 'Valor', '1': 1, '2': 2, '3': 3 ... }.O JS por padrão disponibiliza a variável arguments (SÓ UTILIZAVEL COM FUNÇÕES DELCARADAS COM 'function', 'arrow function' NÃO POSSUI), é possível chama-lá dentro de uma função mesmo que eles não tenham sido usados como parametros, ele é exibido como um objeto.
    console.log(arguments[10]); // Gabriel

}

funcao2('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Gabriel');   // Estou enviando um argumento para suprir o valor de parâmetro para a minha função.

function funcao3() {
    let total = 0;
    for (let argumento of arguments) {  // É possível utilizar o arguments como um "parametro substituto", já que as informações contida nele são as mesmas, só não estão filtradas.
        total += argumento;

    }
    console.log(total); // 28
}

funcao3(1, 2, 3, 4, 5, 6, 7);

function funcao4(a, b ,c) {    // parametros passados (1, 2 e 3, nesse caso.)
    let total = 0;
    for (let argumento of arguments) {  // arguments continua armazenando todos os argumentos passado, nao importando quantos parametros há na função.
        total += argumento;

    }
    console.log(total, a, b, c); // 10 1 2 3
}

funcao4(1, 2, 3, 4);

    // MAIS ARGUMENTOS DO QUE PARÂMETROS
function funcao5(a, b, c, d, e, f) {    // Apenas 6 parametros.
    console.log(a, b, c, d, e, f);  // 1 2 3 4 5 6. Ele executa o comando normalmente, ignorando o argumento que não possui parametro.

}

funcao5(1, 2, 3, 4, 5, 6, 7);  // Enviando 7 argumentos

    // MAIS PARÂMETROS DO QUE ARGUMENTOS
 function funcao6(a, b, c, d, e, f) {    // 6 parametros.
    console.log(a, b, c, d, e, f);  // 1 2 3 undefined undefined undefined. Parametros sem valores de argumentos não são definidos, ou seja, undefined.
    
}
    
funcao6(1, 2, 3);  // Enviando apenas 3 argumentos

    // DEFINIÇÃO DE VALOR PADRÃO - FORMA ANTIGA
function funcao7(a, b) {    // 2 parametros: 2 e undefined.
    console.log(a + b); // NaN. Não é possível somar um number com um undefined.
    b = b || 2; // Definindo um valor padrão para b. Se o valor existir (!= undefined), é igual a ele mesmo, se não, é igual a 2. Agora b possui um novo valor.
    console.log(a + b); // 4.
}
    
funcao7(2);  // Enviando apenas 1 argumento.

    // DEFINIÇÃO DE VALOR PADRÃO - FORMA NOVA
function funcao8(a, b = 10, c = 3) {    // 3 parametros, 2 com valor padrão. Porém, padronizando o valor de b para ser = 10 e c = 3 caso nenhum valor de argumento seja passado.
        console.log(a + b + c); // 16.

}
    
    // PULAR UM ÍNDICE
funcao8(2, '', 20); // 220. Mesmo que uma string vazia seja um falsy, ela ainda é uma string, o que faz com que a soma dentro da função se torne uma concatenação.
funcao8(2, 0, 20);  // 22. Mesmo que 0 seja um falsy, ele ainda é um number, o que faz com que a soma ocorra naturalmente.
funcao8(2, null, 20);  // 22. Mesmo que null seja um falsy, para o javascript, null = 0, e 0 ainda é um number, o que faz com que a soma ocorra naturalmente.
funcao8(2, undefined, 4);  // Unica forma de pular um índice de um parametro para que ele use um valor padrão.

    // ATRIBUIÇÃO VIA DESESTRUTURAÇÃO - OBJETO
function funcao9( { nome, sobrenome, idade }){  // Atributos como parametros
    console.log(nome, sobrenome, idade);    // gabriel maciel 21

}

const obj = {
    nome: 'gabriel',
    sobrenome: 'maciel',
    idade: 21

};

funcao9(obj);

    // ATRIBUIÇÃO VIA DESESTRUTURAÇÃO - ARRAY
function funcao10( [ v1, v2, v3 ] ){  // Atributos como parametros
    console.log(v1, v2, v3);    // Gabriel Maciel de Oliveira 21

}

const arr = ['Gabriel Maciel', 'de Oliveira', 21];

funcao10(arr);

const conta = function (operador, acumulador, ...numeros) {  // o par numeros recebe TODOS os outros argumento que NÃO foram passados como parâmetros ANTES dele por meio do rest operator, transformando os 6 argumentos em 3 parametros. o parametro com rest operator SEMPRE deve ser o ÚLTIMO, ou o js retorna um erro.
    console.log(operador, acumulador, numeros); // + 0 [ 20, 30, 40, 50 ].

    for (let numero of numeros) {
        console.log(numero);

        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;

    }

    console.log(acumulador);
};

conta ('+', 1, 20, 30, 40, 50);   // 6 argumentos diferentes.