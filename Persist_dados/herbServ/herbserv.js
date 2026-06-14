const numServ = document.querySelector("#numServ")
const inServ = document.querySelector("#inServ")
const btAdicionar = document.querySelector("#btAdicionar")
const btExec = document.querySelector("#btExecutar")
const btLimpar = document.querySelector("#btLimpar")
const resp1 = document.querySelector("#resposta1")
const resp2 = document.querySelector("#resposta2")


function adicionarServ(){    
    texto = inServ.value 
    resp1.innerHTML=""
    resp2.innerHTML=""

    if (verificarServ()) {
        const servicos = localStorage.getItem("servicos") + ";" + texto
        localStorage.setItem("servicos",servicos)
        // lá dentro do localStorage todos são string
    } else {
        localStorage.setItem("servicos",texto) // a primeira vez tem que inserir
    } // sem o ponto-e-vírgula porque quando verifica e tem algo em servicos já adiciona ponto-e-vírgula
   window.alert(`serviço adicionado`)
   
   let pendentes = localStorage.getItem("servicos").split(";") //transforma em array
   if (pendentes.length < 2 ){
   numServ.innerHTML= `Há ${pendentes.length} serviço pendente`
   }else if (pendentes.length >= 2 ) {
    numServ.innerHTML= `Há ${pendentes.length} serviços pendentes` 
   } else {
    numServ.innerHTML= `Não há serviços pendentes`
   }
}

function verificarServ() {
    if(localStorage.getItem("servicos")){
        return true
    } else {
        return false
    }
}

function executarServ() {
    inServ.value=""
    const servicos = localStorage.getItem("servicos").split(";")
    numServ.innerHTML = `Existem ${Number(servicos.length)-1} ainda para serem feitos`   
    resp1.innerHTML= "Serviço sendo realizado no momento: <br>"
    resp2.innerHTML= `${servicos.shift()}`
    let retiraServ = servicos.join(";")
    localStorage.setItem("servicos",retiraServ)
}

function limparServ() {
    localStorage.removeItem("servicos")
    resp1.innerHTML= ""
    resp2.innerHTML= ""
    inServ.focus()
}

function mostraListaServ() {
    
    if (verificarServ()) {
        const servicos = localStorage.getItem("servicos").split(";")
        resp1.innerHTML= `Esse é o proximo serviço a ser executado: ${servicos[0]}`
    } else {
        resp1.innerHTML = "Não tem serviços cadastrados no momento"
        resp2.innerHTML = "adicione um serviço por favor"
    }
    inServ.innerHTML= `Existem ${servicos.length} para serem executados`
}

// MAR DE BOTÕES
btAdicionar.addEventListener("click", adicionarServ)
btExec.addEventListener("click",executarServ)
btLimpar.addEventListener("click",limparServ)

//LOAD DA PÁGINA
window.addEventListener("load", mostraListaServ)