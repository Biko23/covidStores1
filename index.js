const express = require ('express');

const app = express();


app.set('view engine', 'pug');

console.log('We have lift off....');
app.get('/', (req, res) =>{
    res.render('home');
})
app.listen(3000, (req, res) =>{
    console.log('Listening on port 3000....')
})
