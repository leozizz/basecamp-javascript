//Função para filtrar os numeros pares de um array

function filtraPares(arr) {
    return arr.filter(callback)
}

//Função responsável pelo calculo
function callback(item) {
    return item % 2 === 0
    //Opção para números impares > return item % 2 !== 0
}

//Só irá retornar os números que passarem pelo filtro
const meuArray = [2, 10, 89, 32, 4, 91, 11]

console.log(filtraPares(meuArray))

/*
Outra opção de sintaxe para essa função

function filtraPares(arr) {
    return arr.filter(function callback(item) {
        return item % 2 === 0
    })
}
*/
