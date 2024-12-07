const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/db");

class Inventory extends Model {}
Inventory.init(
    {
        stock:{
            type: DataTypes.INTEGER
        },
        restock_threshold:{
            type: DataTypes.BOOLEAN
        },
        last_updated:{
            type: DataTypes.STRING
        }
    },{
        sequelize,
        modelName: "inventories",
        timestamps: false
    }
)

module.exports = Inventory;