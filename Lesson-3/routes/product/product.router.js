const  {Router} = require('express');

const productRouter = new Router();

productRouter.get('/', (req, res) => {
    res.json(' GET product')
});

productRouter.post('/', (req, res) => {
    res.json('POST product')
     console.log(req.body);
});

productRouter.put('/',  (req,res) => {
    res.json(' PUT product')
});

productRouter.delete('/:name', (req, res) => {
    const params = req.params
    const query = req.query
    res.json({params, query})
});



module.exports = productRouter;