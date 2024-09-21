const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const regCon = require('../controller/regCon');
const loginCon = require('../controller/loginCon');
const userCon = require('../controller/userCon');
const upload = require('../middleware/multer');


router.get('/', controller.index);

router.get('/register', regCon.register);
router.post('/register', upload.single('userImg'), regCon.registerData);

router.get('/login', loginCon.login);
router.post('/login', loginCon.loginData);

router.get('/user-listing', userCon.userListing);
router.get('/profile', userCon.profile);

module.exports = router;