const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');

var router = express.Router();

router.get('/:id', controller.getFAQ);
router.get('', controller.getAllFAQ);
router.post('', requireLogin, controller.raiseFAQTicket);
router.put('/:id', requireLogin, controller.updateFAQ);

module.exports = router;