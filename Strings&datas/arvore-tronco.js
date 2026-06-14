const prompt = require("prompt-sync")()
const altura = Number(prompt("Altura da árvore: "))
console.log()
for (let i=1; i<=altura; i++) {
    const espacos = 30 + (altura -i)
    const tronco = 30 + 3
    if (i <= 4) {
    console.log(" ".repeat(espacos+1) + "*".repeat(i*2))
    } else {
        console.log(" ".repeat(espacos) + "*".repeat(i) + "||" + "*".repeat(i))
    }
}
for (i = 1; i <= altura/4; i++) {
console.log(" ".repeat(30 + (altura/2)) + " ".repeat(altura/2)+ "||")
}

