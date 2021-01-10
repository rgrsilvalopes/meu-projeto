/* const data = new Date()

console.log(data)
console.log(data.getDate) */

var arrayPessoas = []

const pessoa1 = {
    nome: 'Maria', 
    nascimento: new Date('1991 12 05')
}
const pessoa2 = {
    nome: 'Fátima', 
    nascimento: new Date('1989 02 23')
}
const pessoa3 = {
    nome: 'João', 
    nascimento: new Date('1971 12 20')
}
arrayPessoas.push(pessoa1, pessoa2,pessoa3)

const imprimeDesustruturacao = () => {
    const [, pessoa2] = arrayPessoas
    const {nome} = pessoa3
    console.log(nome)
}
imprimeDesustruturacao()