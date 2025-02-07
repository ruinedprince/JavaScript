function handleDataFormat () {
    const data           = new Date();
    const hora           = zeroLeft(data.getHours());
    const minuto         = zeroLeft(data.getMinutes());
    const diaSemana      = data.getDay();
    const diaMes         = zeroLeft(data.getDate());
    const mes            = data.getMonth();
    const ano            = zeroLeft(data.getFullYear());
    const result         = document.querySelector(".container");
    const diaSemanaTexto = getDayOfWeekText(diaSemana);
    const mesTexto       = getMonthText(mes);

    console.log(`${diaSemanaTexto}, ${diaMes}/${mes}/${ano}`);

    result.innerHTML = `<h1>${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano}</h1><h1>${hora}:${minuto}</h1>`;

}
function getDayOfWeekText (day) {
    switch (day) {
        case 0:
            return 'domingo';

        case 1:
            return 'segunda-feira';

        case 2:
            return 'terça-feira';

        case 3:
            return 'quarta-feira';

        case 4:
            return 'quinta-feira';

        case 5:
            return 'sexta-feira';

        case 6:
            return 'sábado';

        default:
            return '';

            
    }

}
function getMonthText(month) {
    switch (month) {
        case 0:
            return 'janeiro'
            
        case 1:
            return 'fevereiro'
            
        case 2:
            return 'março'
            
        case 3:
            return 'abril'
            
        case 4:
            return 'maio'
            
        case 5:
            return 'junho'
            
        case 6:
            return 'julho'
            
        case 7:
            return 'agosto'
            
        case 8:
            return 'setembro'
            
        case 9:
            return 'outubro'
            
        case 10:
            return 'novembro'
            
        case 11:
            return 'dezembro'
            
        default:
            return ''
            

    }
}
function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;

}

handleDataFormat();