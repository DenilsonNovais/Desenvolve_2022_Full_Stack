// Recurso de rotas do express
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

// Iniciando rotas
const router = Router();
router
    // Rotas de Pessoas
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)// Verbo Get - Pegar/Consultar
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .post('/pessoas', PessoaController.criarPessoa) // Verbo Post - Criar/Adicionar
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)// Restaura pessoas
    .put('/pessoas/:id', PessoaController.atualizaPessoa)// Verbo Put - Atualizar/Alterar
    .delete('/pessoas/:id', PessoaController.apagaPessoa)// Verbo Delete - Deletar/Excluir
    // Rotas de Matriculas
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)// Rotas de Matriculas
    .post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)// Restaura matriculas
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)
module.exports = router;