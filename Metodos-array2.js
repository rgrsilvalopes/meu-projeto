// map() - percorre cada indice do array aplicando a condição definida no callback - function

let numerosPares = [2,4,6,8,10]
let numerosParesDobro = numerosPares.map(function(valor){
    return valor *2;
})
console.log(numerosParesDobro)

// filter() - percorre o array filtrando apenas o valor solicitado

let numerosFiltrados = numerosPares.filter(function(valor){
    return valor <8;
})
console.log(numerosFiltrados)

// reduce() - transforma todos os valores de um array em um unico valor, somando, mulplicando, etc

let multiplicaNumeros = numerosPares.reduce(function(acumalativo, valor){
    return acumalativo *valor;
})
console.log(multiplicaNumeros)

// forech() - apenas interagi percorendo o array

// numerosPares.forEach(function(valor, indice){
//     console.log("O indice" +" "+ indice +" "+ "tem o valor" +" "+ valor)
// })

// find() - pesquisa um determinado valor no array
let temNumero = numerosPares.find(function(valor){
    return valor == 10
})

console.log(temNumero)