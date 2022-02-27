// Lista com duas dimensoes
const alunos = ['joao', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10,7,9,6];

// Uma lista com outras listas dentro dela
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

// Nesta lista foi acessada o valor inicial das listas atraves do indece
console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`);