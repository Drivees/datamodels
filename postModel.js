var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({


    postTitle: { type: String },
    postText: { type: String },
    postLocation:{ type: String }, //posted from location
    postrelatedCar:{type: Schema.Types.ObjectId, ref: 'Car'}, //related car

    postDeleted: { type: Boolean, default: false },
    //postOwner:{type: Schema.Types.ObjectId, ref: 'User'}, //user
    postCreated: { type: Date },
    postUpdated: { type: Date, default: Date.now },
    postItemType: { type: String }, //to know later which collection to query for postItem (tasks, photo, etc)
    postItem: {type: Schema.Types.ObjectId }, // action posted
    postDeviceOrigin: { type: String }


});

var Post = mongoose.model("Post", postSchema);
module.exports = Post;
