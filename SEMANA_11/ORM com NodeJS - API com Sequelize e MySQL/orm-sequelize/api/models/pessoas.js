'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
       * Método auxiliar para definir associações.
       * Este método não faz parte do ciclo de vida do Sequelize.
       * O arquivo `models/index` chamará este método automaticamente.
    */
    static associate(models) {
      // define association here
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};