const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor');

// Usando o metodo sync(), sincronizamos os dados com o banco 
// Retorna uma promessa que precisa ser tratada
ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)
    