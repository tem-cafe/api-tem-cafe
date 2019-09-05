const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.post("/", userController.postUser);
router.get("/", userController.getUsers);
router.delete("/", userController.deleteUser);

module.exports = router;