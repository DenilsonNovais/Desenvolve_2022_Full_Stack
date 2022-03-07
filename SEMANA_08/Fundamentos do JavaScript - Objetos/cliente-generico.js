/* 
    Desafio - Cliente Generico
    Criar uma função que permita a criação de novos clientes a partir de um modelo
*/

// Função construtora, cria um objeto
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

// Nova instancia de cliente, criada a partir da heranca de um cliente generico
const denilson = new Cliente("Denilson", "43243243243", "denilson@email.com", 100);

// Mostrando no console o objeto criado
console.log(denilson);
