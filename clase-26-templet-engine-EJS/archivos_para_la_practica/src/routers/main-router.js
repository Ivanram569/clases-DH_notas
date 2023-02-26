const { Router } = require('express');
const router = Router();
// abajo y arriba hacen lo mismo en este caso
//const express = require('express');
//const router = express.Router();

const mainController = require('../controllers/main-controller');

router.get('/', mainController.home)
router.get('/detalle/:id', mainController.detalle)

module.exports = router;