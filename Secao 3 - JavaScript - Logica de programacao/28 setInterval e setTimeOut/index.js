function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false

    });

}

    // SETINVERVAL - O CÓDIGO É EXECUTADO A CADA X PERÍODO DE TEMPO.
setInterval(function () {
    console.log(mostraHora());

}, 1000);  // Intervalo de tempo preferido 1000 = 1s.

const time = setInterval(function() {   // É possível colocar um setInterval() dentro de uma variável, fazendo com que seu valor seja atualizado conforme o período de tempo determinado.
    console.log(`${mostraHora()}, sou uma função setInverval dentro de uma variável.`);

}, 2000);

    // SETTIMEOUT - O CÓDIGO DENTRO DA FUNÇÃO É EXECUTADO APÓS X PERÍODO DE TEMPO

setTimeout(function() {
    clearInterval(time);   // clearInterval interrompe a execução do nome do intervalo dentro do argumento.

}, 3000);
setTimeout(function() {
    console.log('Olá mundo!');
}, 5000); 
