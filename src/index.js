const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./database/db");
const Inventory = require("./models/Inventory");
const Order = require("./models/Order");
const OrderDetail = require("./models/OrderDetail");
const Product = require("./models/Product");


const app = express();

//middlewares
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));



const PORT = process.env.PORT || 8080;


app.listen(PORT, function () {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
});