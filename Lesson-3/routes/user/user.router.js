const  {Router} = require('express');

const userRouter = new Router();

userRouter.get('/', (req, res) => {
    res.json(' GET users')
});

userRouter.post('/', (req, res) => {
    res.json('POST users')
     console.log(req.body);
});

userRouter.put('/',  (req,res) => {
    res.json(' PUT users')
});

userRouter.delete('/', (req, res) => {
    const params = req.params
    const query = req.query
    res.json({params, query})
});

module.exports = userRouter;