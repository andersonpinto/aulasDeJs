const inName = document.getElementById("inName");
const resp = document.getElementById("resposta");
const btName = document.getElementById("btName");

btName.addEventListener("click", (e)=> { 
    e.preventDefault();
    const nome = String(inName.value).trim();
    let vetorNome = nome.split(/\s+/);

// abaixo cria elemento HTML via forEach, mais limpo, menor:

    vetorNome.forEach(p => {
        const h3 = document.createElement("h3");
        h3.textContent = p;
        resp.appendChild(h3);
    });
    inName.value = "";
});

btReset.addEventListener("rest", (e) => {
    e.preventDefault();
    inName.value="";
    resp.innerText="";
})
