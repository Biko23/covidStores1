const express = require ('express');

const app = express();

console.log('We have lift off....');

app.listen(3000, (req, res) =>{
    console.log('Listening on port 3000....')
})
