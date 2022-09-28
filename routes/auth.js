var express = require('express');
var router = express.Router();
const authService = require('../services/authService');

const {login, logout, register} = require('../controllers/authController');

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

module.exports = router;
