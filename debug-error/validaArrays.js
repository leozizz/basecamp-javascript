//Função que irá receber o array e um número para válidar
function validaArray(arr, num) {
    try{
        //Irá lançar um erro (ReferenceError) se os parametros arr e num não forem enviados
        if (!arr && !num) throw new ReferenceError('Envie os parametros!')

        //Irá lançar um erro (TypeError) se o array não for do tipo 'object'
        if(typeof arr !== 'object') throw new TypeError('Envie um array!')

        //Irá lançar um erro (TypeError) se o number não for do tipo 'number'
        if(typeof num !== 'number') throw new TypeError('Envie um número!')

        //Irá lançar um erro (RangeError) se tamanho do array for diferente do número enviado como parâmetro
        if(arr.length !== num) throw new RangeError('Tamanho inválido!')

        return arr
    }

    //Caso o erro seja uma instancia de (Erro), iremos retornar no console a mensagem, o nome e o stack do erro.
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.name)
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.name)
            console.log(e.stack)
        } else {
            console.log("Tipo de erro não esperado:"+ e)
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5))
//console.log(validaArray()) <- teste de ReferenceError
//console.log(validaArray(5, 5)) <- teste de TypeError (!== 'object')
//console.log(validaArray([1, 2], 'a')) <- teste de TypeError (!== 'number')
//console.log(validaArray([], 5)) <- teste de RangeError (arr.lenght !== num)
