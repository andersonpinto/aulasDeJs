const prompt = require ("prompt-sync")()

// passar uma função como parametro é um callback
const contarOcorrencias = (array) => {
    return array.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1; // Incrementa a contagem
        return acc; // Retorna o acumulador atualizado, essencial !!!!
    }, {}); // Esse {} vazio é um objeto que será usado para acumular e contar
};

const resultadoContar = contarOcorrencias(['maçã', 'banana', 'maçã', 'laranja']); 
// Saída: { maçã: 2, banana: 1, laranja: 1 }

console.log(resultadoContar)