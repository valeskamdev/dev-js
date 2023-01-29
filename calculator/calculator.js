const calculate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid Operator";
    }
}

console.log(calculate(5, 2, "+")); // 7
console.log(calculate(6, 9, "-")); // -3
console.log(calculate(12, 3, "*")); // 36
console.log(calculate(60, 5, "/")); // 12
console.log(calculate(144, 6, "4")); // Invalid Operator