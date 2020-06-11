const {readFile, appendFile} = require('fs');
const path = require('path');
const { resolve } = require('path');
const { rejects } = require('assert');

const productPath = path.join(process.cwd(), 'product.txt');

class ProductService {
    getAllProduct() {
        let product = [];

        return new Promise((resolve, rejects ) => {
            readFile(productPath, (error, JSONProduct) => {
                if (error) {
                    reject('Cant read file (')
                }
                let JSONArr2 = JSONProduct.toString().split('\n');

                
                JSONArr2.forEach(jsonProduct => {
                    if (!jsonProduct) {
                        return
                    }

                    product.push(JSON.parse(jsonProduct))
                })

                resolve(product);
            })
        })
 }
}

    module.exports = new ProductService;
