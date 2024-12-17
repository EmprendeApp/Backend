const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Store = require("./Store");

class Product extends Model {}
Product.init(
    {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "El nombre del producto no puede estar vacío",
                },
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El precio del producto no puede ser nulo",
                },
                isFloat: {
                    msg: "El precio debe ser un número decimal válido",
                },
            },
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        store_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Store, // Nombre de la tabla relacionada
                key: "id", // Nombre de la columna en la tabla relacionada
            },
            validate: {
                notNull: {
                    msg: "El campo store_id no puede ser nulo",
                },
                isInt: {
                    msg: "El campo store_id debe ser un número entero",
                },
            },
        },
    },
    {
        sequelize,
        tableName: "products",
        timestamps: false,
    }
);

module.exports = Product;
