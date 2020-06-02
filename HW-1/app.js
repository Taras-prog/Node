const path = require('path');
const fs = require('fs').promises;

async function swap(dirFrom, dirTo) {
 const directoryFrom = path.join(__dirname, dirFrom);
 const directoryTo = path.join(__dirname, dirTo);
 const swapFolder = path.join(__dirname,'transfer');

    await fs.mkdir(swapFolder);
    await copyFile(directoryFrom, swapFolder);
    await copyFile(directoryTo, directoryFrom);
    await copyFile(swapFolder, directoryTo);
    await fs.rmdir(swapFolder);
}

async function copyFile(directoryFrom, directoryTo) {
const files = await fs.readdir(directoryFrom);
    for(const file of files) {
        await  fs.rename(
            path.join(directoryFrom, file),
            path.join(directoryTo, file),
          )
     }    
}

swap('18.00', '20.00');



