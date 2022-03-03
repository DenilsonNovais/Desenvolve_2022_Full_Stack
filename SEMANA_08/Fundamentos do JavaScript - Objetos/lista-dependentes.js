// Objeto
const cliente = {
    nome: "Denilson",
    idade: 31,
    cpf: "02112312312",
    email: "denilson@email.com",
    telefones: ["11954545454", "11945454545"],
    dependentes: [{
        nome: "Heitor Cortê Novais",
        parentesco: "Filho",
        dataNasc: "09/04/2020"
    }]
}

// Passando um outro dependente para dentro da lista que está dentro do objeto
cliente.dependentes.push({
    nome: "Samanta Cortê Novais",
    parentesco: "Filha",
    dataNasc: "01/10/2018"
})

// Alterando valor data de nascimento do array dentro do objeto
cliente.dependentes[1].dataNasc = "02/03/2022";

console.log(cliente);

// Consultando valor da lista usando o metodo filter, passando a data de nascimento
const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "09/04/2020");

// Mostrando no console o Array onde a data de nascimento está inserida
console.log(filhoMaisNovo);

// Mostrando o indece[0] do array onde está a data de nascimento
console.log(filhoMaisNovo[0].dataNasc);