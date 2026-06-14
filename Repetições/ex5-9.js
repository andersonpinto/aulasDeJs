const prompt = require("prompt-sync")()
const nome = prompt("nome na etiqueta: ")
const numero = Number(prompt("numero de etiquetas: "))
for (let i=1; i <= numero /2; i++) {
    console.log(`${nome.padEnd(30,".")}${nome.padEnd(30)}`)
}
if (numero % 2 == 1) {
    console.log(nome)
}
