let n = document.getElementById('ntxt')
let notas = document.getElementById('notas')
let res = document.getElementById('res')
let notaslist = []


function add() {

    if (Number(n.value) < 0 || Number(n.value) > 10) {//validar nota entre 0 e 10
    window.alert('nota inválida')
    } else if (notaslist.length <= 1) {//limitar para receber apenas duas notas
    notaslist.push(Number(n.value))
    let item = document.createElement('option')
    item.text = `Nota ${n.value} adicionada`
    
    } else {
        window.alert('limite de notas alcançado')
    }
}

