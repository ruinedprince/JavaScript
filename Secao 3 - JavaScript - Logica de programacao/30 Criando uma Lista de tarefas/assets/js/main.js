const inputTarefa = document.querySelector('.input-tarefa');   // Referenciando o input do HTML
const btnTarefa = document.querySelector('.btn-tarefa');    // Referenciando o botão
const tarefas = document.querySelector('.tarefas');  // Referenciando a lista

function criaLi() {
    const li = document.createElement('li');    // Cria um elemento li
    return li; 
}

inputTarefa.addEventListener('keypress', function(e){   // Adiciona um listener para que algo ocorra quando apertar uma tecla com o input selecionado.
    if (e.keyCode === 13){  // Se o botão ENTER for pressionado
        if (!inputTarefa.value) return; // Se não tiver nada no input, retorna.
        criaTarefa(inputTarefa.value);  //  Referenciaa função criaTarefa com o valor que estiver no input no momento como argumento. 
    }
});

function limpaInput() {
    inputTarefa.value = ''; // Toda a informação no input é substituida por um valor string vazio.
    inputTarefa.focus();    // O input volta a ser selecionado.
}

function criaBotaoApagar(li){
    li.innerText += ' ';    // Adicionar um espaço vazio (!= string vazia) para adicionar o botão ao lado da tarefa
    const botaoApagar = document.createElement('button');   // Crio um elemento button
    botaoApagar.innerText = 'Apagar';   // Adiciono um texto a esse botão
    botaoApagar.setAttribute('class', 'apagar');  // Adiciona uma classe chamada apagar ao botão
    botaoApagar.setAttribute('title', 'Apagar essa tarefa') // Adiciona um title chamado Apagar essa tarefa ao meu botão
    li.appendChild(botaoApagar);    // Adiciona o novo botão criado como filho de li
}

function criaTarefa(textoInput){
    const li = criaLi();    // Variáveis li são de escopos diferentes, não há redeclaração aqui.
    li.innerText = textoInput;  // Adiciona o texto do input como texto para o li
    tarefas.appendChild(li);    // Faz com que o texto seja um elemento filho de tarefas que é ul, ou seja: <ul>texto de li</ul>.
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e) {   // Adicona um listener para que algo ocorra quando clicar o botão de adicionar tarefa.
    if (!inputTarefa.value) return; // Se não tiver nada no input, retorna.
    criaTarefa(inputTarefa.value);  //  Referenciaa função criaTarefa com o valor que estiver no input no momento como argumento.
});

document.addEventListener('click', function(e) {    // Adiciona um listener para que algo ocorra quando eu clicar em qualquer coisa no documento
    const el = e.target;   // armazena as informações do elemento que eu cliquei no documento
    if (el.classList.contains('apagar')) {  // Verifica se o elemento que eu cliquei possui a classe chamada 'apagar'
        el.parentElement.remove();  // Por meio da função remove(), ele apaga do documento HTML o elemento pai identificado por meio do parentElement. Removendo ele e toda a informação que nele conter.
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')    // Seleciona TODOS os elementos li que estiverem dentro de tarefas (ul).
    const listaDeTarefas = [];  // Criando um array para armazenar as informações dos li

    for (let tarefa of liTarefas){  // Criando um loop de for of para pegar as informações contidas em todos os elementos li que eu registrei
        let tarefaTexto = tarefa.innerText; // Recebe o texto interno contido na tarefa (valor registrado no input e texto dentro do Botão) e passa para uma nova variável
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();  // Substitui o valor em texto de antes por ele mesmo mas sem a palavra 'Apagar', trocando-a, por meio do replace(), por uma string vazia. Utilizando o trim(), removemos os espaços vazios no inicio e final do texto, sem modificar o conteúdo. ex: "   text   " => "text"
        listaDeTarefas.push(tarefaTexto); // Registra o valor em um novo indice do array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // JSON.stringfy() simplifica (?) as informações recebidas e armazena como string
    localStorage.setItem('tarefas', tarefasJSON);   // localStorage.setItem serve para armazenar informações no navegador, o valor é o nome que vai dar para a chave localStorage que está criando (vamos utilizar isso para chama-lá depois) e o valor a ser armazenado nesse storage.
}

function adicionaTarefasSalvas(){
    if(!localStorage.getItem('tarefas')) return;    // Verifica se há um storage chamado 'tarefas' nos dados do navegador, se não houver, retorna.
    const tarefas = localStorage.getItem('tarefas');    // Retorna as informações armazenadas pelo navegador por meio do método getItem e armazena em tarefas.
    const listaDeTarefas = JSON.parse(tarefas); // Por meio do JSON.parse(), transforma tarefas, que antes era um string de JSON, para um objeto (array) javascript padrão, armazenando essa nova informação em listaDeTarefas.
    for (let tarefa of listaDeTarefas) {    // Por meio do laço for of, recebe as informações contidas em cada indicde do array.
        criaTarefa(tarefa); // Passa as informações armazenadas em tarefas e as usa como argumento para a função criaTarefa (quase como se o usuário tivesse feito isso, só que de forma automática).
    }
}

adicionaTarefasSalvas();