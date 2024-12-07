const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Order extends Model {}
Order.init(
    {
        order_date:{
            type: DataTypes.STRING
        },
        status:{
            type: DataTypes.BOOLEAN
        }
    },{
        sequelize,
        modelName: "orders",
        timestamps: false
    }
)

module.exports = Order;