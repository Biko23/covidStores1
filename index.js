//Require express as it is the framework we will be using with node.js
const express = require ('express');

//We require the module for the different routes(controllers) to the different pages saved in the routes folder.
const homeRoute = require('./routes/homeRouter');
const registrationRoute = require('./routes/registrationRouter');
const itemRegistrationRoute = require('./routes/itemRegistrationRouter');
const userListRoute = require('./routes/userListRouter')
const loginRoute = require('./routes/loginRouter')

const userModel = require('./models/userModel');
const productModel = require('./models/productModel');

const path = require('path');
//We require the body-parser middleware to "parse" body of our requests.
const bodyParser = require('body-parser');

//The dotenv file is a file that maintains details like the database connection link.
require('dotenv/config')
const mongoose = require('mongoose');

//We'll be using passport to do session-based authentication.
const passport = require('passport');

//Passport-local-mongoose will help with easy intergration between mongoose and passport.
const passportLocalMongoose = require('passport-local-mongoose');

passport.use(userModel.createStrategy('local'));//causing errors saying the strategy requires a name.
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());


//we require express-session to handle sessions for authentication using passport.
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });

//instantiate your express framework
const app = express();

//configure the view template engine(pug) we will be using since we will not be using HTML.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Inorder to use external "static" css and js with express we ask express to access a file, "public", where we will save these files.
//Bootstrap files can be added to this folder so they can be accessed by express.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession);

//Open the mongoose connection to MongoDB (covidStores1 database).
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection
    .on('open', () =>{
        console.log('Mongoose connection open...');
    })
    .on('error', (err) =>{
        console.log(`connection error: ${err.message}`);
    })



//To make sure our web app has kicked off fine.... We can use console logs to check if our app runs thus far.
console.log('We have lift off....');

//We use the HTTP "get" method to request information to show the user(browser)
//Below we respond by "rendering"(displaying) the home.pug file. with HTML we would "send_file"
//Below 
app.use('/', homeRoute);
app.use('/registration', registrationRoute);
app.use('/userList', userListRoute);
app.use('/login', loginRoute);
app.use('/itemRegistration', itemRegistrationRoute);



//Below we instruct our application to listen to port 3000, open port 3000 for our app to run on our browser.
//It also logs onto the console the message showing the port has been opened and the app is running on it.
app.listen(3000, (req, res) =>{
    console.log('Listening on port 3000....');
})
