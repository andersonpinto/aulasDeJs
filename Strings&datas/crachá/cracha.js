const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let cracha = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    espaco = " "
    let last = nome.lastIndexOf(" ")
    let first = nome.indexOf(" ")
    resp.innerText = `${nome.substr(0,first)} ${nome.substr(last)}`
})