/* 
&&  -> AND  -> E    -> Todas as expressões precisam ser verdadeiras para retornar true. "O valor mesmo"
||  -> OR   -> OU   -> Apenas uma expressão precisa ser verdadeira para retornar true. "O valor mesmo"

FALSIES (falsos não literais) = 0, '', "", ``, null/undefined, NaN. TUDO que não seja isso = true.
*/
    // AND - E
    // Como o operador && opera da esquerda para a direita e precisa que TODAS as expressões sejam verdadeira para retornar true, ele retorna o PRIMEIRO valor FALSO que encontra.
console.log('Gabriel Maciel' && 0 && 'Maria');  // 0. 0 = false em JavaScript.
console.log('Gabriel Maciel' && true && 'Maria');  // Maria. 'Gabriel Maciel' é uma String PREENCHIDA, portanto, verdadeira; true = true (durr); 'Maria' é uma String PREENCHIDA, portanto, verdadeira. Como todos os valores são verdadeiros, retorna o ultimo valor true, nesse caso, Maria.
console.log('Gabriel Maciel' && true && NaN);  // NaN. NaN em JavaScript é considerado falso.

    // BASICAMENTE: && retorna o PRIMEIRO valor FALSO ou o ULTIMO valor VERDADEIRO.
    // Exemplo
function falaOi() {
    return 'Oi';

}

let exc;

console.log(exc && falaOi());   // undefined.

exc = false;

console.log(exc && falaOi());   // false.

exc = true;

console.log(exc && falaOi());   // Oi.

    // OR - OU
    // Como o operador || opera da esquerda para a direita e precisa que AO MENOS UMA das expressões sejam verdadeiras para retornar true, ele retorna o PRIMEIRO valor VERDADEIRO que encontra.
console.log(0 || false || null || 'Gabriel Maciel' || true);    // Gabriel Maciel. Como ele é uma string PREENCHIDA, ele é considerado verdadeiro, e por ser o primeiro verdadeiro, é elequem é retornado.

    // BASICAMENTE: && retorna o PRIMEIRO valor FALSO ou o ULTIMO valor VERDADEIRO.
    // Exemplo
let corUsuario = null;
let corPadrao = corUsuario || 'preto';

console.log(corPadrao); // preto.

corUsuario = 'roxo';

corPadrao = corUsuario || 'preto';

console.log(corPadrao); // roxo.

    // Exemplo 2
let a = 0;
let b = null;
let c = 'false';    // aqui.
let d = false;
let e = NaN;

console.log(a || b || c || d || e); // false. Mas nesse caso, é a variável C o false string (let c: string).

c = false;

console.log(a || b || c || d || e); // NaN.
console.log(a || b || 'joazinho' || c || d || e); // joaozinho.