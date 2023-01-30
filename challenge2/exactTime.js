// Escreva um programa onde, você chame uma função, e ela diga a hora exata!

const exactTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

console.log(exactTime()); // 21:56:35  (my exact time)