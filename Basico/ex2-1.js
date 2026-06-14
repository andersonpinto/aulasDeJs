//cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const loco = document.querySelector("#testeLoco")

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    resp.innerText = `Olá ${nome}`
    loco.innerText = "O loco esse texto cara !!!"
    e.preventDefault() //evita envio do form 
}) 