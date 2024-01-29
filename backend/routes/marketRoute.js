const express = require ('express');
const router = express.Router();
const controller = require ("../controller/marketController");


router.post("/marketPirce", controller.market)
router.get("/getData", controller.getAllData);



module.exports = router;

