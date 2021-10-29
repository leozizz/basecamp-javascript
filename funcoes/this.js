//Função pré definida para calculo de idade
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

//Objetos para retorno
const pessoa1 = {
    nome: 'Marilene',
    idade: 46,
};

const pessoa2 = {
    nome: 'Leonardo',
    idade: 22,
};

const animal = {
    nome: 'Blue',
    idade: 1,
    raca: 'SRD',
};

//Teste utilizando os métodos call e apply
console.log(calculaIdade.call(animal, 5));
console.log(calculaIdade.apply(pessoa2, [24]));
