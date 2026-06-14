const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const senha = frm.inSenha.value

    const maius = senha.match(/[A-Z]/g) || []
    const num = senha.match(/[0-9]/g) || []
    const simb = senha.match(/\W|_/g) || []

    if ( 
         maius.length >= 1 &&
         num.length >= 2 &&
         simb.length >= 1 
        ) {
            if ( senha.length >= 8 && senha.length <=15 ) {
                resp.innerText= ""
                resp.innerText= "Senha Válida"
            } else {
                resp.innerText= ""
                resp.innerText= "Senha Inválida"
            }
        } else {
            resp.innerText=""
            resp.innerText=" Senha Inválida"
        }
})