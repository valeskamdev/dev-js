// A funcao deve RETORNAR a taxa de juros simples, já formatada. Ex: 2,5%.

const rate = (investedValue, investmentValue, time ) => {
    const returnRate = (investmentValue - investedValue) / (investedValue * time) * 100;
    return `${returnRate.toFixed(1)}%`;
}

console.log(rate(2000, 2600, 12)); // 2,5%
console.log(rate(6500, 7985, 5)); // 4,6%