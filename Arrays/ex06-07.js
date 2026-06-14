const prompt = require("prompt-sync")()
const amigos = [ {nome: "Ana", idade: 20}, 
                { nome: "Bruno", idade:17},
                {nome: "Cátia", idade:25}]

const amigos2 = amigos.filter( aux => aux.idade >=21 || aux.nome.includes("B"))
for ( const amigo of amigos2) {
        console.log(`${amigo.nome} - Idade: ${amigo.idade} anos`)
}