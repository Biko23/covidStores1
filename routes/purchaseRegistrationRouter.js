const express = require('express');

//We require the all our inventory models
require('../models/productModel');
require('../models/furnitureModel');
require('../models/electronicsModel');
require('../models/boutiqueModel');

const mongoose = require('mongoose');

const purchaseRegistrationRoute = express.Router();

//We need to import the model we are using to retrieve products
const productRegister = mongoose.model('products');
const electronicRegister = mongoose.model('electronics');
const furnitureRegister = mongoose.model('furniture');
const boutiqueRegister = mongoose.model('boutique');

//This is the route to initiate a purchase
purchaseRegistrationRoute.get('/', async(req, res) => {
    if (req.session.user){
    try{
        let items = await productRegister.find();
        let furniture = await furnitureRegister.find();
        let electronics = await electronicRegister.find();
        let boutique = await boutiqueRegister.find();
        if(req.query.name){
            items = await productRegister.find({name: req.query.name});
        }res.render('registerPurchase', {
            products: items,
            furnitures: furniture,
            electronics: electronics,
            boutiques: boutique
        
        });

        //When the above try is run and any error is encountered it is "caught" below and an error message is displayed on the screen
    }catch(err){
        res.status(400).send("unable to find items in the database");
    }
}else{
    console.log('User not authorised');
    res.redirect('/login');
}
})
//this route is to confirm a purchase initiated.
purchaseRegistrationRoute.get('/purchaseConfirmation', async(req, res) => {
    const item = await productRegister.findById(req.query.id);
    //res.json(items);
    console.log(item);
    res.render('purchaseConfirmation', {product: item}, {title: 'Purchase Registration'});
    

})

//We export this route to be accessed in the index.js
module.exports = purchaseRegistrationRoute;