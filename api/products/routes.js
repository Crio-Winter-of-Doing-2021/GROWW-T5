const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');

var router = express.Router();

router.post('', requireLogin, controller.createProduct);
router.get('', controller.fetchAllProduct);
router.get('/:id', controller.fetchProduct);
router.put('/:id', requireLogin, controller.updateProduct);

module.exports = router;