const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    //chama function que verifica se o peso já foi apostado
    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
        frm.inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) {
        //obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {
        localStorage.setItem("melanciaNome", nome) //salva os dados sem ";"
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()
    frm.reset()
    frm.inNome.focus()
})
//fuction para obter se existe dados em localStorage
const verApostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) {
        //obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem("melanciaPeso").split(";")
        //o peso deve ser convertido em string, pois o vetor contém strings
        return pesos.includes(peso.toString())
    } else {
        return false
    }
}

const mostrarApostas = () => {
    // se não há apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        //limpa o espaço de exibição das apostas ( para quando "Limpar apostas")
        respLista.innerText = ""
        return
    }

    //obtém o conteúdo das variáveis salvas no localStorage, separando-as
    // em elementos de vetor a cada ocorrência do ponto-e-vírgula
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let linhas = "" // irá acumular as linhas a serem exibidas

    //loop para percorrer todos os elementos da array
    for (let i = 0; i < nomes.length; i++) {
        //concatena em linhas os nomes dos apostadores e suas apostas
        linhas += nomes[i] + " - " + pesos[i] + "g \n"
    }
    // exibe as linhas (altera o conteúdo do elemento respLista)
    respLista.innerText = linhas
}
// chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () => {
    // se não há apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas")
        return //(retorna e não executa comandos abaixo)
    }
    //solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia ?"))
    // se não informou, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }
    //obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    //valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    //percorre as apostas
    for (let i = 1; i < nomes.length; i++) {
        //calcula diferença de peso do vencedor e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)
        //se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]
            vencedorPeso = Number(pesos[i])
        }
    }
    // monta mensagem com dados do vencedor
    let mensagem = "Resultado - Peso correto: " + pesoCorreto + "g"
    mensagem += "\n" + "-".repeat(40)
    mensagem += "\nVencedor: " + vencedorNome
    mensagem += "\nAposta: " + vencedorPeso + "g"
    alert(mensagem)
})

frm.btLimpar.addEventListener("click", () => {
    //solicita confirmação para excluir as apostas
    if (confirm("Confirma a exclusão de todas as apostas ?")) {
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        localStorage.clear()    
        mostrarApostas()
    }
})