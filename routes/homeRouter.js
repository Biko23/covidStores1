//We require express in the routes
const express = require ('express');

//initialize the homeroute
const homeRoute = express.Router();

//This is the route to the end point of the home page(home.pug).
homeRoute.get('/', (req, res) => {
    res.render('home');
})

//we export the "homeRoute" module so it can be used in the index.js
module.exports = homeRoute;