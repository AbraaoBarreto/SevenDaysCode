/*---Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:
1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
   O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.*/

let area = prompt('Em qual área de programação você gostaria de seguir? \nDigite 1 para Front-end. \nDigite 2 para Back-end.');

if (area == 1) {
    prompt('Sua escolha foi Front-end. Você gostaria de aprender React ou Vue?');
} else if (area == 2) {
    prompt('Sua escolha foi Back-end. Você gostaria de aprender Java ou C#?');
} else {
    while (area != 1 && 2) {
        area = prompt('Número inválido! Por favor escolha 1 para Front-end ou 2 para Back-end.');
        if (area == 1) {
            prompt('Sua escolha foi Front-end. O que você gostaria de aprender, React ou Vue?');
        } else if (area == 2) {
            prompt('Sua escolha foi Back-end. Você gostaria de aprender Java ou C#?');
        }
    }
}

let escolha = prompt('Você gostaria de continuar se especializando na área ou seguir o caminho de desenvolvedor Fullstack? \nDigite 1 para ser especialista. \nDigite 2 para ser desenvolvedor Fullstack.');
if (escolha == 1) {
    alert('Entendo, então você gostaria de se tornar um especialista na área.');
} else if (escolha == 2) {
    alert('Entendo, você prefere seguir a carreira de um desenvolvedor Fullstack.');
} else {
    while (escolha != 1 && 2) {
        escolha = prompt('Número inválido, por favor insira 1 ou 2');
        if (escolha == 1) {
            alert('Entendo, então você gostaria de se tornar um especialista na área.');
        } else if (escolha == 2) {
            alert('Entendo, você prefere seguir a carreira de um desenvolvedor Fullstack.');
        }
    }
}

