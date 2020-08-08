const express = require('express');

require('../models/productModel');

const mongoose = require('mongoose');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname);
  }

});
const upload = multer({storage: storage});

const itemRegistrationRoute = express.Router();

//We need to import the model we are using to register our products.
const productRegister = mongoose.model('products');

//This is the route to display the Product registration page
itemRegistrationRoute.get('/', (req, res) => {
    res.render('itemRegistration', {title: 'Product Registration'});
});
//Below we are attempting to register a new product
itemRegistrationRoute.post("/", upload.single('productImage') ,async (req, res) =>{
          const items = await new productRegister({         //This is the product item object to be registered
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
            paymentInterval: req.body.paymentInterval,
          });
          try {

            const inventory = items.save();
            res.render('itemRegistration');
            //res.json(inventory);


          
        } catch (error) {
          //res.status(400).send('Sorry! Something went wrong.')
          //console.log(error)
          res.json({message: error});
          
        }
  })

//We export this route to be accessed in the index.js
module.exports = itemRegistrationRoute;