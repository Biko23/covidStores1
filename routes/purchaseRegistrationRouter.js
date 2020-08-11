const express = require('express');


require('../models/productModel');
require('../models/furnitureModel');
require('../models/electronicsModel');
require('../models/boutiqueModel');

const mongoose = require('mongoose');
//const { json } = require('body-parser');

const purchaseRegistrationRoute = express.Router();

//We need to import the model we are using to register our products.
const productRegister = mongoose.model('products');
const electronicRegister = mongoose.model('electronics');
const furnitureRegister = mongoose.model('furniture');
const boutiqueRegister = mongoose.model('boutique');

//This is the route to display the Product registration page
// purchaseRegistrationRoute.get('/', (req, res) => {
//     res.render('registerPurchase', {title: 'Purchase Registration'});
// });


purchaseRegistrationRoute.get('/', async(req, res) => {
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
    }catch(err){
        res.status(400).send("unable to find items in the database");
    }
})
purchaseRegistrationRoute.get('/purchaseConfirmation', async(req, res) => {
    const item = await productRegister.findById(req.query.id);
    //res.json(items);
    console.log(item);
    res.render('purchaseConfirmation', {product: item}, {title: 'Purchase Registration'});
    //res.render('purchaseConfirmation', {product});
    //console.log('We get here....');
    // try{
    //     await register.findOne({_id: req.body.id})
    //     //console.log('We get here....') Not yet
    //     res.render('purchaseConfirmation');
    // }catch(err){
    //     res.status(400).send('Unable to select from database');
    // }

})

//We export this route to be accessed in the index.js
module.exports = purchaseRegistrationRoute;