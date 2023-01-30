// Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const currentYear = () => {
    return new Date().getFullYear();
}

console.log(currentYear()); // 2023 (my current year)