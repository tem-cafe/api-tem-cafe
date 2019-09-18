const express = require('express');
const router = express.Router();
const attController = require('../controllers/atualizacao-controller');

router.get("/:version", attController.geAtt);

module.exports = router;