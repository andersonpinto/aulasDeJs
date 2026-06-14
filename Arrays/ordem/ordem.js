const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const h2 = document.querySelector("h2")

let numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = frm.inNumero.value
    numeros.push(valor)
    frm.inNumero.value = ""
    frm.inNumero.focus()
    frm.btListar.dispatchEvent(new Event ("click"))
})
    
frm.btListar.addEventListener("click", () => {    
    resp.innerText = ""
    h2.innerText=""
    resp.innerText += ` Números fornecidos: ${numeros}\n`  
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btVerificar.addEventListener("click", () => {
    let ordNum = numeros.slice().sort((a,b) => a - b )
    for (i=0; i<numeros.length; i++) {
        if (numeros[i] === ordNum[i]){
            let verifica = true;
            h2.innerText = " Ordem crescente"
        } else {
            let verifica = false;
            h2.innerText = " Ordem não crescente";
        }
    }
})

frm.addEventListener("reset", () => {
    numeros = []
    h2.innerText=""
    resp.innerText=""
    frm.inNumero.focus()
})