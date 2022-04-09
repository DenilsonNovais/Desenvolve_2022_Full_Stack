// Recurso de rotas do express
const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

// Iniciando rotas
const router = Router();
router
    // Rotas de Pessoas e Matriculas
    .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)// Verbo Get - Pegar/Consultar
    .get('/pessoas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/:id', PessoaController.pegaPessoa)
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas) // Rotas de Matriculas 
    .get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)  
    .get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)  
    .get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.criaPessoa) // Verbo Post - Criar/Adicionar
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)// Restaura pessoas
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
    .post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)  
    .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula) 
    .put('/pessoas/:id', PessoaController.atualizaPessoa)// Verbo Put - Atualizar/Alterar
    .put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)
    .delete('/pessoas/:id', PessoaController.apagaPessoa)// Verbo Delete - Deletar/Excluir
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)  
module.exports = router;