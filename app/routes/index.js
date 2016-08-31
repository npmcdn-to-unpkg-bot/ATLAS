var express = require('express');
var router = express.Router();

var CtrlUser = require("../controllers/user");


router.post('/login', CtrlUser.login);
router.post('/test', CtrlUser.test);


module.exports = router;
