//Função que recebe uma lista de preços e um número representando o saldo disponível. 

const lista = [
    {
        name: 'Tiras de frango',
        preco: 11.90
    },
    {
        name: 'Nescau',
        preco: 10
    },
    {
        name: 'Pão',
        preco: 9.99,
    }
]

const saldoDisponivel = 100

//Calcula qual será o saldo final após subtrair todos os preços da lista enviada.

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log("rodada", index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))
