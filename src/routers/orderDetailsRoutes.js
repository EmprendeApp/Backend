const express = require("express");
const { authenticate } = require('../utils/authenticate');
const router = express.Router();

const orderDetailsController = require("../controller/ordersDetailsController");

router.get("/orderDetails",authenticate(['vendedor','comprador']), orderDetailsController.getAllOrdersDetails);
router.get("/orderDetails/:id",authenticate(['vendedor','comprador']), orderDetailsController.getOrderDetailById);
router.post("/orderDetails",authenticate(['vendedor','comprador']), orderDetailsController.createOrderDetail);
router.put("/orderDetails/:id", authenticate(['vendedor','comprador']),orderDetailsController.updateOrderDetail);
router.delete("/orderDetails/:id",authenticate(['vendedor','comprador']), orderDetailsController.deleteOrderDetail);


module.exports = router;