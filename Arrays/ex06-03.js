const prompt = require("prompt-sync")
const numeros = [5,10,15,20]
let soma = 0
numeros.forEach(num => soma+=num)
console.log(numeros); console.log("Esse é o vetor !")
console.log(`soma dos números do vetor é: ${soma}`)