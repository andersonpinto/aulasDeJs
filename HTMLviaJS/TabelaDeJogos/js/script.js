const frm = document.querySelector('form');
const btTabela = document.querySelector(".btTabela");
const btReset = document.querySelector(".btReset");
const btAdd = document.querySelector('.btAdd');
const inClube = document.querySelector(".inClube");
const lista = document.querySelector('.lista')
const tabJogos = document.querySelector('#tabJogos')

btAdd.addEventListener("click", () => {
    let clube = inClube.value.trim();
    if (!clube) return;
    const clubes = clube.split(',');
    clubes.forEach(c => {
        let texto = c.trim()
        let h3 = document.createElement('h3');
        h3.textContent = texto;
        lista.appendChild(h3);
    });
    inClube.value='';
});

btTabela.addEventListener("click", () => {
    const times = document.querySelectorAll('h3')
    if (times.length%2!==0){
        alert("O número de times não é par!!!")
        return;
    }
    tabJogos.innerHTML=`
        <tr>
            <th>#</th>
            <th>TIME A</th>
            <th>TIME B</th>
    `;

    for (let i=0; i<times.length;i+=2) {
        const linha = document.createElement('tr')
        const tdIndex = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td')

        tdIndex.textContent = (i/2) + 1;
        td1.textContent = times[i].textContent;
        td2.textContent = times[i+1].textContent;
    
        linha.appendChild(tdIndex);
        linha.appendChild(td1)
        linha.appendChild(td2)

        tabJogos.appendChild(linha);
        }
    });

btReset.addEventListener("click", () => {
    inClube.value='';
    lista.innerHTML='';
    tabJogos.innerHTML='';
})
