/* Desafio: Acessar Chaves
    Consultar um objeto usando uma lista de chaves relativas à informação de clientes gerada pelo sistema, e printar o resultado na tela.
*/

const cliente = {
    nome: "Denilson",
    idade: 31,
    cpf: "02112312312",
    email: "denilson@email.com"
}

// Array das chaves do objeto
const chaves = ["nome", "idade", "cpf", "email"];

// Manipulando o objeto usando notação de colchetes
// Passo o nome do objeto[Nome do Array[Indece do Array]] retorna o valor da chave do objeto
console.log(cliente[chaves[0]]);

// Printando todas os valores das chaves do objeto com forEach()

/*
    Acessando a lista com o forEach, passo o parametro info(indice) para a função que vai printar os valores do objeto cliente a partir das chaves do array.
    O forEach() em cada loop pega o valor e execulta na função, que no caso é printar no console!
*/
chaves.forEach(info => console.log(cliente[info]));
