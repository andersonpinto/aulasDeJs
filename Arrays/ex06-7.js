const prompt = require("prompt-sync")()
console.log("Entrar com valor da retirada.")
console.log("OBS: só temos notas de 10, digitar \"0\" finaliza")
const invalidos = []
const validos = []
let soma = 0
do {
    const valor = Number(prompt("Valor: "))
    if (valor == 0 ) {
        break
    }
    if (valor % 10 !=0 ) {
        console.log("valor inválido !!!!")
        invalidos.push(valor)
    } else {
        console.log("esse saque é válido !!!")
        validos.push(valor)
    }
} while(true)
console.log("esses são os saques inválidos: ")
for (invalido of invalidos) {
    console.log(`${invalidos}`)
}
console.log("Esses são os saques válidos: ")
for (valido of validos) {
    console.log(`${valido}`)
    soma += valido
}
console.log("*".repeat(40))
console.log(`A soma dos valores sacados é: ${soma} reais`)
console.log("*".repeat(40))
console.log("fim")
