var express = require('express');
var router = express.Router();
var getData = require('../getStrategy/getstock');


router.get('/getStock', getData.getStock);
module.exports = router;