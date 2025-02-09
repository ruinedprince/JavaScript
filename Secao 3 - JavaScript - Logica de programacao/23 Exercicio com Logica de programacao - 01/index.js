// Escreva uma função que receve 2 numeros e retorne o maior deles
function handleBigger() {
    const min      = 1;
    const max      = 100;
    const rNumbers = [random(min, max), random(min, max)];

    console.log(`Números sorteados: ${rNumbers[0]} e ${rNumbers[1]}.`);

    if (rNumbers[0] > rNumbers[1]){
        console.log(`${rNumbers[0]} é maior que ${rNumbers[1]}.`);
        return rNumbers[0];

    } else if (rNumbers[0] < rNumbers[1]) {
        console.log(`${rNumbers[0]} é menor que ${rNumbers[1]}.`);
        return rNumbers[1];

    } else {
        console.log(`${rNumbers[0]} é o mesmo que ${rNumbers[1]}.`);
        return rNumbers[0];

    }

}
function random(min, max) {
  const r = Math.random() * (max - min) + min; // Gera um número aleatório entre min e max

  return Math.floor(r); // Math.floor arredonda para baixo. Ex: 9.9 vira 
  
}

const biggerNum = handleBigger();

console.log(`O maior número é: ${biggerNum}.`);