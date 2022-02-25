function calcular() {
    var n1 = document.getElementById('n1')
    var c = 1
    var n = Number(n1.value)
    
 
   while(c <= 10) {
   
    var res = document.getElementById('res')
        let mult = n*c
        res.innerHTML += `${n} x ${c} = ${mult} <br>`
        c++
    }
}res.innerHTML = ""
    
