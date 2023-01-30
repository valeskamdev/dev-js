// Escreva um programa onde, você chame uma função mandando dois argumentos,
// 2 números, e a função responde qual número é maior

const biggerNumber = (num1, num2) => {
    return (num1 > num2) ? `${num1} it's bigger` : `${num2} it's bigger`;
}

console.log(biggerNumber(2, 3)); // 3 it's bigger
console.log(biggerNumber(52, 21)); // 52 it's bigger