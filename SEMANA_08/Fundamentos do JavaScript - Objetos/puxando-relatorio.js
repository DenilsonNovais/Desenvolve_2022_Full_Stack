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
    /* sacar: function(valor) {
        this.saldo -= valor;
    } */
}

let relatorio = "";

// O método for in percorre o objeto pela string da chave
for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue;
    }
    else {
        relatorio += `
        ${info} ==> ${cliente[info]}`
    }
}

console.log(relatorio);
