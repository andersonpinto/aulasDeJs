const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    let last = nome.lastIndexOf(" ")
    let first = nome.indexOf(" ")
    resp.innerText = `${nome.substr(0,1).toLowerCase()}${nome.substr(first+1,1).toLowerCase()}${nome.substr((last+1)).toLowerCase()}@empresa.com.br`
})