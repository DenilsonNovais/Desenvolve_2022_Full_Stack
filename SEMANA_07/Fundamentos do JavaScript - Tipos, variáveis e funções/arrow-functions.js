// Declaração de função normal
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

console.log(apresentar("Denilson"));

// Arrow Function - => Classica
// Variavel constante | Parametro | Arrow | Return
const apresentarArrow = nome => `Meu nome é ${nome}`;

// Quando tiver mais de um parametro colocar entre Parentese
const soma = (n1, n2) => n1 + n2;

// Arrow function com + de uma linha
const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10) {
        return "Somente numeros de 1 a 9";
    }else{
        return num1 + num2;
    }
}

