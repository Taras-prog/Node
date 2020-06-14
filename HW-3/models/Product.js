const uuid = require('uuid').v4;

const path = require('path');
const fs = require('fs');

const pathToProduct = path.join(process.cwd(), 'data', 'products.json');

module.exports = class Product {
    constructor (title, price) {
        this.id = uuid()
        this.title = title;
        this.price = price;
    }
    static  fetchAll() {
    const fileContent =  fs.readFile(pathToProduct)
    return JSON.parse(fileContent);
    
    }
}

