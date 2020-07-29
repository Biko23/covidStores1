const express = require('express');
const mongoose = require('mongoose');
require('../models/userModel');

const registrationRoute = express.Router();

const register = mongoose.model('users')


registrationRoute.get('/', (req, res) => {
    res.render('userRegistration', {title: 'User Registration'});
});

// registrationRoute.post('/', (req,res) =>{
//     console.log(req.body);
//     //res.render('userRegistration', {title: 'User Registration'});
// })

registrationRoute.post("/", async (req, res) => {
    let items = new register({
        fname: req.body.fname,
        lname: req.body.lname,
        gender: req.body.gender,
        country: req.body.country,
        city: req.body.city,
        designation: req.body.designation,
        nin: req.body.nin,
        eid: req.body.eid,
        password: req.body.password,
    });
    try{
        items.save()
        res.render('userRegistration');
        //res.send('Thanks');
    }catch(err){
        res.send('Error Dude');
        console.log(err);
    }
    //console.log(req.body, 'Data saved');
    //res.render('reg');
    // try {
    //   const items = new register(req.body);
    //   await register.register(items, req.body.password, (err) => {
    //     if (err) { throw err }
    //     res.redirect('/login')
    //   })
    // } catch (err) {
    //    res.status(400).send('Sorry! Something went wrong.')
    //    console.log(err)
    // }
   })


module.exports = registrationRoute;