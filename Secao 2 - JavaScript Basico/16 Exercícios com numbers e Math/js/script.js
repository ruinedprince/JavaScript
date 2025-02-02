const num       = Number(prompt('Digite seu número: '));
const numTitulo = document.getElementById('numTitulo');
const txt       = document.getElementById('txt');

numTitulo.innerHTML = num;

txt.innerHTML += `Raiz quadrada de ${num}: ${Math.sqrt(num)} <br />`;
txt.innerHTML += `${num} é inteiro: ${Number.isInteger(num)} <br />`;
txt.innerHTML += `${num} é NaN: ${Number.isNaN(num)} <br />`;
txt.innerHTML += `${num} arredondado para baixo ${Math.floor(num)} <br />`;
txt.innerHTML += `${num} arredondado para cima ${Math.ceil(num)} <br />`;
txt.innerHTML += `${num} com duas casas decimais: ${num.toFixed(2)} <br />`