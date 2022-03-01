/* Desafio filtrando por aluno
    Depois de calcular as médias dos alunos é preciso 
    mostrar quem está reprovado entre os alunos
*/
const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

// filter retorna uma nova lista e retorna um true ou false pela função parametro
const reprovados = nomes.filter((aluno, indece) => notas[indece] < 5);

console.log(`Reprovados: ${reprovados}`);