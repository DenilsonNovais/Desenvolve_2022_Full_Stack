const nome = "Denilson";
const idade = 2022 - 1990;
const cidadeDeNacimento = "Brotas de Macaúbas";

// Concatenação com +
/* const apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos de idade, e nascei na cidade de " + cidadeDeNacimento; */

// Template string
const apresentacao = `Meu nome é ${nome} tenho ${idade} anos de idade, e nasci na cidade de ${cidadeDeNacimento}`;



console.log(apresentacao);