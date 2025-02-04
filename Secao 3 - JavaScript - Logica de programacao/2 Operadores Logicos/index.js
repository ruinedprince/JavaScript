/*
Operadores Lógicos
&&  -> AND  -> E    -> Todas as expressões precisam ser verdadeiras para retornar true.
||  -> OR   -> OU   -> Apenas uma expressão precisa ser verdadeira para retornar true.
!   -> NOT  -> NÃO  -> Inverte uma expressão.
*/

    // AND -> E
const exp1And = true && true && true;
const exp2And = true && true && false;

console.log(exp1And); // true. Todas as expressões são verdadeiras, logo, a operação também será, pois as duas condições foram atendidas.
console.log(exp2And); // false. Nem todas as expressões são verdadeiras, logo, a operação também não será, pois apenas 2 das 3 condições foram atendidas.

    // OR -> OU
const exp1Or = true || true || false;
const exp2Or = false || false || false;

console.log(exp1Or);    // true. Ao menos uma das expressões são verdadeiras, logo, a operação também será.
console.log(exp2Or);    // false. Nenhuma das expressões são verdadeiras, logo, a operação também não será.

    // Exemplo
let usuario = 'Gabriel';  // Dados se login de um usuário.

const senha = '123456';

    //                   true          e        true
let login = usuario === 'Gabriel' && senha === '123456';

console.log(login);  // true.

usuario = 'Luiz';

    //             false         e        true
login = usuario === 'Gabriel' && senha === '123456';

console.log(login);  // false.

    // NOT -> NÃO
console.log(true);  // true.
console.log(false); // false.
console.log(!true);  // false. O valor de true é invertido, passando a ser false.
console.log(!false); // true. O valor de false é invertido, passando a ser true.
console.log(!!true);    // true. Como o valor foi invertido duas vezes, ele passa a ter seu valor normal, não é muito comum de se usar visto que apenas a exclusão de um '!' tem o mesmo valor.
console.log(!!false);   // false.