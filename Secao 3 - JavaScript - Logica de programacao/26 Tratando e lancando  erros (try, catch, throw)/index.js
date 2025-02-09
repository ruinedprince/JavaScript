// Para tratar código possivelmente perigosos:

    // console.log(naoExisto); // ReferenceError: naoExisto is not defined

    // TRY CATCH
try {   // Try = tentar. Tente executar esse código mesmo que dê erro.
    console.log(naoExisto);

} catch(err) {  // Catch = pegar. Caso a exceção seja verdadeira e o erro ocorra, executa o código no bloco catch.
    console.log('naoExisto não existe.');
    console.log(err);   // Exibe a mensagem de erro em si.

}

console.log('Estou depois do tryCatch');    // O código após o erro continua executando mesmop com o erro

    // THROW
function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números');    // Throw envia a mensagem personalizada e encerra o código do bloco. Estou lançando uma mensagem de erro NÃO tratado.

    }

    return x + y;

}

try {   //  Caso haja algum erro aqui
    console.log(soma(1, 2));
    console.log(soma(1, '2'));

} catch (err) { // Exibe a mensagem de erro personalizada pelo throw
    console.log(err);   // x e y precisam ser números
}

function subtracao (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('x e y precisam ser números');    // throw new Error (ou ReferenceError ou outras funções construtoras de erro) não substitui a mensagem de erro padrão do javascript, apenas adiciona a informação que foi registrada.

    }

    return x - y;

} 

try {   //  Caso haja algum erro aqui
    console.log(subtracao(1, 2));
    console.log(subtracao(1, '2')); // Linha com erro.

} catch (err) { // Exibe a mensagem de erro personalizada pelo throw
    // console.log(err);   // x e y precisam ser números
    console.log('Alguma coisa mais amigável para o usuário.')
}