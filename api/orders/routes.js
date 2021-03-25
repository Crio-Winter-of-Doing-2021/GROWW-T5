const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');

var router = express.Router();

router.get('/:id', requireLogin, controller.getOrder);
router.get('/', requireLogin, controller.getAllOrder);
router.post('/', requireLogin, validate(validator.placeOrderPostIn, {}, {allowUnknown: true}), controller.placeOrder);
router.put('/:id', requireLogin, validate(validator.updateOrderStatusPutIn, {}, {allowUnknown: true}), controller.updateOrderStatus);

module.exports = router;