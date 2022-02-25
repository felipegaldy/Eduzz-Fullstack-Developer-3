let v = function(x) {
    return x*2
}
console.log(v(5))
// variavel recebe funçao, funçao recebe parametro e return equação
//console.log atribui valor a variavel~e a função funciona

//5! funçao fatorial
//5! = 5 * 4!
//1! = 1
function fatorial(n) {
    let fat = 1
    for (let c = n;c > 1;c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))//recursividade
// funçao fatorial de outra maneira
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))