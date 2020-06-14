const Product = require('./../../models/Product')

 module.exports = {
    getProducts: (req, res) => {
        const products =  Product.fetchAll();
        res.json(products);
    }
};
