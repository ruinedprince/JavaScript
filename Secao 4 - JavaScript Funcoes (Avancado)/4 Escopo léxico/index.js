    // ESCOPO LÉXICO - (entendi como se fosse um escopo dinâmico, muda conforme onde estou chamando minha função e onde está minha variável)

const nome = 'Gabriel';

function falaNome() {
    console.log(nome);  // Gabriel. o console log dentro da função procura a variavel que possuir o nome que está sendo usado como argumento, escopo por escopo até o global, caso não exista em nenhum desses, retorna erro.

}
function falaNome2 () {
    const nome = 'Otávio';  // eu aqui
    console.log(nome);  // Otávio.
}

falaNome();

function usaFalaNome() {
    const nome = 'Maciel';  // o código não reconhece essa nova variavel nome para utiliza-la pois ela está fora do escopo das outras funções quando elas são executadas (escopo léxico)
    falaNome(); // Retorna gabriel pois a variavel chamada 'nome' mais perto está no escopo global.
    falaNome2();    // Retorna otávio pois a variavel chamada 'nome' mais perto está na própria função quando é executada (linha 10).

}

usaFalaNome();  // a função consegue lembrar onde a variavel foi deckarada independen de quantos escopos ela passe.

