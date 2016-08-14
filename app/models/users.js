var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
   /* realname: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    schoolEmail: {
        type: String,
        required: true,
        unique: true
    },*/
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