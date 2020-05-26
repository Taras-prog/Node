const {calculate} = require('./dir1/mine');

let number = calculate(10, 7);

console.log(number);


const path = require('path');
const os = require('os')
const fs = require('fs');

console.log(os.platform()); // Перевіряє платформу (Windows, Mac, Linux)

console.log('--------------');
console.log(process.cwd()); // cwd = current work directory 
console.log(__dirname ); // імя папки 
console.log(__filename); // iмя файла
console.log('--------------');

