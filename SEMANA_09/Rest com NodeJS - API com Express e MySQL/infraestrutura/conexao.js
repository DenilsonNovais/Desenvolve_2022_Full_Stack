const mysql = require('mysql2')

const conexao = mysql.crateConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'agenda-petshop'
})

module.exports = conexao;