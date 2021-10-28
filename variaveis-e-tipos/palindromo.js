//Solução 1
function verificaPalindromo(string) {
    if(!string) return;

    /*split irá dividir a string que será colocada em uma array
    em seguida, join irá reunir essa array novamente em uma string.*/
    console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('ovo')

//Solução 2

function verificaPalindromo2(string) {
    if(!string) return;

    /*Aqui estamos pedindo para que ele compare dois caracteres a cada loop,
     para isso pedimos para que seja feita a soma do indice até se igualar com a string
     e podemos fazer apenas metade dos loops. (string.length / 2)*/
    for(let i = 0; i < string.length / 2; i++) {
        //Lembre que o indice inicia em 0 e a length em 1, então pedimos -1 e -i para manter igualado
        if(string[i] !== string[string.length -1 -i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));
