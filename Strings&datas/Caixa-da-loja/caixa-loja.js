const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2/100 // multa por atraso
const TAXA_JUROS = 0.33/100 // juros por dia de atraso

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const vencto = new Date()
    console.log(dataVenc)
    console.log(hoje)
    console.log(vencto)


    const partes = dataVenc.split("-")
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1])-1)
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto 
    console.log(atraso)
    let multa = 0
    let juros = 0

    if (atraso > 0) {
        const dias = atraso / 86400000 // divide para ter transformar em numero de dias
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias
    }
    const total = valor + multa + juros

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value= juros.toFixed(2)
    frm.outTotal.value= total.toFixed(2)
})