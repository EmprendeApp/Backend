const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/db");

class Product extends Model {}
Product.init(
    {
        product_name:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.FLOAT
        },
        status:{
            type: DataTypes.BOOLEAN
        },
    },{
        sequelize,
        modelName: "products",
        timestamps: false
    }
)

module.exports = Product;