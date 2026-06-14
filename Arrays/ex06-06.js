const prompt = require("prompt-sync")()
const amigos = [ {nome: "Ana", idade: 20}, 
                { nome: "Bruno", idade:17},
                {nome: "Cátia", idade:15}]

const amigos2 = amigos.map(aux => ({ nome: aux.nome, nasc:2022 - aux.idade}))

for ( const amigo of amigos2) {
    console.log(`${amigo.nome} - nasceu em ${amigo.nasc}`)
}
console.log(" \n".repeat(2))
console.log(amigos2)