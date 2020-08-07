const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: 'Please enter First name'
    },
    color:{
        type: String,
        trim: true,
        required: 'Please enter Last name'
    },
    make:{
        type: String,
        unique: true,
        required: 'Please Enter user name'
    },
    description:{
        type: String,
        trim: true
    },
    date:{
        type: String,
        trim: true
    },
    category:{
        type: String,
        trim: true
    },
    subCategory:{
        type: String,
        trim: true
    },
    serialNo:{
        type: String,
        trim: true
    },
    stock:{
        type: String,
        trim: true
    },
    price:{
        type: String,
        trim: true,
        required:'Please enter password'
    },
    downPayment:{
        type: String,
        trim: true,
        required:'Please enter password'
    },
    paymentInterval:{
        type: String,
        trim: true,
        required:'Please enter password'
    },
});

module.exports = mongoose.model('products', productSchema);