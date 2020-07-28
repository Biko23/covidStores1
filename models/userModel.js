const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        trim: true
    },
    lname:{
        type: String,
        trim: true
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
        trim: true
    },
});

module.exports = mongoose.model('users', userSchema);