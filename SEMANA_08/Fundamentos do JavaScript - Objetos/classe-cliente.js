// Nomes de classes sempre comecam com letra maiusculas
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

// riando um novo objeto usando a Class construtora Cliente
const denilson = new Cliente("Denilson", "denilson@email.com", "12345678901", 1000);

console.log(denilson);

// Depositando valor ao saldo, usando o comportamento da classe (depositar(valor)) 
denilson.depositar(50);

// Exibindo saldo usando o comportamento da classe (exibirSaldo())
denilson.exibirsaldo();

