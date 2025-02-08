const result    = document.querySelector(".container");
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for (let i = 0; i < elementos.length; i++){
    result.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;

}

    // DOM - Document Object Model. É uma interface que representa documentos HTML e XML através de objetos. Com ela, é possível manipular a estrutura, estilo e conteúdo de um documento. Exemplo: document.querySelector('h1').
    // BOM - Browser Object Model. É uma interface que representa objetos do navegador, como: History, Screen, Location, Navigator e o Window. Com o BOM, é possível manipular janelas e frames do browser. Exemplo: window.location.href (ainda não vimos).

    // Outra forma de fazer o exercício
for (let i =0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada    = document.createElement(tag); // Mesma coisa que fazer <"tag"></"tag"> no HTML

    tagCriada.innerHTML = texto;

    result.appendChild(tagCriada);
}