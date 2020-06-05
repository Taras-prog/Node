// const {EventEmitter} = require('events');

// const ee = new EventEmitter;

// ee.on('hello', () => {
//     console.log('HELLO WORLD');
// }); //можно запускати багато разів


// ee.once('test', (firstArg, secondArg) => {
//     console.log('Test Event')
//     console.log(firstArg)
//     console.log(secondArg)
// }); //можна запустити тільки один раз 

// ee.emit('hello');
// ee.emit('test', 'one', 2)

// console.log(ee.listenerCount('test'));
// console.log(ee.listenerCount('hello'));


// const fs = require('fs');

// let writeStream = fs.createWriteStream('./video_copy.mp4');

// // for (let i = 0; i < 1000; i++) {
// //     writeStream.write('17 contributions in the last year ')
// // };

// let readStream = fs.createReadStream('./video.mp4');

// readStream.on('data', (chunk) => {
//     console.log(chunk.toString());
//     console.log('__________');
// });
 
// readStream.on('end', () => {
//     console.log('End reading!');    
// });

// readStream.pipe(writeStream);

// https://github.com/Taras-prog/Node.git

const expressBars = require('express-handlebars');
const express = require('express');


const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'views', 'layouts')));
app.use(express.json());
app.use(express.urlencoded());

app.engine('.hbs', expressBars({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'))

app.get('/', (req, res) => {
    res.render('main')
});

app.get('/hello', (req, res) => {
    console.log(req);

    // res.write('Hello Page-1');
    // res.write('Hello Page-2');
    // res.end();
    res.json('Hello JSON')
});


app.listen(5555, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 5555...');
    }
});