/* 
    Tem a responsabilidade unica de controlar quais são as rotas que temos, e o que precisa fazer quando acessar cada uma destas rotas.
*/

// Fazendo o export do atendimento para que seja visto pelo app
module.exports = app => {
    // Controla a rota do atendimento
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um get'));
}