const {Router} = require('express');




const productRouter = new Router();

const productController = require('../../controllers');


productRouter.get('/', (productController.getProducts));

// productRouter.post('/', (productController.createProduct))

// productRouter.put('/', (productController.updateProduct))

// productRouter.delete('/', (productController.deleteProduct)) 
module.exports = productRouter;
