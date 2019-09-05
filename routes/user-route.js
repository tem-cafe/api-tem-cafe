const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/user-controller');

router.post("/", usuarioController.postUser);
router.get("/", usuarioController.getUsers);

module.exports = router;