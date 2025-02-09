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

function retornarHora(data){
    if (!(data instanceof Date)){
        console.log('Não é');

    }

}

retornarHora(new Date());