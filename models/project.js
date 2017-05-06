'use strict';
module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define('project', {
 UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Email: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    HomeAddress: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
      Destination: {
      type: DataTypes.TEXT,
      defaultValue: "Personal"
    }
  });
  return project;
};
