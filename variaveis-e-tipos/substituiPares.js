function substituiPares(array) {
    if(!array) return -1;
    if(!array.length) return -1;

    /*
    Para cada indice a partir de 0, desde que o indice seja menor que o length do array, 
    vamos incrementar e verificar que se o elemento do indice do array for igual a 0, 
    vamos mandar um console.log
    */
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0) {
            console.log("Você já é zero!")
        }   else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0; 
            /*Se o restante da divisão for igual a zero (par)
            vamos determinar que o array[i] vai ser 0.
            */
        }  
    }

    return array;
}

let retorno = [2, 8, 11, 16, 77, 33, 323, 91];
console.log(substituiPares(retorno));

//Este exemplo deve retornar [0, 0, 11, 0, 77, 33, 323, 91]
