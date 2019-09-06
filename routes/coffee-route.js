const express = require('express');
const router = express.Router();
const coffeeController = require('../controllers/coffee-controller');

router.get("/", coffeeController.getCoffee);
router.post("/", coffeeController.postCoffee);

module.exports = router;