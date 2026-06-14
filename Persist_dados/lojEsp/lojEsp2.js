const imgClube= document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")
const inRadios = document.querySelectorAll("input")

const trocarClube = ()=> {
    let clube;
    if (rbBrasil.checked) {
        clube = "Brasil"
    } else if (rbPelotas.checked) {
        clube="Pelotas"
    } else if (rbFarroupilha.checked) {
        clube = "Farroupilha"
    } else {
        clube = "Escolha um clube !!!"
    }

    divTitulo.className = `row cores-${clube}`
    imgClube.src = `brasao`+`${clube.toLowerCase()}.jpg`
    imgClube.className = "img-fluid"
    imgClube.alt = `Simbolo do ${clube}`

    localStorage.setItem("clube", clube)
}

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")
        if (clube == "Brasil") {
            rbBrasil.checked = true
        } else if (clube == "Pelotas") {
            rbPelotas.checked = true
        } else {
            rbFarroupilha.checked = true
        }
        trocarClube()
    }
}
window.addEventListener("load", verificarClube)