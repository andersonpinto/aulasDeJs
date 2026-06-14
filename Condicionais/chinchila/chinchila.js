const frm = document.querySelector("form")
const resultado = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const numChincha= Number(frm.inNumChincha.value)
    if (numChincha<2) {
        resultado.innerText=`Não dá para procriar com esse número`
        frm.inNumChincha.value = ""
        frm.inNumAnos.value=""
        frm.inNumChincha.focus()
    }
    else {
    const tempoAnos = Number(frm.inNumAnos.value)
    const numTotal = numChincha * tempoAnos
resultado.innerText = `O número de Chinchilas em ${tempoAnos} anos será de ${numTotal} animais`
frm.inNumChincha.value = ""
frm.inNumAnos.value=""
frm.inNumChincha.focus()
    }
 })