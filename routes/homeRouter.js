//We require express in the routes
const express = require ('express');
//we require mongoose to interact with the database
const mongoose = require('mongoose');
require ('../models/productModel');
require('../models/electronicsModel');
require('../models/furnitureModel');
require('../models/boutiqueModel');
//We need to utilise the products model
const electronics = mongoose.model('electronics');
const furniture = mongoose.model('furniture');
const boutique = mongoose.model('boutique')

//initialize the homeroute
const homeRoute = express.Router();

//This is the route to the end point of the home page(home.pug).
homeRoute.get('/', (req, res) => {
    res.render('home', {title: 'Home'});
})
homeRoute.get('/home/furniture', async(req, res) => {
    try{
        let items = await furniture.find();
        res.render('furniture', {products: items});
    }catch(err){
        res.status(400).send("unable to find items in the database")        
    }
})
homeRoute.get('/home/electronics', async(req, res) => {
    try{
        let items = await electronics.find();
        res.render('electronics', {products: items});
    }catch(err){
        res.status(400).send("unable to find items in the database")}
})
homeRoute.get('/home/boutique', async(req, res) => {
    try{
        let items = await boutique.find();
        res.render('boutique', {products: items});
    }catch(err){
        res.status(400).send("unable to find items in the database")}
})

//we export the "homeRoute" module so it can be used in the index.js
module.exports = homeRoute;