import {handleNovoItem} from './componentes/criaTarefa'
import {carregaTarefa} from './componentes/carregaTarefa'
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()