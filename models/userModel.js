const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        trim: true,
        required: 'Please enter First name'
    },
    lname:{
        type: String,
        trim: true,
        required: 'Please enter Last name'
    },
    username:{
        type: String,
        unique: true,
        required: 'Please Enter user name'
    },
    gender:{
        type: String,
        trim: true
    },
    country:{
        type: String,
        trim: true
    },
    city:{
        type: String,
        trim: true
    },
    designation:{
        type: String,
        trim: true
    },
    nin:{
        type: String,
        trim: true
    },
    ein:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true,
        required:'Please enter password'
    },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema);