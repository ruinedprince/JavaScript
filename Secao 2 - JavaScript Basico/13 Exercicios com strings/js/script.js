let nome = prompt('Digite seu nome: ');

window.document.body.innerHTML = `${nome} <br />`; // Tag <br /> (quebrar linha) utilizada aqui pois o commando se refere a HTML.

nome = prompt('Digite seu nome completo: ');

window.document.body.innerHTML += `O seu nome é: ${nome} <br />`;