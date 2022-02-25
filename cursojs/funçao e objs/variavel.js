let num = [5,8,4,6,7,9]//o indice inicia no zero
console.log(`Nosso vetor é o ${num}`)
num.push(1)// adiciona um valor na ultima posiçao do array
console.log(`Agora nosso vetor é o ${num}`)
num[3] = 2// modifica o valor na posição 3 
console.log(`Mostra o elemento na posição 4 ${num[4]}`)
console.log(`contando os elementos ${num.length}`) // conta  a quantidade de elementos na array
console.log(`colocando em ordem crescente ${num.sort()}`) // coloca em ordemc crescente os elementos de uma array

for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}

for (pos in num) {
    console.log(num[pos])
}
console.log(num.indexOf(7))