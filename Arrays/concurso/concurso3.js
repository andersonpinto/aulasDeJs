const form = document.querySelector("form");
const inNome = document.getElementById("inNome");
const inNota = document.getElementById("inNota");
const btListar = document.getElementById("btListar");
const btAprovados = document.getElementById("btAprovados");
const preSaida = document.querySelector("pre");
const h2Saida = document.querySelector("h2");

const alunos = []; // Array para armazenar os alunos e suas notas

// Função para adicionar aluno
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    const nome = inNome.value;
    const nota = Number(inNota.value);

    // Validação simples para nota
    if (isNaN(nota) || nota < 0 || nota > 100) {
        alert("Por favor, insira uma nota válida (entre 0 e 100).");
        inNota.focus();
        return;
    }

    alunos.push({ nome: nome, nota: nota });
    console.log("Aluno adicionado:", { nome, nota }); // Para depuração

    inNome.value = "";
    inNota.value = "";
    inNome.focus();
    
    listarAlunos(); // Atualiza a lista após adicionar
});

// Função para listar todos os alunos
function listarAlunos() {
    if (alunos.length === 0) {
        preSaida.textContent = "Nenhum aluno cadastrado.";
        h2Saida.textContent = "";
        return;
    }

    let lista = "";
    // Usando forEach para iterar sobre o array de alunos
    alunos.forEach((aluno, index) => {
        lista += `${index + 1}. ${aluno.nome} - ${aluno.nota} pontos\n`;
    });
    preSaida.textContent = lista;
    h2Saida.textContent = ""; // Limpa o título de aprovados
}

btListar.addEventListener("click", listarAlunos);

// Função para listar aprovados
btAprovados.addEventListener("click", () => {
    const notaCorte = prompt("entre a nota de corte"); // Define a nota de corte para a 2ª fase

    // Filtra os alunos que têm nota maior ou igual à nota de corte
    const aprovados = alunos.filter(aluno => aluno.nota >= notaCorte);

    if (aprovados.length === 0) {
        preSaida.textContent = "";
        h2Saida.textContent = "Nenhum aluno aprovado para a 2ª fase.";
        return;
    }

    // Ordena os aprovados por nota (decrescente)
    aprovados.sort((a, b) => b.nota - a.nota);

    let listaAprovados = "Alunos Aprovados para a 2ª Fase:\n";
    // Usando forEach para iterar sobre o array de aprovados
    aprovados.forEach((aluno, index) => {
        listaAprovados += `${index + 1}. ${aluno.nome} - ${aluno.nota} pontos\n`;
    });
    preSaida.textContent = listaAprovados;
    h2Saida.textContent = `(Nota de Corte: ${notaCorte})`;
});

// Limpar os campos e o array de alunos ao clicar em "resetar teste"
form.addEventListener("reset", () => {
    alunos.length = 0; // Esvazia o array
    preSaida.textContent = "";
    h2Saida.textContent = "";
    console.clear(); // Limpa o console para uma nova "sessão"
});