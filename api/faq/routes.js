const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');
const requireAdminLogin = require('../utils/requireAdminLogin');

var router = express.Router();

router.get('/tags', controller.getFaqTags);
router.get('/:id', controller.getFAQ);
router.get('', controller.getAllFAQ);
router.post('', requireLogin, validator.raiseTicketValidator, controller.raiseFAQTicket);
router.put('/:id', requireAdminLogin, controller.updateFAQ);

module.exports = router;