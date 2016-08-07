var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/atlas');

mongoose.connection.on('connected', function(){
    console.log("Mongoose connected to atlas db");
});

require('./users');
require('./items');
require('./contact');