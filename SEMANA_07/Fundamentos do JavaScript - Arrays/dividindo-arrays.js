const nomes = ["joão","Juliana","Ana","Caio","Lara","Marjorie","Guilherme","Aline","Fabiana","André","Carlos","Paulo","Bia","Vivian","Isabela","Vinicios","Renan","Renata","Daisy","Camilo"];

// O resto da divisao do nomes.length ficam sempre pra segunda lista
nomes.push("Denilson");
nomes.pop();

// Cortando a lista do valor inicial à metade da lista
const sala1 = nomes.slice(0, nomes.length/2);

// Iniciando da metade da lista até o final dela
const sala2 = nomes.slice(nomes.length/2);

console.log(`Os alunos da sala 1: ${sala1}`);
console.log(`Os alunos da sala 2: ${sala2}`);

