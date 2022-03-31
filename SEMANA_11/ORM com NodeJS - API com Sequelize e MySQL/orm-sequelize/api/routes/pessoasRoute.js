// Recurso de rotas do express
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

// Iniciando router
const router = Router();

// Verbo Get - Pegar/Consultar
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);

// Verbo Post - Criar/Adicionar
router.post('/pessoas', PessoaController.criarPessoa);

// Verbo Put - Atualizar/Alterar
router.put('/pessoas/:id', PessoaController.atualizaPessoa);

// Verbo Delete - Deletar/Excluir
router.delete('/pessoas/:id', PessoaController.apagaPessoa);



module.exports = router;