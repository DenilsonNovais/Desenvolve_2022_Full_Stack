// var -> pode ser chamada antes de ser declarada

/* var altura = 5;
var comprimento = 7;

var area = altura * comprimento;
console.log(area);
var area; */


// let -> Só funciona dentro de um scopo 

/* let forma = 'Retangulo';
let altura = 5;
let comprimento = 7;
let area;

if(forma === 'Retangulo') {
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2;
}

console.log(area); */

// const -> Só funciona apos ser declarada, e não pode receber outro valor

/* const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'Retangulo') {
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2;
}

console.log(area); */


/* CARACTERISTICAS DO JAVASCRIPT */

// Tipagem Dinâmica
// Untyped | tipagem fraca

let minhaVar = 876;
minhaVar = "texto";
minhaVar = true;

console.log(minhaVar);

// Linguagem Multiparadigma -> É possivel resolver o mesmo problema de varias formas diferentes



