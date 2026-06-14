const input = document.getElementById('inputTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const lista = document.getElementById('lista');
const btnExcluirSelecionada = document.getElementById('btnExcluirSelecionada');

let tarefaSelecionada = null; // guarda o elemento h5 selecionado (ou null)

// cria um item de tarefa (h5) com botão de selecionar
function criarTarefa(texto) {
  const wrapper = document.createElement('div');
  wrapper.className = 'tarefa';

  const h5 = document.createElement('h5');
  h5.textContent = texto;

  const btnSel = document.createElement('button');
  btnSel.textContent = 'Selecionar';
  btnSel.className = 'btnSel';

  // clique no botão "Selecionar" alterna seleção
  btnSel.addEventListener('click', () => {
    // se já houver uma selecionada diferente, remove a classe dela
    if (tarefaSelecionada && tarefaSelecionada !== wrapper) {
      tarefaSelecionada.classList.remove('selecionada');
    }

    // alterna a classe no wrapper atual
    const jaSelecionada = wrapper.classList.toggle('selecionada');

    // atualiza referência global
    tarefaSelecionada = jaSelecionada ? wrapper : null;

    // opcional: capturar valor do texto selecionado
    if (tarefaSelecionada) {
      const textoSel = tarefaSelecionada.querySelector('h5').textContent;
      console.log('Selecionada:', textoSel);
      // aqui você pode salvar em variável, exibir em outro local, etc.
    } else {
      console.log('Nenhuma tarefa selecionada');
    }
  });

  wrapper.appendChild(h5);
  wrapper.appendChild(btnSel);
  return wrapper;
}

// adicionar nova tarefa
btnAdicionar.addEventListener('click', () => {
  const texto = input.value.trim();
  if (!texto) return;
  const item = criarTarefa(texto);
  lista.appendChild(item);
  input.value = '';
});

// excluir a tarefa atualmente selecionada
btnExcluirSelecionada.addEventListener('click', () => {
  if (!tarefaSelecionada) {
    alert('Nenhuma tarefa selecionada.');
    return;
  }
  tarefaSelecionada.remove();
  tarefaSelecionada = null;
});
