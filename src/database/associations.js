const Order = require("../models/Oder");
const OrderDetail = require("../models/OrderDetail");
const Product = require("../models/Product");
const Inventory = require("../models/Inventory");

Order.hasMany(OrderDetail) 
OrderDetail.belongsTo(Order)

OrderDetail.belongsTo(Product)
Product.hasMany(OrderDetail)

Product.hasMany(Inventory)
Inventory.belongsTo(Product)
