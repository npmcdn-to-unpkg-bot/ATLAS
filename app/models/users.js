var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
   /* realname: {
        type: String,
        required: true,
    },*/
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    /*
    schoolEmail: {
        type: String,
        required: true,
        unique: true
    },
    ownEmail: {
        type: String,
        required: true
    }
  /*  profilePic: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String
    },
    */
});

mongoose.model("users", userSchema);