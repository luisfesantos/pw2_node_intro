const chalk = require(`chalk`);

function calculadora(n1, n2, op) {
    switch (op) {
        case "+":
            return (chalk.bgBlack.green(`-= ${n1} ${op} ${n2} = ${n1 + n2} =-`));
        case "-":
            return (chalk.bgBlack.blue(`-= ${n1} ${op} ${n2} = ${n1 - n2} =-`));
        case "*":
            return (chalk.bgBlack.magenta(`-= ${n1} ${op} ${n2} = ${n1 * n2} =-`));
        case "/":
            return (chalk.bgBlack.red(`-= ${n1} ${op} ${n2} = ${n1 / n2} =-`));
        default:
            return (chalk.bgBlack.yellow(`[ Invalid Operation ]`));
    }
}

console.log(calculadora(135, 61, "+"));
console.log(calculadora(135, 61, "-"));
console.log(calculadora(15, 5, "*"));
console.log(calculadora(129, 12, "/"));
console.log(calculadora(32, 6, "|"));