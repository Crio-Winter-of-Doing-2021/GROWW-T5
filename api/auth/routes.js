const express = require('express');
const controller = require('./controller');
const validator = require('./validators');
const { validate } = require('express-validation');
const requireLogin = require('../utils/requirelogin');

var router = express.Router();

router.post('/register', validate(validator.registerPostIn, {}, {allowUnknown: true}), controller.regsiterUser);
router.post('/login', validate(validator.loginPostIn, {}, {allowUnknown: true}), controller.loginUser);
router.post('/logout', controller.logoutUser);
router.get('/kyc', requireLogin, controller.updateKycStatus);

module.exports = router;