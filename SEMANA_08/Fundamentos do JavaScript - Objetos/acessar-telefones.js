const cliente = {
    nome: "Denilson",
    idade: 31,
    cpf: "02112312312",
    email: "denilson@email.com",
    telefones: ["11954545454", "11945454545"]
}

// O metodo forEach não retorna nada paenas o que pacarmos pra ele fazer
cliente.telefones.forEach(fone => console.log(fone));
