let data = new Date();  // new significa que estamos criando um novo objeto. Date é o objeto que estamos criando.

console.log(data);  // Data atual.
console.log(data.toString());  // Data atual em formato de string, com mais informações.

data = new Date(0);  // Data de referência: 01/01/1970 Timestamp Unix.

console.log(data.toString());  // Data de referência em formato de string.

const tresHoras = 60 * 60 * 3 * 1000;  // 60 segundos * 60 minutos * 3 horas * 1000 milissegundos.

data = new Date(0 + tresHoras);  // Data atual + 3 horas.

console.log(data.toString());  // Data atual + 3 horas em formato de string.

const umDia = 60 * 60 * 24 * 1000;  // 60 segundos * 60 minutos * 24 horas * 1000 milissegundos.

data = new Date(0 + tresHoras + umDia);  // Data de referência + 3 horas + 1 dia.

console.log(data.toString());  // Data de referência + 3 horas + 1 dia em formato de string.


    // Data específica.
data = new Date(2019, 11, 31, 23, 59, 59, 1000);  // Data específica. Mês começa em 0. Ano, mês, dia, hora, minuto, segundo, milissegundo.

console.log(data.toString());  // Data específica em formato de string.

    // DataString.
data = new Date(1738960491030);  // DataString.

console.log(data.toString());  // DataString em formato de string.
console.log('Dia', data.getDate());  // Dia.
console.log('Mês', data.getMonth() + 1);  // Mês.
console.log('Ano', data.getFullYear());  // Ano.
console.log('Hora', data.getHours());  // Hora.
console.log('Minuto', data.getMinutes());  // Minuto.
console.log('Segundo', data.getSeconds());  // Segundo.
console.log('Milissegundo', data.getMilliseconds());  // Milissegundo.
console.log('Dia da semana', data.getDay());  // Dia da semana. 0 - Domingo, 6 - Sábado.
console.log(Date.now());  // Data atual em milissegundos.

    // Exemplo de função para formatar data.
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;  // Se o número for maior ou igual a 10, retorna o número. Se não, retorna o número com 0 à esquerda.

}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;  // Data formatada.
}

data = new Date();

const dataBrasil = formataData(data);  // Data atual.
console.log(dataBrasil);  // Data atual formatada.