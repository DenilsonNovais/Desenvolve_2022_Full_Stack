const nomes = ["Ana", "Ju", "Leo", "Paula"];

// matodo callback
nomes.forEach(imprimeNomes);

// Função que vai ser chamada pelo forEach declarada fora do parametro do forEach
function imprimeNomes (nome) {
    console.log(nome);
}