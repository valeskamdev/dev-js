// Escreva um programa onde, você chame uma função, e ela diga a hora exata!

const exactTime = () => {
    return new Date().toLocaleTimeString('pt-BR');
}

console.log(exactTime()); // current time  xx:xx:xx