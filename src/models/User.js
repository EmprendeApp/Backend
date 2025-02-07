const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/db");

class User extends Model {}
User.init(
    {
        name:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.ENUM('vendedor', 'comprador'),
            allowNull: false
        }
    },{
        sequelize,
        tableName: "users",
        timestamps: false
    }
)

module.exports = User;