const frm = document.querySelector("form") //obter elementos da página
const tbFilmes = document.querySelector("table")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //pegar valor dos campos ↓↓↓↓↓
    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    inserirLinha(titulo,genero) //chama funtion que insere filme na tabela
    gravarFilme(titulo,genero) // chama function que grava dados em localStorage

    // limpa o campo depois de gravado ↓↓↓↓
    frm.reset()
    frm.inTitulo.focus()
})

const inserirLinha = (titulo,genero) => {
    const linha = tbFilmes.insertRow(-1) // adiciona uma linha na tabela

    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"
}

const gravarFilme = (titulo,genero) => {
    //se houver dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        //obtém os dados e acrescenta ";" e o titulo/genero informado
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero
        localStorage.setItem("filmesStudio", filmesTitulo) //grava dados
        localStorage.setItem("filmesGenero", filmesGenero) // em locasStorage
    } else {
        //senão, é a primeira inclusão (salva sem delimitador)
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
}

window.addEventListener("load", () => {
    // se houver dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
    const titulos = localStorage.getItem("filmesTitulo").split(";")
    const generos = localStorage.getItem("filmesGenero").split(";")

    //percorre os elementos do vetor e os insere na tabela
    for (let i = 0; i < titulos.length; i++) {
        inserirLinha(titulos[i], generos[i])
    }
    }
})

tbFilmes.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contém exclui
    if (e.target.classList.contains("exclui")) {
        //remove a linha da tabela, correspondente ao símbolo de excluir clicado
        e.target.parentElement.parentElement.remove()

        localStorage.removeItem("filmesTitulo")
        localStorage.removeItem("filmesGenero")

        //salva novamente (se existir), acessando o conteúdo da tabela
        for (let i = 1; i < tbFilmes.rows.length; i++) {
            //obtém o conteúdo da tabela (coluna  0; título; coluna 1: genero)
            const auxTitulo = tbFilmes.rows[i].cells[0].innerText
            const auxGenero = tbFilmes.rows[i].cells[1].innerText
            gravarFilme(auxTitulo, auxGenero) //chama gravarFilme com dados da tabela
        }
    }
})

