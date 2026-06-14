const produtos = document.querySelector("#inProduto")
const resp1 = document.querySelector("#resposta1")
const resp2 = document.querySelector("#resposta2")
const btCadastro = document.getElementById("btCadastro")
const btLimpar = document.getElementById("btLimpar")

const verificaCompras = () => {
    if (!localStorage.getItem("compras")) {
        alert("Não há nenhum produto cadastrado")
        produtos.focus()
        return
    }
    mostrarProdutos()
}

const adicionarProduto = () => {

    const novoProduto = produtos.value.trim()
    if (!novoProduto) {
        alert("Por favor, insira um produto.");
        return;
    }

    let compras = localStorage.getItem("compras");
    if (compras) {
        compras = compras.split(";");
        if (compras.includes(novoProduto)) {
            alert("Produto já cadastrado")
            return
        }
        compras.push(novoProduto)
    } else {
        compras = [novoProduto];
    }

    localStorage.setItem("compras", compras.join(";"))
    mostrarProdutos()
}

function mostrarProdutos() {
    const compras = localStorage.getItem("compras").split(";")
    compras.sort()
    resp1.innerHTML = "Produtos para comprar <br>" + "-".repeat(40)
    resp2.innerText = compras.join("\n")
}

function limparLista() {
    localStorage.removeItem("compras")
    resp1.innerHTML = ""
    resp2.innerHTML = ""
}

btCadastro.addEventListener("click", (e) => {
    e.preventDefault()
    adicionarProduto()
})

btLimpar.addEventListener("click", () => {
    limparLista()
})

window.addEventListener("load", verificaCompras)

/* Erros cometidos:
1. o botão fora do form tem que ter "click" não pode ser submit
2. innerText renderiza como uma string com \n; 
   innerHTML como um HTML com tags tipo <br>
3. window "load" tem que ficar no final para carregar as funções primeiro
4. Separar a função adicionar da função mostrar na tela
5. Usar a mudança de array => string e depois de string => array para mostrar
e formatar dados na tela
6. incluir melhor os dados para o localStorage
7. não dá para fazer .sort() no getItem(), tem que ser a parte.
*/