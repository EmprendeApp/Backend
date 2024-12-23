const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Product = require("./Product");

class Inventory extends Model {}
Inventory.init(
    {
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo stock no puede ser nulo",
                },
                isInt: {
                    msg: "El campo stock debe ser un número entero",
                },
            },
        },
        restock_threshold: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El campo restock_threshold no puede ser nulo",
                },
                isInt: {
                    msg: "El campo restock_threshold debe ser un número entero",
                },
            },
        },
        last_updated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product, // Nombre de la tabla relacionada
                key: "id", // Nombre de la columna en la tabla relacionada
            },
            validate: {
                notNull: {
                    msg: "El campo product_id no puede ser nulo",
                },
                isInt: {
                    msg: "El campo product_id debe ser un número entero",
                },
            },
        },
    },
    {
        sequelize,
        tableName: "inventories",
        timestamps: false,
    }
);

module.exports = Inventory;
