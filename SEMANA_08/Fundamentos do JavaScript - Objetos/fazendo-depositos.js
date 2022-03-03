// Objeto
const cliente = {
    nome: "Denilson",
    idade: 31,
    cpf: "02112312312",
    email: "denilson@email.com",
    telefones: ["11954545454", "11945454545"],
    dependentes: [
        {
            nome: "Heitor Cortê Novais",
            parentesco: "Filho",
            dataNasc: "09/04/2020"
        },
        {
            nome: "Samanta Cortê Novais",
            parentesco: "Filha",
            dataNasc: "02/03/2022"
        }
    ],
    saldo: 100.00,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        this.saldo -= valor;
    }
}

console.log(cliente.saldo);
cliente.depositar(1000);
console.log(cliente.saldo);
cliente.sacar(100);
console.log(cliente.saldo);




