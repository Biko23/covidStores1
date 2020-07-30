const express = require('express');
const mongoose = require('mongoose');
require('../models/userModel');

const registrationRoute = express.Router();

const userRegister = mongoose.model('users')


registrationRoute.get('/', (req, res) => {
    res.render('userRegistration', {title: 'User Registration'});
});
//Below we are attempting to register a new user
registrationRoute.post("/", async (req, res) => {
    try {
      const items = new userRegister({//This is the user item object to be registered
                username: req.body.username,
                fname: req.body.fname,
                lname: req.body.lname,
                gender: req.body.gender,
                country: req.body.country,
                city: req.body.city,
                designation: req.body.designation,
                nin: req.body.nin,
                eid: req.body.eid,
                password: req.body.password,});
      await userRegister.register(items, req.body.password, (err) => {
        if (err) { throw err }
        res.redirect('/userList')
      })
    } catch (err) {
       res.status(400).send('Sorry! Something went wrong.')
       console.log(err)
    }
  })


module.exports = registrationRoute;