function comparaNumeros(num1, num2) {
	if(!num1 || !num2) return 'Defina dois números'
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let saoIguais = '';

	//IF irá testar se os números não são iguais, no caso, se for False "saoIguais" recebe "não"
	if(num1 !== num2) { 
		saoIguais = 'não';
	}
	return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}


function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;

	let resultado10 = 'menor'
	let resultado20 = 'menor'
	const compara10 = soma > 10;
	const compara20 = soma > 20;

	// checa se a soma de "num1" e "num2" é maior que 10, retornando 'maior' para True e 'menor' para false
	if (compara10) {
		resultado10 = 'maior';
	}

	// checa se a soma de "num1" e "num2" é maior que 20, retornando 'maior' para True e 'menor' para false
	if (compara20) {
		resultado20 = 'maior';
	}

	return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(20,20));
