/*
    O arquivo index tem a responsabilidade unica de subir o servidor no ar
*/

// Exportando a configuração para o app
const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');

conexao.conect(erro => {
    if (erro) {
        console.log(erro);
    }else {
        console.log('conectado com sucesso')

        // Execultando a função customExpress no app
        const app = customExpress();

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
});



