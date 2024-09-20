const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const regCon = require('../controller/regCon');
const loginCon = require('../controller/loginCon');


router.get('/', controller.index);

router.get('/register', regCon.register);
router.post('/register', regCon.registerData);

router.get('/login', loginCon.login);
router.post('/login', loginCon.loginData);

module.exports = router;