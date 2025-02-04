let hora = 10;

if (hora < 12){ // Se a hora for menor do que 12 
    console.log('Bom dia'); // Bom dia. Esse será exibido pois 10 é menor que 12.
    console. log(1);

}

hora = 12;

if (hora < 12){ // Se a hora for menor do que 12 
    console.log('Bom dia'); // Bom dia. Mas esse não é exibido pois 12 NÃO é menor que 12.
    console. log(2);

}
if (hora <= 12){ // Se a hora for menor ou igual a 12 
    console.log('Bom dia'); // Bom dia. Esse será exibido pois mesmo que 12 nao seja menor que 12, ele é igual.
    console. log(3);

}

hora = 50;

if (hora <= 12){ // Se a hora for menor ou igual a 12 
    console.log('Bom dia'); // Bom dia. Mas esse não é exibido pois 13 NÃO é menor nem igual a 12.
    console. log(4);

}

/*
Entre 00h00 e 11h00 - Bom dia
Entre 12h00 e 17h00 - Boa tarde
Entre 18h00 e 23h00 - Boa noite
*/
if (hora >= 0 && hora <= 11){   // Se a hora estiver entre 00h00 e 11h00
    console.log('Bom dia');

}else if (hora >= 12 && hora <= 17){    // Se a hora estiver entre 12h00 e 17h00
    console.log('Boa tarde');
    
}else if (hora >= 18 && hora <= 23){    // Se a hora estiver entre 18h00 e 23h00
    console.log('Boa noite');
}
else { // Se nenhuma das condições acima for atendida.
    console.log('Hora inválida');
}

    // If pode ser utilizado sozinho apenas com sua condição, sem else ou else.
    // Sempre que utilizo a palavra else, preciso de um if antes.
    // Posso ter vários else ifs na condição, mas apenas um else na checagem.

let tenhoGrana = true;

if (tenhoGrana){
    console.log('Vou sair de casa');    // Esse.

}else{
    console.log('Não vou sair de casa');

}

tenhoGrana = NaN;

if (tenhoGrana){
    console.log('Vou sair de casa');

}else{
    console.log('Não vou sair de casa');    //  Esse, pois NaN = false.
}
