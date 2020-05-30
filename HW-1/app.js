const path = require('path');
const fs = require('fs'); //.promises;

// async function swap(dirFrom, dirTo) {
//  const directoryFrom = path.join(__dirname, dirFrom);
//  const directoryTo = path.join(__dirname, dirTo);
//  const swapFolder = path.join(__dirname,'transfer');

//     await fs.mkdir(swapFolder);
//     await copyFile(directoryFrom, swapFolder);
//     await copyFile(directoryTo, directoryFrom);
//     await copyFile(swapFolder, directoryTo);
//     await fs.rmdir(swapFolder);
// }

// async function copyFile(directoryFrom, directoryTo) {
// const files = await fs.readdir(directoryFrom);
//     for(const file of files) {
//         await  fs.rename(
//             path.join(directoryFrom, file),
//             path.join(directoryTo, file),
//           )
//      }    
// }

// swap('18.00', '20.00');


function swap(dirFrom, dirTo) {
     const directoryFrom = path.join(__dirname, dirFrom);
     const directoryTo = path.join(__dirname, dirTo);
     const swapFolder = path.join(__dirname,'transfer');

     createDir(swapFolder)
     .then(()=> copyFile (directoryFrom, directoryTo))
     .then(files => console.log(files))
     .catch(err=>console.log(err))

};

const createDir = (swapFolder) => new Promise( (resolve, reject) => {
    fs.mkdir(swapFolder, err => {
        if(err) reject(err); 
        resolve()
    })
});

const copyFile = (directoryFrom, directoryTo) => {
 return new Promise ((resolve, reject) => {
    fs.readdir(directoryFrom, (err, files) => {
        if(err) reject(err);
        resolve(files);
    });
 });  

};

swap('18.00', '20.00');