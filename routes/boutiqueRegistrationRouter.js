const express = require('express');

require('../models/boutiqueModel');

const mongoose = require('mongoose');

//We import multer to handle our image upload and retrieval
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }

});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
    cb(null, true);
  } else{
    cb(null, false);
  }
}
const upload = multer({storage: storage, fileFilter: fileFilter});

const boutiqueRegistrationRoute = express.Router();

//We need to import the model we are using to register our products.
const productRegister = mongoose.model('boutique');

//This is the route to display the Electronics registration page
boutiqueRegistrationRoute.get('/', (req, res) => {
    res.render('boutiqueRegistration', {title: 'Boutique Registration'});
});
//Below we are attempting to register a new product
boutiqueRegistrationRoute.post("/", upload.single('productImage'),async (req, res) =>{
          const items =  new productRegister({         //This is the product item object to be registered
            name: req.body.name,
            color: req.body.color,
            make: req.body.make,
            description: req.body.description,
            date:req.body.date,
            category: req.body.category,
            serialNo: req.body.serialNo,
            stock: req.body.stock,
            price: req.body.price,
            downPayment: req.body.downPayment,
            paymentInterval: req.body.paymentInterval,
            productImage: req.file.path
          });
          try {

            const electronics = await items.save();
            res.render('boutiqueRegistration');
            //res.json(inventory);


          
        } catch (error) {
          //res.status(400).send('Sorry! Something went wrong.')
          console.log(error)
          res.json({message: error});
          
        }
  })

//We export this route to be accessed in the index.js
module.exports = boutiqueRegistrationRoute;