var currentNumberWrapper = document.querySelector('currentNumber');
var currentNumber = 0;

/* Funções responsáveis por adicionar e subtrair
o valor da variavel currentNumber */
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}