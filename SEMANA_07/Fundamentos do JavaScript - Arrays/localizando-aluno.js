
const alunos = ['joao', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10,7,9,6];

// Uma lista com outras listas dentro dela | Lista de duas Dimensoes
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

// includes -> Retorna um verdadeiro ou falso | booleano
// indexOf -> Retorna um número, no caso o indice da "Ana"
const exibirNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ' Sua média é ' + listaDeNotasEAlunos[1][indice];
    }
    else {
        return 'Aluno não está cadastrado'
    }
}

console.log(exibirNomeNota("Juliana"));