// Acessando abaixo os elementos do formulário

const frm = document.querySelector("form")
const preco = document.getElementById("inValor")
const resp1 = document.getElementById("outDesc")
const resp2 = document.getElementById("outPagar")
const selConv = document.getElementById("sel-Conv")
const lblConv = document.getElementById("lblConv") 
const rbSim = document.getElementById("rbSim")
const rbNao = document.getElementById("rbNao")

// funções 
function atualizaExibe() {
    if (rbSim.checked) {
        selConv.className="exibe"
        lblConv.className="exibe"
    } else if (rbNao.checked) {
        selConv.className="oculta"
        lblConv.className="oculta"
    }
}

function desconto() {
    let desconto = 0
    if (rbSim.checked) {
        desconto = descConv()   
    } else if (rbNao.checked) {
        desconto = 0.1
    } else {
        alert("Nenhum radio checado")
        return
    }
    return desconto  
}

function descConv() {
    const convenio = selConv.value
    console.log(convenio)

    let desconto = 0;
    if (convenio === "amigo") {
        desconto = 0.2
    } else if (convenio === "saude") {
        desconto = 0.5
    } else {
        return
    }
    return desconto
}

// Ouvintes de eventos:

rbSim.addEventListener("click", atualizaExibe)
rbNao.addEventListener("click", atualizaExibe)

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let valor = parseFloat(preco.value);
    let desc = desconto();
    let valorDesc = valor * desc
    let pagar = valor - valorDesc
    resp1.innerText = `O valor do desconto é de: ${valorDesc.toFixed(2)} reais`
    resp2.innerText = `O valor a pagar é de: ${pagar.toFixed(2)} reais`
})

frm.btnReset.addEventListener("click", () => {
    resp1.innerText = ""
    resp2.innerText = ""
    preco.value = ""
    window.location.reload()
})