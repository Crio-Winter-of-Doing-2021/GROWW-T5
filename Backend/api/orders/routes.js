const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');

var router = express.Router();

router.get('/:id', requireLogin, controller.getOrder);
router.get('/', requireLogin, controller.getAllOrder);
router.post('/', requireLogin, controller.placeOrder);
router.put('/:id', controller.updateOrderStatus);

module.exports = router;