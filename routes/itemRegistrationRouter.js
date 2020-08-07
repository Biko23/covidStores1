const express = require('express');
const mongoose = require('mongoose');
require('../models/productModel');

const itemRegistrationRoute = express.Router();

const productRegister = mongoose.model('products')


itemRegistrationRoute.get('/', (req, res) => {
    res.render('itemRegistration', {title: 'Product Registration'});
});
//Below we are attempting to register a new product
itemRegistrationRoute.post("/", async (req, res) => {
    try {
      const items = new productRegister({//This is the product item object to be registered
                name: req.body.name,
                color: req.body.color,
                make: req.body.make,
                description: req.body.description,
                date: req.body.date,
                category: req.body.category,
                subCategory: req.body.subCategory,
                serialNo: req.body.serialNo,
                stock: req.body.stock,
                price: req.body.price,
                downPayment: req.body.downPayment,
                payInterval: req.body.payInterval});
      await userRegister.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/inventoryList')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })


module.exports = itemRegistrationRoute;