const listaDeChamada = ['João', 'Ana','Caio','Lara','Marjorie','Leo'];


// Alterando com splice() -> Onde comeca a alterar | Nº de elementos para alterar | Valor colocado no lugar
// listaDeChamada.splice(1,2, 'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}`);


// Também é possivel adicionar um elemento sem remover ou só remover sem adicionar
//  Add sem remover -> Local onde vai ser add, o valor Zero (0) no Nº de remoção, Valor à ser add
// Ao add um elemento na lista sem remover altera o indece de todos após ele na lista.
listaDeChamada.splice(2,0, 'Rodrigo');

console.log(`Lista de chamada: ${listaDeChamada}`);


