/* 
    Tem a responsabilidade unica de configurar qualquer coisa que for preciso dentro do express.
*/

// Importando bibliotecas
const express = require('express'); 
const consign = require('consign');


module.exports = () => {
    // Declarando o app do sistema
    const app = express();

    // Chamando o consign para que ele possa ser acessado pelo app
    consign()
        .include('controllers')
        .into(app)

    return app;
}
