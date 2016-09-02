var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    ownEmail: {
        type: String,
        unique: true
    },
   profilePic: {
        type: String
    },
    uid: {
        type: String,
        unique: true,
        required: true
    },
    nickname : {
        type: String,
        unique: true,
        required: true
    },
    interests: [String],
    description: {
        type: String
    }
});

mongoose.model("users", userSchema);