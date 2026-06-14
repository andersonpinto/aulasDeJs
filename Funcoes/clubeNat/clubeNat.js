const frm = document.querySelector("form")
const resp1 = document.getElementById("out1")
const resp2 = document.getElementById("out2")

function retornarTracos() {
    const nome = frm.inNome.value
    let vetNome = nome.trim().split(" ")
    let vetTracos = []
    for (i=0; i<vetNome.length; i++) {
        vetTracos[i] = "-".repeat(vetNome[i].length)
    }
    resp1.innerText = `${vetNome.join(" ")}\n${vetTracos.join(" ")}`
}

function categorizarAluno() {
    const idade = Number(frm.inIdade.value)
    if (idade <= 12 ) {
        categoria = "Infantil"
    } else if (idade > 12 && idade < 19) {
        categoria = "Juvenil"
    } else {
        categoria = "Adulto"
    }
    resp2.innerText = `A categoria do aluno é ${categoria}`
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    categorizarAluno()
    retornarTracos()
})

frm.btnReset.addEventListener("click", ()=> {
    resp2.innerText = ""
    resp1.innerText = ""
    frm.inNome.value = ""
    frm.inIdade.value = ""
    window.location.reload()
})