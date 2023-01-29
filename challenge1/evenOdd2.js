// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
// - Todos os números são impares - Todos os números são pares. Em caso negativo dos casos a cima,
// colocar uma mensagem - Há números pares e ímpares.

const numbers = [9, 12, 4, 7];
let evenCount = 0;
let oddCount = 0;

for (const number of numbers) {
    if (number % 2 === 0) {
        oddCount++;
    } else {
        evenCount++;
    }
}

if (oddCount === numbers.length) {
    console.log("All numbers are odd.");
} else if (evenCount === numbers.length) {
    console.log("All numbers are even.");
} else {
    console.log("There are even and odd numbers.");
}