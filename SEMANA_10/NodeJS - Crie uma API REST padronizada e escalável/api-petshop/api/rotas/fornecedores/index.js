// Criando api da rota de fornecedores
const roteador = require('express').Router();

roteador.use('/', (requisicao, resposta) => {
    resposta.send('OK');
})

module.exports = roteador;