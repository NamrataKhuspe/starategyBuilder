var express = require('express');
var router = express.Router();
var getData = require('../getStrategy/getstock');
var userReg = require('../userRegistration/userReg');


router.get('/getStock', getData.getStock);
router.post('/userRegister', userReg.UserRegister);
// router.post('/userRegister',((req,res)=>{
//     console.log('req.body--',req.body)
// }));

module.exports = router;