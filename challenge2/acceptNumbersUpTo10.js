// Escreva um programa onde, você chame uma função enviando um número 
// (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const multiplicationTable = number => {
    result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i} \n`;
    }
    return result;
}

console.log(multiplicationTable(5));

// 5 x 1 = 5 
// 5 x 2 = 10 
// 5 x 3 = 15 
// 5 x 4 = 20 
// 5 x 5 = 25 
// 5 x 6 = 30 
// 5 x 7 = 35 
// 5 x 8 = 40 
// 5 x 9 = 45 
// 5 x 10 = 50 