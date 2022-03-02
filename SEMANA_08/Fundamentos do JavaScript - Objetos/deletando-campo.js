const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem);


/*
    Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
*/

delete objPersonagem.aliado;
console.log(objPersonagem);

// Também é possível utilizar a notação de colchetes:

delete objPersonagem["status"]
console.log(objPersonagem);

// Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.

/*
    O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto: 
*/

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true

/* 
    O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso. Vamos entender melhor o tema “heranças” mais adiante no curso. 
*/