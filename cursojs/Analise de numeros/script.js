let num = window.document.getElementById('numtxt')//pegar valor do input 1
let lista = document.querySelector('select#lista')//variavel para a lista
let res = document.querySelector('div#res')//pega o local onde sera mostrado o resultado
let valores = []//cria array que recebera os valores

function isnum(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isnum(num.value) && !inlist(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('-ERROR!- Valor inválido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para serem analisados.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${total} elementos `
        res.innerHTML += `<br>O maior valor foi o ${maior}`
        res.innerHTML += `<br>O menor valor foi o ${menor}`
        res.innerHTML += `<br>A soma de todos valores é ${soma}`
        res.innerHTML += `<br>A media dos valores é ${media.toFixed(2)}`
    }
}