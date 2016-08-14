var express = require('express');
var router = express.Router();

var CtrlUser = require("../controllers/user");


router.post('/', CtrlUser.addOwnEmail);


module.exports = router;
