let modo1 = Array.from({length : 14 }, (_,i) => i+1)
console.log(modo1)

let modo2 = [...Array(18)].map((_,i)=> 1 + i )
console.log(modo2)

let modo3 = Array(10).fill(0).reduce((acc,_,i) => [...acc, i+1],[])
console.log(modo3)