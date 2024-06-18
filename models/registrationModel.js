const mongoose = require('mongoose');
const {Schema} = mongoose;

const registrationSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("User", registrationSchema)