const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Person extends Model {}

Person.init(
  {
    telefono: {
      type: DataTypes.STRING,
    },
    carrera:{
      type: DataTypes.STRING,
    },
    sede: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT('long'),
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "people",
    timestamps: false,
  }
);


module.exports = Person;