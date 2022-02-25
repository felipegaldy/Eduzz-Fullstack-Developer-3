// chamada + parametro = ação = retorno
function parimp(n) {
    if ( n%2 == 0) {
        return 'Par'
    }else {
        return 'impar'
    }
}
console.log(parimp(223))
//let n = parimp(11)
//console.log(n)

function soma(n1, n2) {// função soma finalmente entendi o return
    return n1 + n2
}
console.log(soma(2, 5))
function soma(n1=0, n2=0) {//colocar =0 ajuda para que nao de erro caso n1 ou n2 nao receba valor
    return n1+n2
}
console.log(soma(1))