//Função que irá somar todos os números de um array

function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({prev})
        console.log({current})
        return prev + current
    })
}

const arr = [1, 2]

console.log(somaNumeros(arr))
