/* # OBJETOS   
   Os objetos são uma estrutura de dados que lhe permite armazenar varios tipos de dados (string, number, bool, etc), e são declarados com um par de chave e valor. 
    Para se declarar um objeto é preciso um nome, dentro do bloco, declare uma chave dois pontos e seu valor. 
    EX:
    const pessoa = {
        nome: "Denilson",       
        idade: 31               
    }

    Para se chamar um valor do objeto deve se passar o nome addicionar o ponto para acessar a chave do objeto e será retornado o valor: 
    EX: 
    console.log(pessoa.nome);

*/

// Declarando um objeto
const cliente = {
    nome: "Denilson",
    idade: 31,
    cpf: "02112312312",
    email: "denilson@email.com"
}

// manipulando um objeto usando noção de ponto
console.log(`Meu nome é ${cliente.nome}, e tenho ${cliente.idade} anos`);

// Adicionando um metódo ao um tipo de dado do objeto(string)
// O metodo substring() acessa os valores da cadeia de caracteres string passando o indece inicial e final que queira.
console.log(cliente.cpf.substring(0,3));