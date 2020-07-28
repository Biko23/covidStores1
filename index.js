//Require express as it is the framework we will be using with node.js
const express = require ('express');
//We require the module "homeRoute" to utilize this route
const homeRoute = require('./routes/homeRouter');
const registrationRoute = require('./routes/registrationRouter');

//instantiate your express framework
const app = express();

//configure the view engine(pug) we will be using since we will not be using HTML.
app.set('view engine', 'pug');

//Inorder to use external "static" css and js with express we ask express to access a file, "public", where we will save these files.
//Bootstrap files can be added to this folder so they can be accessed by express.
app.use(express.static('public'));

//To make sure our web app has kicked off fine.... We can use console logs to check if our app runs thus far.
console.log('We have lift off....');

//We use the HTTP "get" method to request information to show the user(browser)
//Below we respond by "rendering"(displaying) the home.pug file. with HTML we would "send_file"
app.use('/', homeRoute);
app.use('/userRegistration', registrationRoute);


//Below we instruct our application to listen to port 3000, open port 3000 for our app to run on our browser.
//It also logs onto the console the message showing the port has been opened and the app is running on it.
app.listen(3000, (req, res) =>{
    console.log('Listening on port 3000....');
})
