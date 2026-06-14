const imgClube= document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")
const inRadios = document.querySelectorAll("input")
const btnLimpeza = document.getElementById("btnLimpeza")

const trocarClube = ()=> {
    const clubes = ["Brasil","Pelotas","Farroupilha"]

    let selecao 
    for ( let i=0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i  // se selecionado, armazena indice do radio selecionado
            break
        }
    }

    if (selecao <= 2 ) {
        divTitulo.className = `row cores-${clubes[selecao]}`
        //muda a propriedade src com a imagem do clube selecionado
        imgClube.src= `brasao`+`${clubes[selecao].toLowerCase()}.jpg`
        imgClube.className = "img-fluid"
        imgClube.alt = `Simbolo do ${clubes[selecao]}` // texto alternativo
        localStorage.setItem("clube", clubes[selecao]) //salva nome do clube
    } else {
        divTitulo.className = "row"  //else (selecionou nenhum)
        imgClube.className = "d-none" // oculta imagem
        imgClube.alt= "" //limpa texto alt
        localStorage.removeItem("clube") //remove variável do localStorage
    }   
}

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
    if (localStorage.getItem("clube")) {   // se tiver salvo algum clube
        const clube = localStorage.getItem("clube")  //obtem nome do clube
        if (clube == "Brasil") {
            inRadios[0].checked = true
        } else if (clube == "Pelotas") {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }
        trocarClube()
    }
}

const verificaContVisitas = () => {
     if (localStorage.getItem("visitas")){
        contVisitas = Number(localStorage.getItem("visitas"))
        contVisitas++
        localStorage.setItem("visitas", contVisitas.toString())
        alert(`Que bom que você voltou !!! esta é sua visita número ${contVisitas} a nossa loja `)
    } else {
        alert("Muito bem-vindo! Esta é a sua primeira visita ao nosso site")
        let contVisitas = 1
        localStorage.setItem("visitas",contVisitas.toString())
    }
    verificarClube()   
}

btnLimpeza.addEventListener("click", ()=>{
    localStorage.clear()
})

window.addEventListener("load", verificaContVisitas)