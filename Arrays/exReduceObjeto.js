const prompt = require("prompt-sync")()

const arrayParaObjeto = (array) => {
    return array.reduce((acc, [chave, valor]) => {
        acc[chave] = valor; // Adiciona a chave e o valor ao objeto
        return acc; // Retorna o acumulador atualizado
    }, {});
};

const resultadoObjeto = arrayParaObjeto([['a', 1], ['b', 2], ['c', 3]]);
// Saída: { a: 1, b: 2, c: 3 }

console.log(resultadoObjeto)