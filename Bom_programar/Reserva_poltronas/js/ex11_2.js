const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240;
const reservadas = [];

window.addEventListener("load", () => {
    const ocupadas = localStorage.getItem("teatroOcupadas")?localStorage.getItem("teatroOcupadas").split(";"): [];

    for (let i=1; i<=POLTRONAS; i++) {

        const figure = document.createElement("figure"); //cria tag figure

        const imgStatus = document.createElement("img"); //cria tag img

        imgStatus.src=ocupadas.includes(i.toString())?"img/ocupada.png":"img/disponivel.png"

        imgStatus.className="poltrona";// classe para tamanho das img
        
        const figureCap = document.createElement("figcaption"); //cria figcaption

        const zeros = i<10? "00":i<100?"0":""; //cria qtidade de zeros

        const num = document.createTextNode(`[${zeros}${i}]`); //cria texto no HTML

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        // se modulo 24 == 12 (é o corredor: define margem direita 60px)
        if (i % 24 == 12) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure); //indica que figure é filha de dvPalco

        //se i módulo 24 == 0; o comando após && será executado (insere quebra de linha)
        (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"));
    }
});

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value);

    if (poltrona > POLTRONAS) {
        alert("Informe um número de poltrona válido");
        return;
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")? localStorage.getItem("teatroOcupadas").split(";"): [];

    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada...`);
        frm.inPoltrona.value= "";
        frm.inPoltrona.focus= "";
        return;
    }

    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];

    imgPoltrona.src= "img/reservada.png"; //modifica atributo imagem
    reservadas.push(poltrona); //adiciona poltrona ao vetor reservadas

    frm.inPoltrona.value= ""; //limpa campo
    frm.inPoltrona.focus();
});

frm.btConfirmar.addEventListener("click", () => {
    if (reservadas.length == 0) {
        alert("Não há poltronas reservadas");
        frm.inPoltrona.focus();
        return;
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")?localStorage.getItem("teatroOcupadas").split(";"):[];

    for (let i = reservadas.length - 1; i>=0; i--) {
        ocupadas.push(reservadas[i]);

        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];

        imgPoltrona.src = "img/ocupada.png";

        reservadas.pop();
    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"));
});

