const path = require('path');
const os = require('os')
const fs = require('fs');
// const fs = require('fs-extra')

// const {calculate} = require('./dir1/mine');

// let number = calculate(10, 7);

// console.log(number);

// console.log(os.platform()); // Перевіряє платформу (Windows, Mac, Linux)

// console.log(process.cwd()); // cwd = current work directory 
// console.log(__dirname ); // імя папки 
// console.log(__filename); // iмя файла


//===============================fs========================================
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

// fs.readFile(path.join(__dirname, 'files', 'data.txt'), (err, data)  => {  //  зчитує  файл
//     console.log(data.toString());
// });

// fs.stat(path.join(__dirname, 'files', 'data.txt'), (err, stats) => { // показує статус 
//      console.log(stats);     
// });

// fs.mkdir(path.join(__dirname, 'first node'), err => { // створює папку 
//      console.log(err);
// });

// fs.rmdir(path.join(__dirname, 'first node'), err => { // видаляє папку
//      console.log(err);
// });

// fs.readdir(path.join(__dirname, 'first node'), (err, files) => {
//      console.log(files);
// });

// fs.stat(path.join(__dirname, 'first node'), (err, stats)=>{
//      console.log(stats.isDirectory());
// });

// fs.unlink(path.join(__dirname, 'app.txt'), err => { // видаляє файл
//      console.log(err);
// });

// fs.rename(path.join(__dirname, 'first.txt'), path.join(__dirname, 'files', 'first.txt'), err=> {
//      console.log(err);  
// }); // змінює переіменовує та переміщає файли

// fs.truncate(path.join(__dirname, 'hello.txt'), 3, err => {
//      console.log(err);   
// }); // чистить файл
//===============================================================================



// ******************************************PATH******************************************
// let s = path.resolve(`${process.cwd()}\\\\..\\/React`); // виправляє зломаний шлях до папки

// console.log(s);

// let s1 = path.join(__dirname, 'files', 'data.txt');

// console.log(s1);
//******************************************************************************************