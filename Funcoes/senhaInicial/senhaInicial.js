const frm = document.querySelector("form")
const resp1 = document.getElementById("out1")

function validarNome() {
    let nome = frm.inNome.value
    let vetNome = nome.split(" ")
    if (vetNome.length <= 1 ) {
        alert("Nome inválido, tem que ser nome completo")
        frm.inNome.value = ""
        location.reload()
        frm.inNome.focus() 
    }
}

function obterSobrenome(){
    nome = frm.inNome.value
    let vetNome2 = nome.trim().split(" ")
    vetNome2.shift()
    sobrenome = vetNome2.slice(-1).join(" ").toLowerCase()
    return sobrenome 
}

function contarVogais(){
    let nome = frm.inNome.value
    let nomeTrim = nome.split(" ").join("")
    let vogais = nomeTrim.match(/[aeiouáéíóúãõâêîôû]/gi)|| []
    let numVogais = vogais.length
    if (numVogais < 10) {
        numVogais = "0"+ numVogais;
    }
    return(numVogais)
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    validarNome()
    resp1.innerText = `Senha Inicial: ${obterSobrenome()}${contarVogais()} `
})

frm.btnReset.addEventListener("click", ()=> {
    resp1.innerText = ""
    frm.inNome.value = ""
    window.location.reload()
})