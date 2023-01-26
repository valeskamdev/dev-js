// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
// Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
// Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const winnerNumber = Math.floor(Math.random() * 10 + 1);
const playerNumber = Math.floor(Math.random() * 10 + 1);

if (winnerNumber === playerNumber) {
    console.log("Congratulations. You won the prize!");
} else {
    console.log("Unfortunately you lost. Try again!");
}