// Recurso de rotas do express
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

// Iniciando router
const router = Router();

// Chama todas as pessoas
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);

module.exports = router;