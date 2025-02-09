// Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem (a, l) {
    console.log(`Valores gerados: a: ${a}, l: ${l}`);
    
    return l > a;

}

const height   = random();
const width    = random();

function random() {
    const r = Math.random() * (1920 - 720) + 720;
  
    return Math.floor(r); // Math.floor arredonda para baixo. Ex: 9.9 vira 
    
}

if (ePaisagem (height, width)){
    console.log('A imagem está no modo paisagem.');

} else {
    console.log('A imagem não está no modo paisagem.');
}