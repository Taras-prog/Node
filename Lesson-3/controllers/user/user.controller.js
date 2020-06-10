const {userService} = require('../../service')

module.exports = {

    getAllUsers: async (req, res) => {
    let users = await userService.getUsers();
        res.render('users', {users})
        // res.json({users})
    },

    updateUsers:   (req,res) => {
        res.json(' PUT users')
    },

    createUsers: async (req, res) => {
       
        await userService.createUser(req.body);

        res.redirect('/users')
    },

    
    deleteUsers:  (req, res) => {
        const params = req.params
        const query = req.query
        res.json({params, query})
    }
};
