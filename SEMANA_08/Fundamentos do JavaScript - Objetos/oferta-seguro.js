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

function oferecerSeguro (obj) {
    const chavesCliente = Object.keys(obj);
    if (chavesCliente.includes("dependentes")) {
        console.log(`Oferta de seguro para ${obj.nome}`);
    }
}

oferecerSeguro(cliente);

// O método Object.Keys, passando como prarmetro o nome do objeto retorna todas as suas chaves
console.log(Object.keys(cliente));

// O método Object.values, passando como prarmetro o nome do objeto retorna todos os valores do objeto
console.log(Object.values(cliente));

// O método Object.entries, passando como prarmetro o nome do objeto retorna as chaves e valore dentro de arrays um pra cada chave.
console.log(Object.entries(cliente));



