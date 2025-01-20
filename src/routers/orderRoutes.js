const express = require("express");
const router = express.Router();
const { authenticate } = require('../utils/authenticate');
const ordersController = require("../controller/ordersController");

router.get("/orders",authenticate(['vendedor','comprador']), ordersController.getAllOrders);
router.get("/orders/:id",authenticate(['vendedor','comprador']), ordersController.getOrderById);
router.post("/orders",authenticate(['vendedor','comprador']), ordersController.createOrder);
router.put("/orders/:id",authenticate(['vendedor','comprador']), ordersController.updateOrder);
router.delete("/orders/:id",authenticate(['vendedor','comprador']), ordersController.deleteOrder);

module.exports = router;