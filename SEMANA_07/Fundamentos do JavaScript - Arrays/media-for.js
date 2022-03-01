/* Calcular a media usando for */

const notas = [10, 6.5, 8, 7.5];

// A variavel é declarada fora do for mara não ter seu valor iniciado após cada loop
let somaDasNotas = 0;

//  O for só pegara todos os valores do array e somara, a media vai ser feita numa variavel fora do for
for (let i = 0; i < notas.length; i++) {
    // A soma das notas é igual a soma das notas + valor das notas trazidas pelo indece a cada loop
    somaDasNotas += notas[i];
}


let media = somaDasNotas/notas.length;

console.log(media);