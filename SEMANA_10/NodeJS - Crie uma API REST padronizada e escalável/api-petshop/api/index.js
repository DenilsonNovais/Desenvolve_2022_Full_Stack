const express = require('express');// Utilizamos o express para cria a API
const app = express();//  Instancia do express para gera uma aplicação
const bodyParser = require('body-parser');// Utiliza o body-parser para declaraar o formato a utilizar
const config = require('config');// Chama as configurações do banco e passa uma nova porta para o listen

app.use(bodyParser.json());// Declara o json como formato a ser utilizado pela api

const roteador = require('./rotas/fornecedores');
app.use('/api/fornecedores', roteador);// consumindo api de rotas dentro da api principal

// A API esculta uma porta por onde recebe as requisições
app.listen(config.get('api.porta'), () => console.log('A API está funcionando'));