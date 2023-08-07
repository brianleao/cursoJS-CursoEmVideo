let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

/*
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
*/

/*
for(let c = 0; c < num.length; c++) {
  console.log(`Posição: ${c} Valor: ${num[c]}`)
}
*/

/*
for(let pos in num) {
  console.log(`${num[pos]}`)
}
*/

 let pos = num.indexOf(12)
console.log(num)
if (pos == -1) {
  console.log('O valor não foi encontrado!');
} else {
  console.log(`O valor está na posição ${pos}`)
}


