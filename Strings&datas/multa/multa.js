const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.getElementById("resp2")
const multa = document.getElementById("inMulta")
const data = document.getElementById('inDate')

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const datae = new Date(data.value)
    const multae = parseFloat(multa.value)
    
    const novumDatae = new Date(datae)
    novumDatae.setMonth(datae.getMonth() + 3 )

    resp.innerHTML = `A data da multa foi ${datae} e a multa é de R$ ${multae.toFixed(2)} reais`
    resp2.innerHTML = `Após a data ${novumDatae} a multa será acrescida de 20%\n Seu novo valor a pagar será de: R$ ${(multae * 1.20).toFixed(2)}`
})
  
frm.addEventListener("reset", () => {
        resp.innerText= ""
        resp2.innerText=""
        frm.inDate.focus()
    })
