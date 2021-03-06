const express = require('express');
const loginRoute = express.Router();
const passport = require('passport');
// gets and displays a login page
loginRoute.get('/', (req, res) => {
    res.render('login', {title: 'Login'})
})
//process the username and password
loginRoute.post('/', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    let currentUser = req.session.user.name;
    console.log(currentUser);
    res.redirect('/purchaseRegistration');
});
module.exports = loginRoute;