 const express = require('express');
 
 const router = express.Router();
 const homecontroller = require('../controllers/homecontroller');

 console.log('router loaded');

 router.get('/',homecontroller.home);
 router.use('/users', require('./users'));

//for any further routes 
// router.use('/router name',require('./routerfilename'));

 module.exports = router;