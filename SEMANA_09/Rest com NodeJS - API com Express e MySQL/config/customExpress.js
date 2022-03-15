/* 
    Tem a responsabilidade unica de configurar qualquer coisa que for preciso dentro do express.
*/

// Importando bibliotecas externas
const express = require('express'); 
const consign = require('consign');
const bodyParser = require('body-parser');


module.exports = () => {
    // Declarando o app do sistema
    const app = express();

    // O use() é um metodo do epress que vai usar a biblioteca bodyParser para enviar uma requisição
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    // Chamando o consign para que ele possa ser acessado pelo app
    consign()
        .include('controllers')
        .into(app)

    return app;
}
