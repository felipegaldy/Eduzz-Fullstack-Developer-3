//rest operator

const mutiply = (...bargs) => bargs.reduce((acc, value) => acc * value, 1)
console.log(mutiply(4,4,4,4))

const sum1 = (a,b, ...rest) => {//rest in arrow functions, como paremetro/argumento para receber outros argumentos, fixando os dois primeiros e separando o restante em uma array
    console.log(a, b, rest)
}
console.log(sum1(2,6,8,3,5))

function sum(...args) {//rest in arrow functions
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(2,6,8,3,5))
//res operator escreve com os ...
function sum0(...args) {
    console.log(arguments)
    console.log(args)//parecido com arguments o portotype dele é um array
}
console.log(sum0(5, 5, 3, 4, 5, 3))
//metodo antigo, usado para somar todos parametros
//mesmo sum tendo dois parametro na 1 chamada
function sum2(a,b) {
    
    var value = 0
    for(var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }
    return value;
}
console.log (sum2(5, 5, 3, 4, 5, 3))