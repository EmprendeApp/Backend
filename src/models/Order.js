const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./User");

class Order extends Model {}
Order.init(
    {
        order_date:{
            type: DataTypes.STRING
        },
        status:{
            type: DataTypes.BOOLEAN
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, // Nombre de la tabla a la que hace referencia
                key: "id", // Nombre de la columna en la tabla referenciada
            },
            validate: {
                notNull: {
                  msg: "El campo personaId no puede ser nulo",
                },
                isInt: {
                  msg: "El campo personaId debe ser un numero entero",
                },
              },
        }
    },{
        sequelize,
        tableName: "orders",
        timestamps: false
    }
)

module.exports = Order;