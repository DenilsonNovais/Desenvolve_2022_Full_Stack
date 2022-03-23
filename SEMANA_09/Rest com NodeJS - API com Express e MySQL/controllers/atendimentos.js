/* 
    Tem a responsabilidade unica de controlar quais são as rotas que temos, e o que precisa fazer quando acessar cada uma destas rotas.

   Request => req(Requisição) -> O que estamos recebendo desta requisição
   Response => res(Resposta) -> Qual a resposta da nossa api
*/

const Atendimento = require('../models/atendimentos');

// Fazendo o export do atendimento para que seja visto pelo app
module.exports = app => {
    // Controla a rota do atendimento | verbo get(pegar/receber) - Pega dados
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    // Controla a rota do atendimento | verbo post(enviar) - Enviando dados
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
 
        Atendimento.adiciona(atendimento, res)
    }) 
 
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
 
        Atendimento.altera(id, valores, res)
    })
 
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
 
        Atendimento.deleta(id, res)
    })
}