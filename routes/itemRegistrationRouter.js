const express = require('express');

require('../models/productModel');

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

const itemRegistrationRoute = express.Router();

//We need to import the model we are using to register our products.
const productRegister = mongoose.model('products');

//This is the route to display the Product registration page
itemRegistrationRoute.get('/', (req, res) => {
  if (req.session.user){
    let currentUser = req.session.user.designation;
    console.log(currentUser);
    if (currentUser == 'manager'){
      res.redirect('/userList');
    }else{
    //console.log('Here you are');
    res.render('purchaseRegistration', {title: 'Product Registration'});}
  }else{
    console.log('User not authorised');
  }
});

//Below we are attempting to register a new product
itemRegistrationRoute.post("/", upload.single('productImage'),async (req, res) =>{
          const items =  new productRegister({         //This is the product item object to be registered
            name: req.body.name,
            color: req.body.color,
            make: req.body.make,
            description: req.body.description,
            date:req.body.date,
            category: req.body.category,
            subCategory: req.body.subCategory,
            serialNo: req.body.serialNo,
            stock: req.body.stock,
            price: req.body.price,
            downPayment: req.body.downPayment,
            paymentInterval: req.body.paymentInterval,
            productImage: req.file.path
          });
          try {
            const products = await items.save();
            res.render('itemRegistration');
            //res.json(inventory);


          
        } catch (error) {
          //res.status(400).send('Sorry! Something went wrong.')
          console.log(error)
          res.json({message: error});
          
        }
  })

//We export this route to be accessed in the index.js
module.exports = itemRegistrationRoute;