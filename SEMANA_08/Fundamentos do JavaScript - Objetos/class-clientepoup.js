class Cliente {
    // Atributos (Características) da class
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    
    // Métodos (Comportamentos) da class
    depositar (valor) {
        this.saldo += valor;
    }

    exibirsaldo() {
        console.log(this.saldo);
    }

}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    
    depositarPoupanca (valor) {
        this.saldoPoupanca += valor;
    }

}

// Instanciando um novo objeto a partir da class construtora herdando atributos e métodos
const denilson = new ClientePoupanca("Denilson", "denilson@email.com", "12312312312", 200, 300);

console.log(denilson);

// O objeto criado também recebe todos os coportamentos da classe construtora
denilson.depositar(50);

// Também pode ter novos comportamentos addicionados
denilson.depositarPoupanca(50);

console.log(denilson);

