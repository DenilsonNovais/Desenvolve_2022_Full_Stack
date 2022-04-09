'use strict';
module.exports = (sequelize, DataTypes) => {
  //Objeto Atributos 
  const Pessoas = sequelize.define('Pessoas', { 
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dado do tipo e-mail inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, { // Objeto de opções
    paranoid: true, //Exclusão suave
    defaultScope: { //Get apenas em Pessoas Ativas no banco
      where: { ativo: true}
    },
    scopes: {
      todos: {where: {}},
      // etc: {constraint: valor}
    }
  }); 
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id'
    })

  };
  return Pessoas;
};