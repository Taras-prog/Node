const path = require('path');
const os = require('os')
const fs = require('fs');

// const {calculate} = require('./dir1/mine');

// let number = calculate(10, 7);

// console.log(number);

//-------------------fs--------------------
// fs.writeFile(
//     path.join(__dirname, 'files', 'data.txt'),
//     'hello world \n',
//     err => {
//         console.log(err);
//     }
//     )

// for(let i = 0; i < 7; i++){
//     fs.appendFile(
//         path.join(__dirname, 'files', 'data.txt'), 
//         'hello from appendFile\n',
//         {flag: 'a'}, 
//         err => {
//         console.log(err);
        
//     })

// }

// fs.readFile(path.join(__dirname, 'files', 'data.txt'), (err, data)  => {
//     console.log(data.toString());
// });

fs.stat(path.join(__dirname, 'files', 'data.txt'), (err, stats) => {
     console.log(stats);
     
     
}
)
//------------------------------------------------------


// console.log(os.platform()); // Перевіряє платформу (Windows, Mac, Linux)

// console.log(process.cwd()); // cwd = current work directory 
// console.log(__dirname ); // імя папки 
// console.log(__filename); // iмя файла

// -------------------------------------PATH--------------------------------------------------
// let s = path.resolve(`${process.cwd()}\\\\..\\/React`); // виправляє зломаний шлях до папки

// console.log(s);

// let s1 = path.join(__dirname, 'files', 'data.txt');

// console.log(s1);
//--------------------------------------------------------------------------------------------