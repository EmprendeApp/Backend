const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database/db");

class Review extends Model {}
Review.init(
    {
        raiting:{
            type: DataTypes.INTEGER
        },
        comment:{
            type: DataTypes.STRING
        },
        date:{
            type: DataTypes.STRING
        }
    },{
        sequelize,
        modelName: "review",
        timestamps: false
    }
)

module.exports = Review;