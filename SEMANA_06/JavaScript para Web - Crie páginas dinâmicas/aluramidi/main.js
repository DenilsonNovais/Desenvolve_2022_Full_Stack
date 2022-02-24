
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento === 'audio') {
        elemento.play();
    } 
    else {
        console.log('Elemento não encontrado ou seletor invalido');
        alert('Elemento não encontrado ou seletor invalido');
    }
}

// Referencias em javaScript
const listaDeTeclas = document.querySelectorAll('.tecla');



// Para -> variavel + condição para repetição + incremento à variavel
for(let indece = 0; indece < listaDeTeclas.length; indece++) {
    // Atribui o valor de lista de tecla + indece para a variavel const
    const tecla = listaDeTeclas[indece];               
    const instrumento = tecla.classList[1];// Retorna uma lista das class do html 
    const idAudio = `#som_${instrumento}`;
    
    // O atributo onclick recebe uma função anonima com o valor de outra função
    tecla.onclick = function () {
        tocaSom(idAudio);
    } 
    
    // Função diretamente atrelada a um evento
    tecla.onkeydown = function (evento) {

        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
