const express = require('express');

const {productRouter}  = require('./routes');
 

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use('/product', productRouter());




app.listen(4444, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 4444...');
    }
});