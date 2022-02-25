//Spread Operator
// pode ser usados em string, arrays e objetos para contruir outros objetos literais e tambem objetos interaveis

const str = 'digital'
const arr = [1, 2, 3, 4];
function logArgs(a, b, c){
    console.log(a, b, c,)
}
const arr2 = [5, 6, 7,...arr]//concat 
const arr3 = [...arr2,...arr, 0, 0, 0, 1]
//pode ser usado para clonar array, criar novas arrays, concatenar array
const arrClone = [...arr]
console.log(arrClone)
logArgs(...arr)
//em obj literais o spread so pode ser usado para construir novos obj

//só pode para construir outros, a ordem das keys as chaves é importante 
const obj = {
    teste: 123
}
const obj2 = {
    ...obj,
    test2: 'hello'
}
console.log(obj2)


//function logArgs(...args) {
//    console.log(args);
//}
//logArgs(...str);

/*const mutiply = (...args) => args.reduce((acc, values)) => acc * value, 1);
const sum = (...rest) => {
return mutiply(...rest);
};
console.log(sum(5, ,5, 5, 2, 3));

//pega todos items de um array e transforma em parametro*/