function filter (v, f){
    const aux = []
    for (let i = 0; i < v.length; i++){
        if(f(v[i]))
            aux.push()
    }

    return aux
}
console.log(filter ([1, 2], e => e % 2 == 0))

function map (v, f){
    const aux = []
    for (let i = 0; i < v.length; i++){
        aux.push(f(v[i]))
    }

    return aux

}
console.log (map(["abc", "d"], e => e.length))

function eAgora(){
    let cont = 1
    function f1 (){
        console.log(cont)
    }
    cont ++
    function f2(){
        console.log(cont)
    }

    //isso é um objeto JSON
     return {f1, f2}

}
let res = eAgora
res.f1()
res.f2()

// Objetos JSON (Java Script Object Notation)


   