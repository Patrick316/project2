'use strict';
module.exports = function(sequelize, DataTypes) {
  var location = sequelize.define('location', {
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    foreignKey: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return location;
};