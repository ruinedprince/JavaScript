try {
    // Executada para verificar erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    // console.log(a);
    console.log('Fechei o arquivo');

    try {
        console.log(b);

    } catch (err){
        console.log('Deu erro');

    } finally {
        console.log('Também sou finally.')

    }

} catch (e){
    // Executada quando houver erros
    console.log('Tratando o erro');

} finally {
    // É executado sempre
    console.log('FINALLY: Eu sempre sou executado')

}

function retornaHora(data){
    if (data && !(data instanceof Date)){   // Se a informação existir mas não for criada a partir de uma função Date
        throw new TypeError('Esperando instância de Date.');    // Nova mensagem de erro

    }
    if (!data) {    // Se a informação não existir
        data = new Date();  // Cria uma nova

    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

    });

}

try {
    const data = new Date('01-01-1970 12:58:12');   // Data e hora estática
    const hora = retornaHora(11);   // Se o argumento vier de uma função Date (nesse caso: const data), retorta a conforme o valor de data, se for sem argumentop, retorna hora atual, qualquer outra coisa além disso retorna erro.
    console.log(hora);
} catch(err){
    // Tratar erro
    console.log(err);   // Exibe mensagem de erro personalizada pelo throw.

} finally {
    console.log('Tenha um bom dia.');   // Exibido de qualquer forma.
}