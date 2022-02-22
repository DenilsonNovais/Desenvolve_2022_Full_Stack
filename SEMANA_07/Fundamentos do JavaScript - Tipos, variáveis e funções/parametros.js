// parametros de funcoes

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(1, 4));
console.log(soma(231, 124));
console.log(soma(500, 60));

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e minha idade é ${idade} `;
}

console.log(nomeIdade("Denilson", 31));

                          //valor padrao do parametro
function mutiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(mutiplica(soma(4, 6), soma(3, 3)));
console.log(mutiplica(soma(4, 6)));

function cumprimentar(){
    console.log('oi gente!')
}
   
cumprimentar()

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}
   
cumprimentaPessoa('Helena')

function cumprimentar(){
    return 'Oi gente!'
}
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
