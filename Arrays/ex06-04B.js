const prompt = require("prompt-sync")();

let clientes = [];
let opcao = "";

while (opcao !== "4") {  // Continua até que o usuário escolha sair
    console.log("\nOpções:");
    console.log("0 = mostrar clientes");
    console.log("1 = entrar um nome");
    console.log("2 = apagar primeiro nome");
    console.log("3 = apagar último nome");
    console.log("4 = sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "0":
            console.log(clientes);
            break;
        case "1":
            const nome = prompt("Entre um nome: ");
            clientes.push(nome);
            break;
        case "2":
            clientes.shift();
            break;
        case "3":
            clientes.pop();
            break;
        case "4":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}

console.log("_".repeat(40));
console.log("Bye bye");
