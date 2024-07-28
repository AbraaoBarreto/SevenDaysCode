/*Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.
-Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.
-Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.
-As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima"*/

function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}
function subtracao(valor1, valor2){
    return Number(valor1) - Number(valor2);
}
function multiplicacao(valor1, valor2){
    return Number(valor1) * Number(valor2);
}
function divisao(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacao = "";

do {
	
    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);	
    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {
	alert(`Operação não reconhecida!`);
	operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
	
    if (operacao === "sair"){
		break;	
    }
	
    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);
    switch (operacao) {
        case 'soma':
          alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
          break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
            break;
    }
} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
alert(`Até a próxima!`);