const frm = document.querySelector("form");
const resp = document.querySelector("pre");
clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    let times = frm.inClubes.value;
    clubes.push(times);
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => { 
    resp.innerText= ""
    resp.innerText = `${clubes}`
    frm.inClubes.value = ""
    frm.inClubes.focus()
})

frm.btMontar.addEventListener("click", () => {
    if (clubes.length % 2 != 0 ) {
        resp.innerText ="número de clubes não me permite montar tabela"
    } else {
        let tabelaJogos = ""
        let revClubes = clubes.slice().reverse()
        for ( i = 0; i < (clubes.length/2); i++) {
            tabelaJogos += `${clubes[i]} x ${revClubes[i]}\n`
        }
        resp.innerText= tabelaJogos;
    }
})
