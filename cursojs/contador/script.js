function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var inicion = Number(inicio.value)
    var fimn = Number(fim.value)
    var passon = Number(passo.value)

    if (inicion == 0 || fimn == 0 || passon == 0) {
        window.alert(' ERROR! NÚMERO INVÁLIDO ')
    }else {
    
    for(inicion; inicion <= fimn; inicion += passon) {
        var res = window.document.querySelector('div#res')
        var cont = window.document.querySelector('div#cont')
        res.innerHTML = ' &#129302 Contando...<br>'
        cont.innerHTML += ` &#128073 ${inicion} `
    }
    cont.innerHTML += `&#128076`
}

    }