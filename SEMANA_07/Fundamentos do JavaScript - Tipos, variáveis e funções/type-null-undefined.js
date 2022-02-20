/*  NULL
    O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável: 
*/

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

// Nesse caso, qual seria a diferença entre os dois casos abaixo?
/* let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined */

/*  UNDEFINED.. 
    Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela). 
*/

console.log(null == undefined); // true
console.log(null === undefined); // false