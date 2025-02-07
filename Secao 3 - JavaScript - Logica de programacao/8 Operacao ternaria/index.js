    // ? : Operador ternário
    // (condicao) ? 'Valor para verdadeiro' : 'Valor para falso'
    // Exemplo:
let pontuacaoUsuario = 999;
let nivelUsuario     = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);  // Usuário normal

pontuacaoUsuario = 1000;

nivelUsuario     = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);  // Usuário VIP

    // Valor padrão ou fallback
let corUsuario = null;
let corPadrao  = corUsuario || 'Preta'; // Se corUsuario for nulo, corPadrao será 'Preta'

console.log(corPadrao);  // Preta