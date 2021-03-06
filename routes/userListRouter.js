//We require express in the routes
const express = require ('express');
const mongoose = require('mongoose');
require('../models/userModel');

//initialize the homeroute
const userListRoute = express.Router();

const register = mongoose.model('users')

//This is the route to the end point of the home page(home.pug).
userListRoute.get('/', async(req, res) => {
    if (req.session.user){
    try{
        let items = await register.find();
        if(req.query.username){
            items = await register.find({username: req.query.username});
        }res.render('userList', {users: items});
    }catch(err){
        res.status(400).send("unable to find items in the database");
    }
}else{
    console.log('User not authorised');
    res.redirect('/login');
}
})
userListRoute.post('/delete', async(req, res) => {
    try{
        await register.deleteOne({_id: req.body.id})
        res.redirect('back');
    }catch(err){
        res.status(400).send('Unable to delete from database');
    }

})

//we export the "homeRoute" module so it can be used in the index.js
module.exports = userListRoute;