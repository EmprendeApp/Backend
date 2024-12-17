const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./User");

class Review extends Model {}
Review.init(
    {
        raiting: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: "El campo rating no puede ser nulo" },
                isInt: { msg: "El campo rating debe ser un número entero" },
            },
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        store_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "stores", // Nombre de la tabla relacionada
                key: "id", // Columna en la tabla relacionada
            },
            validate: {
                notNull: { msg: "El campo store_id no puede ser nulo" },
                isInt: { msg: "El campo store_id debe ser un número entero" },
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, // Nombre de la tabla relacionada
                key: "id", // Columna en la tabla relacionada
            },
            validate: {
                notNull: { msg: "El campo user_id no puede ser nulo" },
                isInt: { msg: "El campo user_id debe ser un número entero" },
            },
        },
    },
    {
        sequelize,
        tableName: "reviews",
        timestamps: false,
    }
);

module.exports = Review;
