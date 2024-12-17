const Order = require("../models/Order");
const OrderDetail = require("../models/OrderDetail");
const Product = require("../models/Product");
const Inventory = require("../models/Inventory");
const User = require("../models/User")
const Review = require("../models/Review")
const Store = require("../models/Store")

// Relación: OrderDetail pertenece a Order
Order.hasMany(OrderDetail, {
    foreignKey: "order_id",
    sourceKey: "id",
});
OrderDetail.belongsTo(Order, {
    foreignKey: "order_id",
    targetKey: "id",
});


OrderDetail.belongsTo(Product, {
    foreignKey: "product_id",
    targetKey: "id",
});
// Relación: OrderDetail pertenece a Product
Product.hasMany(OrderDetail, {
    foreignKey: "product_id",
    sourceKey: "id",
});


// Relación: Una tienda tiene muchos productos
Store.hasMany(Product, {
    foreignKey: "store_id", // Llave foránea en Product
    sourceKey: "id", // Llave primaria en Store
});

// Relación: Un producto pertenece a una tienda
Product.belongsTo(Store, {
    foreignKey: "store_id", // Llave foránea en Product
    targetKey: "id", // Llave primaria en Store
});


Product.hasMany(Inventory,{
    foreignKey: "product_id",
    sourceKey: "id",
})
Inventory.belongsTo(Product,{
    foreignKey: "product_id",
    targetKey: "id",
})

// Relación: Un usuario tiene muchas reseñas
User.hasMany(Review, {
    foreignKey: "user_id", // Llave foránea en Review
    sourceKey: "id", // Llave primaria en User
});
Review.belongsTo(User, {
    foreignKey: "user_id", // Llave foránea en Review
    targetKey: "id", // Llave primaria en User
});

// Relación: Una tienda tiene muchas reseñas
Store.hasMany(Review, {
    foreignKey: "store_id", // Llave foránea en Review
    sourceKey: "id", // Llave primaria en Store
});
Review.belongsTo(Store, {
    foreignKey: "store_id", // Llave foránea en Review
    targetKey: "id", // Llave primaria en Store
});

// Relación: Un usuario tiene muchas tiendas
User.hasMany(Store, {
    foreignKey: "user_id", // Llave foránea en Store
    sourceKey: "id", // Llave primaria en User
});

// Relación: Una tienda pertenece a un usuario
Store.belongsTo(User, {
    foreignKey: "user_id", // Llave foránea en Store
    targetKey: "id", // Llave primaria en User
});

User.hasMany(Order, {
    foreignKey: "user_id", // Llave foránea en el modelo `Order`
    sourceKey: "id", // Llave primaria en el modelo `User`
});

Order.belongsTo(User, {
    foreignKey: "user_id", // Llave foránea en el modelo `Order`
    targetKey: "id", // Llave primaria en el modelo `User`
});