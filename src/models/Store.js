const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./User");

class Store extends Model {}
Store.init(
    {
        store_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "El nombre de la tienda no puede estar vacío",
                },
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, // Nombre de la tabla relacionada
                key: "id", // Nombre de la columna en la tabla relacionada
            },
            validate: {
                notNull: {
                    msg: "El campo user_id no puede ser nulo",
                },
                isInt: {
                    msg: "El campo user_id debe ser un número entero",
                },
            },
        },
    },
    {
        sequelize,
        tableName: "stores",
        timestamps: false,
    }
);

module.exports = Store;
