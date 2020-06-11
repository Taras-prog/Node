module.exports = {
    getProduct:  (req, res) => {
        res.json(' GET product')
    },
    createProduct:  (req, res) => {
        res.json('POST product')
         console.log(req.body);
    },
    updateProduct: (req,res) => {
        res.json(' PUT product')
    },
    deleteProduct:  (req, res) => {
        const params = req.params
        const query = req.query
        res.json({params, query})
    }
}