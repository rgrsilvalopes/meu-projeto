// let pessoa = ["Rogerio", "Leandro", "Ricardo"]

// Metodo push() - Inclui no final do array
// pessoa.push('lopes') 
// console.log(pessoa)

// Metodo pop() - Exclui o ultimo registro do array
// pessoa.pop() 
// console.log(pessoa)

// Metodo pop() - Retorna o elemento excluindo
// let oUltimo = pessoa.pop() 
// console.log(oUltimo)

// Metodo shift() - Exclui o elemento no inicio do array
// pessoa.shift()
// console.log(pessoa)

// Metodo unshift() - Inclui um ou varios elementos no inicio do array
// pessoa.unshift("Ohana", "Mujica")
// console.log(pessoa)

// indexOf - pesquisa se um elemento existe dentro do array e retorna o valor de sua posição do inicio para o final
// console.log(pessoa.indexOf("Rogerio"))

// lastindexOf() - pesquisa se um elemento existe dentro do array e retorna o valor de sua posição do final para o inicio
// console.log(pessoa.lastIndexOf("Ricardo"))

// join() - Transforma os elementos do array divididos por virgula ou outro divisor 
// pessoa.join();
// console.log(pessoa.join())

let estudantes = [
    {
      nome: 'Álvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    }
  ]
  estudantes.push({nome: "João",
  media: 5,
  curso: "iOS"
  },
  {
    nome: "Miguel",
  media: 2,
  curso: "Android"
  })
  console.log(estudantes)