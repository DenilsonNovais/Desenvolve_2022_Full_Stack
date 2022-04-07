'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {paranoid: true}); //Exclusão suave
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: 'nivel_id'
    })
  };
  return Niveis;
};