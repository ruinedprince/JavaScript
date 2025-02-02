/* Gabriel Maciel de Oliveira tem 20 anos, pesa 74kg
tem 1.9m de altura e seu IC é de 20.498614958448755
Gabriel Maciel de Oliveira nasceu em 2004
*/

const nome      = 'Gabriel';
const sobrenome = 'Maciel de Oliveira';
const idade     = 20;
const peso      = 74;
const altura    = 1.9;

let   imc;
let   anoNascimento;

imc             = peso / (altura * altura);
anoNascimento   = 2024 - idade;


console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso + 'kg');
//template strings
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);