var mongoose = require('mongoose');
var People = mongoose.model('users');

module.exports.addOwnEmail = function(req,res){
    People.create({
        ownEmail: req.body.ownEmail
    });
    console.log("Yes, this is done");
};