const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: 'Please enter Name'
    },
    color:{
        type: String,
        trim: true,
        required: 'Please enter colour'
    },
    make:{
        type: String,
        required: 'Please Enter make'
    },
    description:{
        type: String,
        trim: true,
        required: 'Please Enter description'
    },
    date:{
        type: Date,
        trim: true,
    },
    category:{
        type: String,
        trim: true,
        required: 'Please Enter category'
    },
    subCategory:{
        type: String,
        trim: true,
        required: 'Please Enter sub category'
    },
    serialNo:{
        type: String,
        trim: true,
        unique: true,
        required: 'Please Enter serial number'
    },
    stock:{
        type: String,
        trim: true,
        required: 'How many are in stock?'
    },
    price:{
        type: String,
        trim: true,
        required: 'Please Enter price'
    },
    downPayment:{
        type: String,
        trim: true,
        required: 'How much is the down payment?'
    },
    paymentInterval:{
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('products', productSchema);