const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: 'Please enter Name'
    },
    color:{
        type: String,
        trim: true,
        required: 'Please enter color'
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
    serialNo:{
        type: String,
        trim: true,
        unique: true,
        required: 'Please Enter serial number'
    },
    stock:{
        type: Number,
        trim: true,
        required: 'How many are in stock?'
    },
    price:{
        type: Number,
        trim: true,
        required: 'Please Enter price'
    },
    downPayment:{
        type: Number,
        trim: true,
        required: 'How much is the down payment?'
    },
    paymentInterval:{
        type: Number,
        trim: true,
    },
    productImage:{
        type: String
    }
});

module.exports = mongoose.model('furniture', furnitureSchema);