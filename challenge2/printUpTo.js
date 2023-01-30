// Escreva um programa onde, você chame uma função enviando um número, a função deve
// imprime na tela os número de 1 até o número que você enviou

const printUpTo = number => {
  let result = "";
  for (let i = 1; i <= number; i++) {
    result += i + "\n";
  }
  return result;
}

console.log(printUpTo(3)); // 1, 2, 3
console.log(printUpTo(7)); // 1 ,2 ,3, 4, 5, 6, 7