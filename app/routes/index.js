var express = require('express');
var router = express.Router();

var CtrlUser = require("../controllers/user");


router.post('/login', CtrlUser.register);


module.exports = router;
