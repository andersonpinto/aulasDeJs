const prompt = require("prompt-sync")()
const cidades = ["Pelotas","Säo Lourenço", "POA"]
for (let i = 0; i < cidades.length; i++){
	console.log(cidades[i])
}
console.log("-".repeat(40))
console.log(cidades.toString())
console.log(cidades.join(" - "))
console.log("")
console.log(" - ".repeat(20))
console.log(" utilizando o for...of".padStart(25,"*"))
for (const cidade of cidades){
    console.log(cidade)
}
console.log(" - ".repeat(20))
console.log(" utilizando for...each".padStart(25,"*"))
cidades.forEach((cidade,i) => {
    console.log(`${i+1}a. Cidade: ${cidade}`)
})