const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let frase = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    frase = frm.inFrase.value;
    console.log(frase)
    const maior = frase.toUpperCase()
    console.log(maior)
    const pelada = maior.replace(/\s+/g, "");
    console.log(pelada)
    meiaPelada = pelada.split('').reverse().join('')
    console.log(meiaPelada)
    if (pelada === meiaPelada) {
        resp.innerHTML ='É um palindromo !!! Êhhhhh'
    } else {
        resp.innerHTML = 'Não é palindromo !!! Buuuuuu'
    }
    })

    frm.addEventListener("reset", () => {
        resp.innerText= ""
        frm.inFrase.focus()
        criptoglobal = ""
    })
