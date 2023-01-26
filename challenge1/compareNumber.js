// Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

const num = 6;
const comparisonNumber = 10;

if (num > comparisonNumber) {
    console.log(`O número ${num} é maior que ${comparisonNumber}`);
} else if (num == comparisonNumber) {
    console.log(`O número ${num} é igual a ${comparisonNumber}`);
} else {
    console.log(`O número ${num} é menor que ${comparisonNumber}`);
}