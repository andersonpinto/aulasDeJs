const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    /* 
     pega o valor string, atribui a textNode, criaElement 'h5';
     appendChild o texto em h5 e depois appenChild h5 dentro do div
    */
    const tarefa = frm.inTarefa.value.trim()
    const texto = document.createTextNode(tarefa)
    const h5 = document.createElement("h5")
    h5.appendChild(texto)
    dvQuadro.appendChild(h5)

    //limpa tudo
    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar")
        return
    }

    /* 
    Usa-se o valor negativo porque [-1] como índice transforma o índice em um
    atributo do elemento da array que o tem como índice. Ele passa a não contar
    no length e também não é acessado com MAP, nem com forEach. Mas se o colocarmos
    como índice podemos acessar o valor do elemento que fica "escondido" na array.
    */
    let aux = -1 
    
    /* 
    percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    neste caso não acha o índice negativo, só os normais inteiros e os deixa com 
    a classe 'tarefa-normal'
    */
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal" //troca para normal
            aux = i
            break
        }
    }

    /* se a linha que está selecionada é a ultima, irá voltar para primeira, pois
    depois que somar com +1 vai se tornar ZERO (que é o indice da primeira linha*/   
    if (aux == tarefas.length - 1) {
        aux = -1
    }

    //muda estilo da próxima linha toda vez que clica o botão
    tarefas[aux + 1].className = "tarefa-selecionada" 
    
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    let aux = -1 // variável aux fica negativa para indicar linha selecionada

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") { // se é da classe selecionada
            aux = i  //muda valor da variável aux
        }
    })
    if (aux == -1) {
        alert("Selecione uma tarefa para removê-la...")
        return
    }
    //solicita confirmação (exibindo o conteúdo da tag h5)
    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux])
    }
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) {
        alert("Não há tarefas para serem salvas")
        return
    }
    let dados = ""
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"
    })
    // grava os dados em localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1))
    // confere se dados foram armazenados em localStorage
    if (localStorage.getItem("tarefasDia")) {
        alert("OK! tarefas Salvas")
    }
})

window.addEventListener("load", () => {
    //verifica se há tarefas salvas no navegador do usuário
    if (localStorage.getItem("tarefasDia")) {
        //cria um vetor com a lista de tarefas (separadas pelo split ";")
        const dados = localStorage.getItem("tarefasDia").split(";")

        //percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(dado)
            h5.appendChild(texto)
            dvQuadro.appendChild(h5)
        })
    }
})