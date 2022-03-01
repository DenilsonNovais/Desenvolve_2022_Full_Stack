const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
/* 
  O forEach é um método que retorna a chamada de uma outra função, também chamadas de callback. O parametro do forEach é uma outra função.
*/

// forEach com Arrowfunctions
notas.forEach(nota => {
    somaDasNotas += nota
});

// forEach com declaração de função
/* notas.forEach(function(nota) {
    somaDasNotas += nota
}); */

let media = somaDasNotas/notas.length;

console.log(media);