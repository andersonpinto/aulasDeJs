const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const h2 = document.querySelector("h2")

let alunos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const nota = Number(frm.inNota.value)
    alunos.push({nome, nota})
    console.log(alunos)
    frm.reset()//inserir isto apagou array, Deu forte dor de cabeça. veja concurso2.js
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event ("click"))
})
    
frm.btListar.addEventListener("click", () => {
    resp.innerText = ""   
    for ( let i=0; i<alunos.length;i++) {
        resp.innerText += `${alunos[i].nome} -> ${alunos[i].nota}\n`  
    }
    frm.inNome.value = ""
    frm.inNota.value = ""
    frm.inNome.focus()
})

frm.btAprovados.addEventListener("click", () => {
    // Solicita a nota de corte via prompt
    const notaCorte = Number(prompt("Digite a nota de corte:"))
    
    // Ordena o array de alunos em ordem decrescente de notas
    const ordAlunos = alunos.sort((a, b) => b.nota - a.nota)
    
    // Filtra os alunos aprovados (nota maior ou igual à nota de corte)
    const aprovados = ordAlunos.filter(aluno => aluno.nota >= notaCorte)
    
    // Verifica se há aprovados
    if (aprovados.length === 0) {
        h2.innerText = "Não há alunos aprovados!"
        return
    }
    
    // Monta a string de saída com os alunos aprovados
    let saida = "Aprovados\n"
    saida += "----------\n"
    aprovados.forEach((aluno, index) => {
        saida += `${index + 1}. ${aluno.nome} - ${aluno.nota}\n`
    })
    
    // Exibe os aprovados no elemento h2
    h2.innerText = saida
})

frm.addEventListener("reset", () => {
    alunos = []
    h2.innerText=""
    resp.innerText=""
    frm.inNome.focus()
})