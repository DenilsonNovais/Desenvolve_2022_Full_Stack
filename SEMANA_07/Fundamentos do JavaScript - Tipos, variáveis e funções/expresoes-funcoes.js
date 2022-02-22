/* Declaração de função
    -> A função declarada assim como a var é elevada ao topo na hora da execução do codigo, portanto elas podem ser chamadas em qualquer parte do código, antes ou depois da declaração, que será execultada sem erros.
*/
function minhaFuncao(parametro) {
    //Bloco de código
} 

// minhaFuncao(parametro);

/* Expressão de Função 
    -> A expressão de função quando escrita com cons ou let precisa ser declarada antes de ser chamada, caso contrario terá um erro de referencia.
*/
const soma = function(n1, n2) {
    return n1 + n2;
}

console.log(soma(2, 3));