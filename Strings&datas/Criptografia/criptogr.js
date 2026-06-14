const frm = document.querySelector("form")
const resp = document.querySelector("h3")
//const btnDese = document.getElementById("btnDese")

let criptoglobal = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let criptopar = ""
    let criptoimp = ""

    const frase = frm.inFrase.value
    fraseComp = frase

    for ( let i=0; i<frase.length; i++) {
        if (i % 2 === 0 ) {
            criptopar += frase[i]
        } else {
            criptoimp += frase[i]
        }
        criptoglobal = criptopar + criptoimp
        resp.innerText = criptoglobal
     }
    })

    frm.addEventListener("reset", () => {
        resp.innerText= ""
        frm.inFrase.focus()
        criptoglobal = ""
    })

    frm.btnDese.addEventListener("click", () =>{

        let retornocomp = ""    
        const fraseLeng = criptoglobal.length
        const metaLeng = Math.ceil(fraseLeng/2) // cada metade da string     
        const par = criptoglobal.slice(0,metaLeng) // metade inicial (par)
        console.log(par)
        const imp = criptoglobal.slice(metaLeng) // metade final (impar)
        console.log(imp)

        for ( let i = 0; i < metaLeng; i++) { //itera sobre cada metade
           if ( i < par.length ) {
            retornocomp += par[i] // monta a decriptação par
           }
           if ( i < imp.length ) {
            retornocomp += imp[i] // monta a decriptação impar
            }
        }
        console.log(retornocomp)
        resp.innerText = retornocomp
    })