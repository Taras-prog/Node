const  {Router} = require('express');

const productRouter = new Router();

const {productController} = require('../../controllers')

productRouter.get('/', (productController.getProduct))

productRouter.post('/', (productController.createProduct))

productRouter.put('/', (productController.updateProduct))

productRouter.delete('/:name', (productController.deleteProduct)) 


module.exports = productRouter;