const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let fraseOriginal = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value
    fraseOriginal = frase  // Salva a frase original

    let criptopar = ""
    let criptoimp = ""

    for (let i = 0; i < frase.length; i++) {
        if (i % 2 === 0) {
            criptopar += frase[i]
        } else {
            criptoimp += frase[i]
        }
    }
    
    const criptoglobal = criptopar + criptoimp
    resp.innerText = criptoglobal
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
    frm.inFrase.focus()
})

frm.btnDese.addEventListener("click", () => {
    let desencriptado = ""
    const metade = Math.ceil(fraseOriginal.length / 2)

    for (let i = 0; i < metade; i++) {
        // Caracteres pares
        if (i < fraseOriginal.length) {
            desencriptado += fraseOriginal[i]
        }
        
        // Caracteres ímpares
        if (i + metade < fraseOriginal.length) {
            desencriptado += fraseOriginal[i + metade]
        }
    }
    
    resp.innerText = desencriptado
})
// segunda tentativa de claude que não conseguiu desencriptar