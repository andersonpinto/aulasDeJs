const prompt = require("prompt-sync")()
const numeros = [1, 2, 3, 4, 5];

// Encadeando métodos
const resultado = numeros
    .filter(num => num > 2) // Filtra números maiores que 2
    .map(num => num * 2)    // Multiplica cada número filtrado por 2
    .reduce((soma, num) => soma + num, 0); // Soma todos os números resultantes

console.log(resultado); // Saída: 24 (16 + 8)