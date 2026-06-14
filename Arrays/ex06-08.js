const prompt = require("prompt-sync")()
const amigos = [ {nome: "Ana", idade: 20}, 
                { nome: "Bruno", idade:17},
                {nome: "Cátia", idade:25}]

const soma = amigos.reduce((acumulador,amigo) => acumulador + amigo.idade,0)
const todos = amigos.reduce((acumulador,amigo) => acumulador + amigo.nome + " ", "")

console.log(`Soma: ${soma}`)
console.log(`Todos: ${todos}`)
