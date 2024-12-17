const express = require("express");
const router = express.Router();

const auth = require("./auth");
const orderRoutes = require("./orderRoutes");
const orderDetailsRoutes = require("./orderDetailsRoutes");
const productRoutes = require("./productRoutes");
const inventoryRoutes = require("./inventoryRoutes");
const reviewRoutes = require("./reviewRoutes");
const storeRoutes = require("./storeRoutes");

router.use(auth);
router.use(orderRoutes);
router.use(orderDetailsRoutes);
router.use(productRoutes);
router.use(inventoryRoutes);
router.use(reviewRoutes);
router.use(storeRoutes);




module.exports = router;