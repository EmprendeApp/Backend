const express = require("express");
const router = express.Router();

const orderDetailsController = require("../controller/ordersDetailsController");

router.get("/orderDetails", orderDetailsController.getAllOrdersDetails);
router.get("/orderDetails/:id", orderDetailsController.getOrderDetailById);
router.post("/orderDetails", orderDetailsController.createOrderDetail);
router.put("/orderDetails/:id", orderDetailsController.updateOrderDetail);
router.delete("/orderDetails/:id", orderDetailsController.deleteOrderDetail);


module.exports = router;