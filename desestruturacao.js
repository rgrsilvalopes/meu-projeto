// Nos permite extrair dados de arrays e objetos literais

// OBJETO

let pessoa = {
    nome: 'Rogerio',
    idade: 35
}

const {idade} = pessoa;

// console.log(idade)

// ARRAY 

let listaCompras = ['café', 'pão', 'arroz', 'feijão']

const [ , , ,item] = listaCompras

console.log(item)