const prompt = require("prompt-sync")()

//função arrow
const soma = (num1, num2) => num1 + num2 ;

//função anônima -> no intervalo a funcao é um parâmetro e o outro é o intervalo. 
// foi posto uma função para poder ter uma ação como parâmetro.
setInterval(() => {
    console.log('mais dois segundos')
}, 2000);

console.log(soma (235, 333))
