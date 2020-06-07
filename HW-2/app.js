const express = require('express');
const expressBars = require('express-handlebars');
const path = require('path');

const app = express();

const User = require('./models/User');

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

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    const user = User.findUser(email, password);
    if (user){
        res.redirect('users')
    } else {
        res.render('login', {massage: 'Wrong data'})
    }
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', (req, res) => {
    const {email, password} = req.body;
   const user = new User (email, password)
    user.save();
});

app.listen(3000, () => console.log('Listen 3000...'));