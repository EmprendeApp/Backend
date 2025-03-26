const express = require("express");
const { authenticate } = require('../utils/authenticate');
const router = express.Router();

const inventoryController = require("../controller/inventoriesController");

router.get("/inventories", authenticate(['vendedor']),inventoryController.getAllInventories);
router.get("/inventories/:id", authenticate(['vendedor']),inventoryController.getInventoryById);
router.post("/inventories",authenticate(['vendedor']), inventoryController.createInventory);
router.put("/inventories/:id", authenticate(['vendedor']),inventoryController.updateInventory);
router.delete("/inventories/:id",authenticate(['vendedor']), inventoryController.deleteInventory);

module.exports = router;