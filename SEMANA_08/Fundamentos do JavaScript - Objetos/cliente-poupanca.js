/* 
    Desafio - Cliente Poupanca
    Aproveitar o Cliente que já existe e criar a partir dele um novo cliente para contas poupancas
*/

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    // O método Call chama, e associa as chaves de Cliente a clientePoupanca
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

// Criando uma nova instancia do clientepoupanca
const ju = new ClientePoupanca("ju", "22233344455", "ju@email.com", 100, 200);

// console.log(ju);

// Add ao prototipo do objeto ClientePoupanca um novo método usando notaçao de ponto
ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor; 
}

// Depositando um valor a conta poupanca da cliente ju
ju.depositarPoup(30);

// console.log(ju.saldoPoup);

/* Então podemos testar algumas propriedades e validar a ideia de cadeia de protótipos. Digite o seguinte: */
console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)

/* Na saída do console veremos que usando .hasOwnProperty(), a função “saldoPoup” só existe no objeto do tipo ClientePoupanca.

Os objetos andre e ju são do tipo object, ou seja, ambos herdam do protótipo de object, que está associado a todo objeto criado no JavaScript. */