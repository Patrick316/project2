'use strict';
module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define('event', {
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    genre: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return event;
};