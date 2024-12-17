const express = require("express");
const router = express.Router();

const storesController = require("../controller/storesController");

router.get("/stores", storesController.getAllStores);
router.get("/stores/:id", storesController.getStoreById);
router.post("/stores", storesController.createStore);   
router.put("/stores/:id", storesController.updateStore);
router.delete("/stores/:id", storesController.deleteStore);

module.exports = router;