const paragraphs          = document.querySelector('.paragrafos');
const p                   = document.querySelectorAll('p');
const bodyStyles          = getComputedStyle(document.body); // pega o estilo do body
const backgroundColorBody = bodyStyles.backgroundColor;

console.log(backgroundColorBody);

for (let i of p) {
    console.log(i);

    i.style.backgroundColor = backgroundColorBody;  // pega a cor do body e aplica no paragrafo. Não pode usar - no nome da propriedade. Utiliza-se camelCase.
}