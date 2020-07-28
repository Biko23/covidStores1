const express = require('express');

const registrationRoute = express.Router();

registrationRoute.get('/', (req, res) => {
    res.render('userRegistration');
});

module.exports = registrationRoute;