/* 
    Tem a responsabilidade unica de controlar quais são as rotas que temos, e o que precisa fazer quando acessar cada uma destas rotas.

   Request => req(Requisição) -> O que estamos recebendo desta requisição
   Response => res(Resposta) -> Qual a resposta da nossa api
*/

// Fazendo o export do atendimento para que seja visto pelo app
module.exports = app => {
    // Controla a rota do atendimento | verbo get(pegar/receber) - Pega dados
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um get'));

    // Controla a rota do atendimento | verbo post(enviar) - Enviando dados
    app.post('/atendimentos', (req, res) => { 
        console.log(req.body);
        res.send('Você está na rota de atendimentos e está realizando um post')
    }); 
}