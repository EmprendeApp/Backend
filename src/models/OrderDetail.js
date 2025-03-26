const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Product = require("./Product");
const Order = require("./Order");

class OrderDetail extends Model {}
OrderDetail.init(
    {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sub_total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Order, 
                key: "id",
            },
            validate: {
                notNull: {
                    msg: "El campo order_id no puede ser nulo",
                },
                isInt: {
                    msg: "El campo order_id debe ser un número entero",
                },
            },
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
        tableName: "order_details",
        timestamps: false,
    }
);

module.exports = OrderDetail;
