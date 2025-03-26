const express = require("express");
const router = express.Router();
const { authenticate } = require("../utils/authenticate");
const peopleController = require("../controller/peopleController");

router.post(
  "/people/createOrUpdatePersonInfo",
  authenticate(['vendedor', 'comprador']),
  peopleController.createOrUpdatePersonInfo
);

router.get(
  "/people/getPersonInfoByUserId/:user_id",
  authenticate(['vendedor', 'comprador']),
  peopleController.getInfoPersonByUserId
);


module.exports = router;