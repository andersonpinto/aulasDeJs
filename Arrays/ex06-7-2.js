const prompt = require("prompt-sync")()
console.log("Entrar com valor da retirada.")
console.log("OBS: só temos notas de 10, digitar \"0\" finaliza")
const saques = []
do {
    const valor = Number(prompt("Valor: "))
    if (valor == 0 ) {
        break
    }
    saques.push(valor)
    if (valor % 10 == 0 ) {
        console.log("saque feito com sucesso !")   
    } else {
        console.log("Erro... Valor Inválido (deve ser múltiplo de 10)")
    }
} while (true)
console.log("\nSaques Válidos")
console.log("-".repeat(40))
const saquesValidos = saques.filter(saque => saque % 10 == 0)
for (const saque of saquesValidos) {
    console.log(saque.toFixed(2))
}
console.log("-".repeat(40))
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)
console.log(`total dos saques: R$ ${totalSacado.toFixed(2)}`)

const saquesInvalidos = saques.length - saquesValidos.length
console.log(`\nNº de tentativas de saques (saques inválidos): ${saquesInvalidos}\n`)
