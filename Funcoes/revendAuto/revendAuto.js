const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //pega as variáveis lá do HTML e atribui
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    // usa funcao para classificar veículo baseado no ano do mesmo
    const classificacao = classificarVeiculo(ano)
    // calcula entrada e parcela baseado no preço e classif do carro fornecido
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada) / 10
    // apresenta o resultado dos cálculos na tela
    resp1.innerHTML = modelo + " - " + classificacao
    resp2.innerHTML = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerHTML = `Parcela R$: ${parcela.toFixed(2)}`
})
//produz uma arrow function que retorna a classificação
const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear()
    let classif
    if (ano == anoAtual) {
        classif = "Novo"
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2 ) {
        classif = "Seminovo"       
    } else {
        classif = "Usado"
    }
    return classif
}

//arrow function que calcula a entrada baseada na classif que foi selecionada antes
const calcularEntrada = (valor, status) =>
    status == "Novo" ? valor * 0.5 : valor * 0.3
