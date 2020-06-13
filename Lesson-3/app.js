const expressBars = require('express-handlebars');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'views')));

app.engine('.hbs', expressBars({
    extname: '.hbs',
    defaultLayout: false
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'))

const {userRouter, productRouter}  = require('./routes');

app.use('/users', userRouter);
app.use('/product', productRouter);


app.get('/', (req, res) => {
    res.render('main')
})

app.get('/register', (req, res) => {
    res.render('register')
});


app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(4444, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 4444...');
    }
});