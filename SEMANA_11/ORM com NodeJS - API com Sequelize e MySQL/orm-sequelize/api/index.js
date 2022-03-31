const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

// Exportando o app para ficar disponivel para o restante da aplicação
module.exports = app;