//We require express in the routes
const express = require ('express');
const mongoose = require('mongoose');

require('../models/productModel');
require('../models/furnitureModel');
require('../models/electronicsModel');
require('../models/boutiqueModel');

//initialize the homeroute
const inventoryListRoute = express.Router();


const productRegister = mongoose.model('products');
const electronicRegister = mongoose.model('electronics');
const furnitureRegister = mongoose.model('furniture');
const boutiqueRegister = mongoose.model('boutique');

//This is the route to the Inventory List.
inventoryListRoute.get('/', async(req, res) => {
    if (req.session.user){
        try{
            console.log('Here we go')
            let items = await productRegister.find();
            let furniture = await furnitureRegister.find();
            let electronics = await electronicRegister.find();
            let boutique = await boutiqueRegister.find();
            if(req.query.name){
                items = await products.find({name: req.query.name});
            }res.render('inventory', {
                products: items,
                furnitures: furniture,
                electronics: electronics,
                boutiques: boutique
            
            });
        }catch(err){
            res.status(400).send("unable to find items in the database");
        }

        //Should there be no existing session that is to say no user has logged in, they will be sent back to the login page.
    }else{
        console.log('User not authorised');
        res.redirect('/login');
    }
    })
    inventoryListRoute.post('/delete', async(req, res) => {
    try{
        await register.deleteOne({_id: req.body.id})
        res.redirect('back');
    }catch(err){
        res.status(400).send('Unable to delete from database');
    }

})

//we export the "homeRoute" module so it can be used in the index.js
module.exports = inventoryListRoute;