const express = require('express');


require('../models/productModel');

const mongoose = require('mongoose');
//const { json } = require('body-parser');

const purchaseConfirmationRoute = express.Router();

//We need to import the model we are using to register our products.
const productRegister = mongoose.model('products');

//This is the route to display the Product registration page
// purchaseRegistrationRoute.get('/', (req, res) => {
//     res.render('registerPurchase', {title: 'Purchase Registration'});
// });
purchaseConfirmationRoute.get('/', async(req, res) => {
    if (req.session.user){
    const item = await productRegister.findById(req.query.id);
    //res.json(items);
    console.log(item);
    res.render('purchaseConfirmation', {product: item});
    //res.render('purchaseConfirmation', {product});
    //console.log('We get here....');
    // try{
    //     await register.findOne({_id: req.body.id})
    //     //console.log('We get here....') Not yet
    //     res.render('purchaseConfirmation');
    // }catch(err){
    //     res.status(400).send('Unable to select from database');
    // }
    }else{
        console.log('User not authorised');
        res.redirect('login');
    }
})

//We export this route to be accessed in the index.js
module.exports = purchaseConfirmationRoute;