const express = require("express");
const router = express.Router();
const { authenticate } = require('../utils/authenticate');
const storesController = require("../controller/storesController");

router.get("/stores",authenticate(['vendedor','comprador']), storesController.getAllStores);
router.get("/stores/:id", authenticate(['vendedor','comprador']), storesController.getStoreById);
router.post("/stores", authenticate(['vendedor']), storesController.createStore);
router.put("/stores/:id", authenticate(['vendedor']),storesController.updateStore);
router.delete("/stores/:id", authenticate(['vendedor']),storesController.deleteStore);

module.exports = router;