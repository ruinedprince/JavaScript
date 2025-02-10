const date = new Date("01-01-1970 00:00:00");

function converter(data) {
    return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'

    });

}
const second = 1000;
let hour = date;
hour = new Date(hour.getTime() + 1000);

console.log(converter(hour));