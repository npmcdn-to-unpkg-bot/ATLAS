var mongoose = require("mongoose"),
ObjectId = mongoose.Schema.ObjectId;

var commentsSchema= new mongoose.Schema({
       user: {
        type: String,
        required: true,
       },
       review: {
           type: String,
           required: true
       },
       createdOn: {
           type: Date,
           "default": Date.now()
       }
   });
   
   
var itemSchema = new mongoose.Schema({
    author: {type: String, required: true},
    likes: {
        type: Number,
        required: true,
        min: 0
    },
    comments: [commentsSchema],
    UniqueId: {
        type: ObjectId,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        "default": Date.now()
    },
    itemPic: {
        data: Buffer,
        contentType: String
    }
});

   
   
mongoose.model("items", itemSchema);