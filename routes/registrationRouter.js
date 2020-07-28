const express = require('express');
const mongoose = require('Mongoose');
require('../models/userModel');

const registrationRoute = express.Router();

const register = mongoose.model('users')


registrationRoute.get('/', (req, res) => {
    res.render('userRegistration', {title: 'User Registration'});
});

registrationRoute.post('/', (req,res) =>{
    console.log(req.body);
    res.render('userRegistration', {title: 'User Registration'});
})



module.exports = registrationRoute;