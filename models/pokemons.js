'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemons.init({
    nome: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    geracao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemons',
  });
  return Pokemons;
};