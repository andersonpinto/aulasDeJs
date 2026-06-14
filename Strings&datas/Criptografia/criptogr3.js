const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let criptoglobal = ""
let frasecomp = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let criptopar = ""
    let criptoimp = ""

    const frase = frm.inFrase.value
    frasecomp = frase  // Salva a frase original para desembaralhar

    for (let i = 0; i < frase.length; i++) {
        if (i % 2 === 0) {
            criptopar += frase[i]
        } else {
            criptoimp += frase[i]
        }
    }
    
    criptoglobal = criptopar + criptoimp
    resp.innerText = criptoglobal
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
    frm.inFrase.focus()
    criptoglobal = ""
})

frm.btnDese.addEventListener("click", () => {
    let retornocomp = ""
    
    for (let i = 0; i < frasecomp.length/2; i++) {
        retornocomp += frasecomp[i * 2]
    }
    
    for (let i = 0; i < Math.floor(frasecomp.length/2); i++) {
        retornocomp += frasecomp[i * 2 + 1]
    }
    
    resp.innerText = retornocomp
})
// Esse código fornecido pelo Claude não funcionou 