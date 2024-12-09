const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/db");

class Store extends Model {}
Store.init(
    {
        store_name:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        }
    },{
        sequelize,
        modelName: "store",
        timestamps: false
    }
)

module.exports = Store;