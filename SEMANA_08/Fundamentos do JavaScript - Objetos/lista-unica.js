/* 
    Desafio - Lista de Dependentes
    Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista unica, para analise de outros departamentos do banco.
*/

// Array de objetos clientes
const clientes = [{
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
    },
    {
        nome: "Andre",
        idade: 36,
        cpf: "12312312312",
        email: "andra@email.com",
        telefones: ["11932323232", "11923232323"],
        dependentes: [
            {
                nome: "Sara",
                parentesco: "Filha",
                dataNasc: "20/03/2011"
            },
            {
                nome: "Samia",
                parentesco: "Filha",
                dataNasc: "04/01/2014"
            }
        ],
    }
]

// O operador ...(spread operator) espalha os valores que são acessados em outro array adicionando novos indeces a eles
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];


console.log(listaDependentes);

// Exibe os valores em formato de tabela no console
console.table(listaDependentes);

