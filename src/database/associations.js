const Order = require("../models/Oder");
const OrderDetail = require("../models/OrderDetail");
const Product = require("../models/Product");
const Inventory = require("../models/Inventory");
const User = require("../models/User")
const Review = require("../models/Review")
const Store = require("../models/Store")

Order.hasMany(OrderDetail) 
OrderDetail.belongsTo(Order)

OrderDetail.belongsTo(Product)
Product.hasMany(OrderDetail)

Product.hasMany(Inventory)
Inventory.belongsTo(Product)

Review.hasMany(User)
User.belongsTo(Review)

Review.hasMany(Store)
Store.belongsTo(Review)

Store.hasMany(User)
User.belongsTo(Store)