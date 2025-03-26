const express = require("express");
const router = express.Router();
const { authenticate } = require('../utils/authenticate');
const storesController = require("../controller/storesController");

router.get("/stores",authenticate(['vendedor','comprador']), storesController.getAllStores);
router.get("/stores/byUserId/:userId", authenticate(['vendedor','comprador']), storesController.getStoreByUserId);
router.post("/stores/createStore", authenticate(['vendedor']), storesController.createStore);
router.put("/stores/updateStore/:id", authenticate(['vendedor']),storesController.updateStore);
router.delete("/stores/:id", authenticate(['vendedor']),storesController.deleteStore);

module.exports = router;