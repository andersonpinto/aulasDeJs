const inName = document.getElementById("inName");
const resp = document.getElementById("resposta");
const btName = document.getElementById("btName");

btName.addEventListener("click", (e)=> { 
    e.preventDefault();
    const nome = String(inName.value).trim();
    let vetorNome = nome.split(" ");

// método clássico de criar elemento no HTLM, mais verboso.

    for (let i=0; i<vetorNome.length; i++){
        const h3 = document.createElement("h3");
        const texto = document.createTextNode(vetorNome[i]);
        h3.appendChild(texto);
        resp.appendChild(h3);        
    }
    inName.value = "";
});
