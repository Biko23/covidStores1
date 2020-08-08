const express = require('express');

require('../models/productModel');

const mongoose = require('mongoose');

const purchaseRegistrationRoute = express.Router();

//We need to import the model we are using to register our products.
const productRegister = mongoose.model('products');

//This is the route to display the Product registration page
// purchaseRegistrationRoute.get('/', (req, res) => {
//     res.render('registerPurchase', {title: 'Purchase Registration'});
// });

purchaseRegistrationRoute.get('/', async(req, res) => {
    try{
        let items = await productRegister.find();
        if(req.query.name){
            items = await productRegister.find({name: req.query.name});
        }res.render('registerPurchase', {products: items});
    }catch(err){
        res.status(400).send("unable to find items in the database");
    }
})
purchaseRegistrationRoute.post('/select', async(req, res) => {
    try{
        await register.findOne({_id: req.body.id})
        //console.log('We get here....') Not yet
        res.redirect('newPurchase');
    }catch(err){
        res.status(400).send('Unable to select from database');
    }

})

//We export this route to be accessed in the index.js
module.exports = purchaseRegistrationRoute;