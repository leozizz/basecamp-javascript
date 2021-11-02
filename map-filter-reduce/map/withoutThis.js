//Função que irá multiplicar qualquer número do array por 2
function mapWithoutThis(arr) {
    return arr.map(function (item) {
        return item * 2
    })
}

const nums = [2, 4, 6, 8, 10]

console.log(mapWithoutThis(nums))

//Vale notar que a função acima irá gerar um novo array e não modificara o array original
console.log(nums)
