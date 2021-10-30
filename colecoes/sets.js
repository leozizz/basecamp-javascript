const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(arr) {
    const mySet = new Set(arr)

    //Aqui utilizamos o argumento hash para que os elementos do set se tornem um elemento do array
    return [...mySet];
}

console.log(uniqueValues(myArray))
