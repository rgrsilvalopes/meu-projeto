const dataAtual = new Date()

console.log(dataAtual.getDay())
console.log(dataAtual.getDate())
console.log(dataAtual.getMonth() + 1)
console.log(dataAtual.getFullYear())

// dataAtual.getDay() - dia da semana atraves do numero de sequencia: Domingo= 0
// dataAtual.getDate() - dia do mês corrente
// dataAtual.getMonth() - mês corrente - Janeiro= 0 e Dezembro=11 colocando dataAtual.getMonth() + 1 traz Dezembro=12
// dataAtual.getFullYear() - ano corrente
