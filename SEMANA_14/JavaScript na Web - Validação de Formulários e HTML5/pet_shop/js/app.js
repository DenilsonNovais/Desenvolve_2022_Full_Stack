import { valida } from './validacão'

const inputs = document.querySelectorAll('input')

// Para cada input que temos chamamos a função...
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})