//Classe com os parametros informados ao constructor
class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = 0
    }

    //Get que irá receber e retornar valor default do saldo
    get saldo(){
        return this._saldo
    }

    //Set que irá alterar o valor de saldo quando informado
    set saldo(valor){
        this._saldo = valor
    }

    //Método que irá verificar se é possível fazer um saque, se sim, irá fazer a operação informada
    sacar(valor){
        if (valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor

        return this._saldo
    }

    //Método responsável pela operação de depósito
    depositar(valor){
        this._saldo = this._saldo + valor
        return this._saldo
    }
}

//Classe contaCorrente que herda os parametros de contaBancaria onde o tipo por padrão será sempre "corrente" e possui um novo parametro cartaoCredito que deverá ser preenchido com true ou false
class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
    super(agencia, numero)
        this.tipo = 'corrente'
        this.cartaoCredito = cartaoCredito
    }


    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

//Classe-filha que herda todos os parametros de contaBancaria
class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupança'
    }
}

//Classe-filha que herda todos os parametros de contaBancaria mas possui uma limitação de saque que pode ser feita até R$500
class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'universitária'
    }

    sacar(valor) {
        if (valor > 500) {
            return "Operação negada"
        }
        
        this._saldo = this._saldo - valor
    }
}
