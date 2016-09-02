var mongoose = require('mongoose');
var People = mongoose.model('users');

module.exports.test = function(req,res){
   /* People.create({
        username: req.body.username,
        password: req.body.password
    });*/
    console.log("Yes, this is done");
};

module.exports.login = function(req,res){
    if (req.body.uid) {
        People.findOne({uid: req.body.uid})
        .exec(function(err, user) {
            if (!user){
                People.create({
                uid: req.body.uid,
                profilePic: req.body.profilePic,
                username: req.body.username,
                ownEmail: req.body.ownEmail
            });
            console.log("Yeah I know you are " + req.body.username);
            }
            else if (err) {
                console.log(err);
                return;
            }
            console.log("Yeah, this proved its working..");
        });
    }
    
};
