const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();

let diaSemanaTexto;
let mesTexto;

    // Condicao if
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';

} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira';

} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';

} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';

} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';

} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';

} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';

} else {
    diaSemanaTexto = '';

}

    // Switch Case. Estrutura de controle que pode ser utilizada para substituir vários if's encadeados.
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;  // O break é utilizado para que o código pare de ser executado após a condição ser atendida.

    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;

    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;

    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;

    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;

    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;

    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    
    default:
        diaSemanaTexto = '';
    // O default é utilizado para caso nenhuma das condições anteriores seja atendida.
    // Não é preciso colocar um break no final do default, pois ele é a última condição a ser verificada.

}

    // Switch Case dentro de uma função

function getMesDoAno(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;    // Como o return está dentro do switch, ele não precisa de um break. Tudo abaixo do return deixa de ser executado.

        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;

        case 2:
            mesTexto = 'Março';
            return mesTexto;

        case 3:
            mesTexto = 'Abril';
            return mesTexto;

        case 4:
            mesTexto = 'Maio';
            return mesTexto;

        case 5:
            mesTexto = 'Junho';
            return mesTexto;

        case 6:
            mesTexto = 'Julho';
            return mesTexto;

        case 7:
            mesTexto = 'Agosto';
            return mesTexto;

        case 8:
            mesTexto = 'Setembro';
            return mesTexto;

        case 9:
            mesTexto = 'Outubro';
            return mesTexto;

        case 10:
            mesTexto = 'Novembro';
            return mesTexto;

        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;

        default:
            mesTexto = '';

    }
}

console.log(data);
console.log(diaSemana, diaSemanaTexto);
console.log(mes, getMesDoAno(mes));