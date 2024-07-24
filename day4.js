/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
-Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
-No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.*/

let numSecreto = parseInt(Math.random() * 10 + 1);
let chute;
let contagemTentativas = 3;

alert('Bem-vindo ao jogo do número secreto');
while (contagemTentativas != 0) {
    chute = prompt('digite um número entre 1 e 10:');
    if (chute == numSecreto) {
        break;
    } else if (chute > numSecreto) {
        alert(`O número secreto é menor do que ${chute}`);
    } else {
        alert(`O número secreto é maior do que ${chute}`);
    }

    contagemTentativas--;
}

if (chute == numSecreto) {
    alert('Parabéns, você descobriu o número secreto!');
} else {
    alert(`Infelizmente você não descobriu o número secreto, que era ${numSecreto}.`);
}