const express = require("express");
const router = express.Router();
const { authenticate } = require('../utils/authenticate');
const productController = require("../controller/productsController");

router.get("/products",authenticate(['vendedor','comprador']), productController.getAllProducts);
router.get("/products/:id", authenticate(['vendedor','comprador']), productController.getProductById);
router.post("/products",authenticate(['vendedor']), productController.createProduct);
router.put("/products/:id", authenticate(['vendedor']),productController.updateProduct);
router.delete("/products/:id",authenticate(['vendedor']), productController.deleteProduct);

module.exports = router;