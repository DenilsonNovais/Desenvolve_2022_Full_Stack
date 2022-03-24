// vamos configurar nossa tabela
const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

// objeto com as colunas
const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    email: {
       type: Sequelize.STRING,
        allowNull: false,
    }, 
    categoria: {
       type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false,
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updateAt: 'dataAtualizada',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes);
