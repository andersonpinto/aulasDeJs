const prompt = require("prompt-sync")();
console.log("Entre com um nome do cliente e após a idade do mesmo. Após digite o enter. Digite \"FIM\" para sair do programa.");
const clientes = [];
do {
    const nome = prompt ("Nome: ")
    if (nome == "FIM") {
        break;
    }
    const idade = Number(prompt("Idade: "))
    clientes.push({nome,idade})
    console.log("Ok! Cliente cadastrado(a)...")       
} while (true) 
    console.log ("\nFila Preferencial")
    console.log(".".repeat(40))
    const filaPref = clientes.filter(cliente => cliente.idade >=60)
    filaPref.forEach((fila, i) => {
        console.log(`${i+1}. ${fila.nome}`)
    })
console.log("\nFila Normal")
console.log(".".repeat(40))
const filaNormal = clientes.filter(cliente => cliente.idade <60)
filaNormal.forEach((fila,i) => {
    console.log(`${i+1}. ${fila.nome}`)
})