const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const h2 = document.querySelector("h2")

let alunos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const nota = Number(frm.inNota.value)
    alunos.push({nome:nome, nota:nota})
    console.log({nome,nota})
    frm.inNome.focus()
    ListarAlunos();
})

function ListarAlunos() {
    let lista = ""
    h2.innerText = ""
    alunos.forEach((aluno) => {
        lista += `${aluno.nome} -> ${aluno.nota} pontos\n`  
    })
    resp.textContent = lista;
    frm.inNome.value = ""
    frm.inNota.value = ""
    frm.inNome.focus()
}
    
frm.btListar.addEventListener("click", ListarAlunos)

frm.btAprovados.addEventListener("click", () => {
    h2.innerText=""
    const corte = Number(prompt("Qual a nota de corte ?"))
    let aprovados = alunos.filter(aluno => aluno.nota > corte )    
    let ordAprovados = aprovados.sort((a,b)=> b.nota-a.nota)
    console.log(ordAprovados)
    for (let i = 0; i<ordAprovados.length;i++) {
        h2.innerText += `${ordAprovados[i].nome} -> ${ordAprovados[i].nota}\n`    
    }
})

frm.addEventListener("reset", () => {
    alunos = []
    h2.innerText=""
    resp.innerText=""
    frm.inNome.focus()
})