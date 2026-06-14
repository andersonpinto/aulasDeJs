const prompt = require("prompt-sync")()

x = true; clientes = [];

while ( x ) {
        console.log("\nEntre com uma opção: ")
        console.log("numero 0 = mostrar a lista; numero 1 entrar um nome; número 2 = apagar primeiro nome)")
        console.log("numero 3 = apagar último nome; número 4 = sair")
        const opcao =  prompt("tecle a opção:  ")
        
        if (opcao == "0") { console.log(clientes) }
        else if ( opcao == "1" ) { const nome = prompt("Entre um nome: ");clientes.push(nome);}
        else if ( opcao == "2" ) { clientes.shift() }
        else if ( opcao == "3" ) { clientes.pop() }
        else { console.log("Saindo..."); break }
       
     }    
console.log("_".repeat(40))
console.log("Bye bye")