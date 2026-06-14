const produtos = document.querySelector("#inProduto");
const resp1 = document.querySelector("#resposta1");
const resp2 = document.querySelector("#resposta2");
const btCadastro = document.querySelector("#btCadastro"); // Certifique-se de que o botão existe
const btLimpar = document.querySelector("#btLimpar"); // Certifique-se de que o botão existe

const verificaCompras = () => {
    if (!localStorage.getItem("compras")) {
        alert("Não há nenhum produto cadastrado");
        produtos.focus();
        return;
    }
    mostrarProdutos();
}

const adicionarProduto = () => {
    const novoProduto = produtos.value.trim();
    if (!novoProduto) {
        alert("Por favor, insira um produto.");
        return;
    }

    let compras = localStorage.getItem("compras");
    if (compras) {
        compras = compras.split(";");
        if (compras.includes(novoProduto)) {
            alert("Produto já cadastrado.");
            return;
        }
        compras.push(novoProduto);
    } else {
        compras = [novoProduto];
    }

    localStorage.setItem("compras", compras.join(";"));

    produtos.value=""
    produtos.focus()    
    mostrarProdutos();
}

const mostrarProdutos = () => {
    const compras = localStorage.getItem("compras").split(";");
    resp1.innerHTML = "Produtos para compra<br>" + " - ".repeat(40);
    resp2.innerText = compras.join("\n");    
}

function limparLista() {
    localStorage.removeItem("compras");
    resp1.innerHTML = "";
    resp2.innerHTML = "";
}

btCadastro.addEventListener("click", (e) => {
    e.preventDefault();
    adicionarProduto();    
});

btLimpar.addEventListener("click", () => {
    limparLista();
});

window.addEventListener("load", verificaCompras);
