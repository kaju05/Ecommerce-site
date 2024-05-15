const mongoose = require('mongoose');
const passportLocalmongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    }
})

userSchema.plugin(passportLocalmongoose);

let User = mongoose.model('User', userSchema);
module.exports = User;