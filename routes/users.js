const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/usercontroller');

router.get('/profile',usercontroller.profile);

router.get('/sign-up',usercontroller.signup);

router.get('/sign-in',usercontroller.signin);

router.post('/create',usercontroller.create);

module.exports = router;

