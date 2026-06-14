const prompt = require("prompt-sync")()
const numero = Number(prompt("Entre com um número: "))
let soma = 0;
console.log(`Esses são os divisores de ${numero}`)
for (let i=1; i<=numero; i++){
    divisor = numero / i
    if ( numero % i  == 0){
        console.log(divisor)
        soma+=divisor;
    }
}
console.log(`Esta é a soma de seus divisores: ${soma}`)
if (soma /2 == numero){
    console.log("Esse número é perfeito!!!")
}