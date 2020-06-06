const express = require('express');
const expressBars = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('hbs', expressBars({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/register', (req, res) => {
    res.render('register')
})

app.listen(3000, () => console.log('Listen 3000...'));