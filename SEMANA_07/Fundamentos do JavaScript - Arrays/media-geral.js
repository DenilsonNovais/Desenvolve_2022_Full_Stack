/* 
    Desafio: Media das turmas
    Com a média de todos os alunos de três salas, calcule a média geral de cada sala:
*/

const salaJs = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];


/*   O metodo reduce() sempre reduz todos os valores de um array em um unico valor numerico, ele sempre precisa ter dois parametros principais que é o acumulador e o valor atual e um valor incial para fazer as operações se for uma adição ou outra operação matematica
*/
function mediaSala (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`Media da sala de JavaScript ${mediaSala(salaJs)}`);
console.log(`Media da sala de Java ${mediaSala(salaJava)}`);
console.log(`Media da sala de Python ${mediaSala(salaPython)}`);

