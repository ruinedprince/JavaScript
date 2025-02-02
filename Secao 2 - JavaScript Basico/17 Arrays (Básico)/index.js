//            0       1        2
let alu = ['Luiz', 'Maria', 'João']; // Lista de informações de qualquer TIPO separadas por virgulas, nesse caso, string, number, boolean e null. Boa prátca: apenas um tipo de informação por array. Arrays são indexados por elementos, ex: Luiz = 0, Maria = 1, João = 2, etc.

console.log(alu);

const nome = 'Gabriel Maciel';

console.log(nome[0]);   // G
console.log(alu[0]);    // Luiz
console.log(alu[2]);    // João

alu[0] = 'Eduardo';     // Luiz passa a ser Eduardo
alu[3] = 'Luiza';       // Cria um novo espaço para a nova informação Luiza

console.log(alu);       // Eduardo, Maria, João, Luiza.

console.log(alu.length);    // Tamanho do meu array, 4.

alu[alu.length] = 'Fábio';  // Técnica de inserção de novas informações no array, como .lenght começa a conta a partir do 1, e os index do array contam a partir do 0, adicionar uma informação na casa variavel.length sempre irá adicionar a informação no proximo index, que não existe.
alu[alu.length] = 'Luana';

console.log(alu);   // Eduardo, Maria, João, Luiza, Fábio, Luana.

alu.push('Luiza');  // Método mais simples e recomendado de inserção, por meio do método .push, ele sempre irá adicionar a nova informação em um novo index no fim do array.
alu.push('Fábio');

console.log(alu);   // Eduardo, Maria, João, Luiza, Fábio, Luana, Fábio, Luana, Luiza, Fábio.

alu.unshift('Luiza');   // Adiciona um novo valor no início dos índices do array, "empurrando" todas as outras informações um índice a frente.
alu.unshift('Fábio');

console.log(alu);    // Fábio, Luiza, Eduardo, Maria, João, Luiza, Fábio, Luana, Fábio, Luana, Luiza, Fábio.

alu.pop();  // Remove o ultimo valor do índice, Fábio.

console.log(alu);   // Fábio, Luiza, Eduardo, Maria, João, Luiza, Fábio, Luana, Fábio, Luana, Luiza.

let rmv = alu.pop();   // É possível armazenar o valor removido do array por meio do método pop em uma outra variável.

console.log(alu);   // Fábio, Luiza, Eduardo, Maria, João, Luiza, Fábio, Luana, Fábio, Luana.
console.log(rmv);   // Luiza.

alu.shift();    // Remove o primeiro valor do índice, Fábio.

rmv = alu.shift();   // Também é possível armazenar o valor removido do array por meio do método shift em uma outra variável.

console.log(alu);   // Eduardo, Maria, João, Luiza, Fábio, Luana.
console.log(rmv);   // Luiza.

delete alu[1];   // Deleta um valor de um índice do array, deixando-o vazio.

console.log(alu);   // Eduardo, <1 empty item>, João, Luiza, Fábio, Luana.
console.log(alu[1]);    // undefined.
console.log(alu[50]);   // É possível acessar um valor não existente na memória do array, retorna o valor padrão undefined; undefined.
console.log(alu.slice(0, 3));   // Assim como as Strings, é possível fatiar o array para imprimir apenas uma parte dele; Eduardo, <1 empty item>, João.
console.log(alu.slice(0, -1));  // Eduardo, <1 empty item>, João, Luiza, Fábio.
console.log(typeof alu);    // Retorna o tipo da váriavel, nesse caso, retorna object pois um array é um objeto indexado.
console.log(alu instanceof Array);  // Verifica que alu é do tipo array, o que é verdade; true.

alu = 123;

console.log(typeof alu); // number
console.log(alu instanceof Array);  // false