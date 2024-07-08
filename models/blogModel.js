const mongoose = require('mongoose');
const {Schema} = mongoose;

let blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        // unique: true
    },
    image: {
        type: String,
        // required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref :"User",
    },
});

module.exports = mongoose.model("blog", blogSchema);