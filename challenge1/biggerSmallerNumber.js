// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const firstNumber = 10;
const secondNumber = 12;
const thirdNumber = 6;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(`O número ${firstNumber} é o maior`);
} else if (secondNumber > thirdNumber) {
    console.log(`O número ${secondNumber} é o maior`);
} else {
    console.log(`O número ${thirdNumber} é o maior`);
}

if (firstNumber < secondNumber && firstNumber < thirdNumber) {
    console.log(`O número ${firstNumber} é o menor`);
} else if (secondNumber < thirdNumber) {
    console.log(`O número ${secondNumber} é o menor`);
} else {
    console.log(`O número ${thirdNumber} é o menor`);
}