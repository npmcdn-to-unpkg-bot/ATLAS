var mongoose = require('mongoose');
var People = mongoose.model('users');

module.exports.register = function(req,res){
    People.create({
        username: req.body.username,
        password: req.body.password
    });
    console.log("Yes, this is done");
};