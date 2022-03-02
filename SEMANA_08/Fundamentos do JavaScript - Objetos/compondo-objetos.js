const cliente = {
    nome: "Denilson",
    idade: 31,
    cpf: "02112312312",
    email: "denilson@email.com",
    telefones: ["11954545454", "11945454545"]
}

// Adicionando um objeto dentro do objeto
cliente.dependente = {
    nome: "Heitor",
    parentesco: "Filho",
    dataNasc: "09/04/2020"
}

console.log(cliente);

// Alterando valor do obijeto dentro do objeto
cliente.dependente.nome = "Heitor Côrte Novais";

console.log(cliente);
