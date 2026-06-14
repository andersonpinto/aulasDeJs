const prompt = require("prompt-sync")();
console.log("Entre com um nome e após o enter com a nota. Digite \"FIM\" para sair do programa.");
const alunos = [];
do {
    const nome = prompt ("Nome: ")
    if (nome == "FIM") {
        break;
    }
    const nota = Number(prompt("Nota: "))
    alunos.push({nome,nota})
    console.log("Ok! Aluno(a) cadastrado(a)...")       
} while (true) 
    console.log (".".repeat(40))
    const maior = alunos.reduce((a,b) => Math.max(a,b.nota),0)
    const menor = alunos.reduce((a,b) => Math.min(a,b.nota),Infinity) 
    console.log(`Maior nota: ${maior}`)
    console.log(`Menor nota: ${menor}`)
    if (maior >=7) {
        const destaques = alunos.filter(aluno => aluno.nota == maior)
        for (const destaque of destaques) {
            console.log(`- O MAIOR DESTAQUE DA SALA É:  ${destaque.nome}`)
        }
    }else {
        console.log("Não há alunos em destaque na turma")
        const retardados = alunos.filter(aluno => aluno.nota == menor)
        for (const retardado of retardados) {
        console.log("**".repeat(20))
        console.log(`O maior retardado é: ${retardado.nome}`)
        console.log("**".repeat(20))
        }
   } 


