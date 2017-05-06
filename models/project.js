module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
      UserPicAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    HomeAddress: {
      type: DataTypes.TEXT,
      defaultValue: "Personal"
    }
  });
  return Project;
};