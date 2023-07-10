module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define("employee", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    country: {
      type: DataTypes.STRING,
    },
    profilePicture: {
      type: DataTypes.STRING,
    }
  });
  return Employee
}