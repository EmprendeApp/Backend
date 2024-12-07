const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/db");

class OrderDetail extends Model {}
OrderDetail.init(
    {
        quantity:{
            type: DataTypes.INTEGER
        },
        sub_total:{
            type: DataTypes.FLOAT
        }
    },{
        sequelize,
        modelName: "order_details",
        timestamps: false
    }
)

module.exports = OrderDetail;