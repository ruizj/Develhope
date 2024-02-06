const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = value => console.log(value);

// Realizar la operación matemática ((2 + 4) * (5 + 2) - 2) / 5
const result = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);

// Imprimir el resultado en la consola
console.log(result);
