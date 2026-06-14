const prompt = require("prompt-sync")()
console.log("Insira data início no formato MM/DD/YYYY")
const dataBase = (prompt("data de início: "))
const data = new Date(dataBase)
const parcelas = prompt("Quantas parcelas ? ")

for (let i = 1; i<= parcelas; i++) {
    data.setMonth(data.getMonth()+1)//só de atualizar o mês atualiza o ano
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const diaZero = dia < 10 ? "0" + dia : dia //cria string com zero na frente do mês < 10
    const mesZero = mes < 10 ? "0" + mes : mes
    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`)
}
