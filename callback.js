//const somar = (numeroA, numeroB) => numeroA + numeroB

//const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)

//console.log(calculadora(10,20, somar))

const dobro =  (numero) => numero * 2  

const triplo = (numero, triplo) => numero * 3

const aplicar = (numero, dobro) =>  dobro(numero)

console.log(aplicar (10, dobro))