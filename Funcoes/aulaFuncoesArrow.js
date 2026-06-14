const prompt = require("prompt-sync")()

// passando funções como argumentos para uma de hierarquia superior

function square(num) {
    return num = num ** 2
}

function cube(num) {
    return num = num ** 3 // se não return o resultado não sai da função 
}

function exponencial(num, funcao) {
    console.log(funcao(2))
}

// abaixo arrow functions

let dobro = num => num ** 2
let cubo = num => num ** 3
let exp = (num, func) => func(num)

console.log(dobro(9))
console.log(cubo(11))
console.log(exp(5, cube))

exponencial(3, cube)
exponencial(2, square)