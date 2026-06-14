const prompt = require("prompt-sync")();

const vinhos = []

function titulo(texto) {
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}
function incluir() {
    titulo("--<Inclusão de Vinhos>--")

    const marca = prompt("Marca...: ") //lê dados do vinho
    const tipo = prompt("Tipo....: ")
    const preco = Number(prompt("Preço R$: "))
    vinhos.push({marca,tipo,preco}) //insere um objeto no vetor
    console.log("Ok, Vinho cadastrado com sucesso.")
}
function listar(){
    titulo("--< Lista de vinhos cadastrados >--")
    console.log("Marca"+".".repeat(20)+" Tipo" + ".".repeat(20) + "Preço R$: ")

    //percorre o vetor para exibir todos os vinhos
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` + `${vinho.preco.toFixed(2).padStart(9)}`)   
    }
}
function pesquisar() {
    titulo("---< Pesquisa por tipo de vinho >---")

    const pesq = prompt("Tipo: ") //lê o tipo do vinho a pesquisar

    let contador = 0 //contador para verificar se existe
    console.log("Marca"+".".repeat(20) + "Tipo" + ".".repeat(20)+ "Preço R$")

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` +
            `${vinho.preco.toFixed(2).padStart(9)}`)
        contador++
    }
}
// se percorreu todos os vinhos e contador continua == 0, significa que não há
if (contador == 0) {
    console.log(`OBS: Não há vinhos cadastrados do tipo "${pesq}"`)
    }
}
function calcularMedia() {
    titulo("---< Média e Destaques do Cadastro de Vinhos >---")

    const num = vinhos.length // obtém número de elementos do vetor
    if (num == 0 ) {
        console.log(`Obs.: Não há vinhos cadastrados`)
        return
    }
    let total = 0 // para acumular o total 
    for (const vinho of vinhos) {
        total += vinho.preco
    }
    const media = total / num // calcula o preço médio
    const vinhos2 = [...vinhos] // cria uma cópia do vetor original
    vinhos2.sort((a,b)=> a.preco - b.preco) //ordens por preco
    const menor = vinhos2[0] // menor preço é o primeiro (posição 0)
    const maior = vinhos2[num-1] // maior preço é o último (posição num-1)

    console.log(`preço médio dos vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)
}


// Programa principal
do {
    titulo("===< Cadastro de Vinhos >===")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pequisa por Tipo")
    console.log("4. Média e Destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))
    if (opcao == 1) {
        incluir()
    } else if (opcao == 2 ) {
        listar()
    } else if (opcao == 3 ) {
        pesquisar()
    } else if (opcao == 4 ) {
        calcularMedia()
    } else {
        break
    } 
} while (true)

