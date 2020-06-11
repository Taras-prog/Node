const  {Router} = require('express');

const userRouter = new Router();

const {userController} = require('../../controllers')
const checUserValid = require('../../middlewares/user/chek-is-user-valid')

userRouter.get('/',  (userController.getAllUsers))

userRouter.post('/', checUserValid, (userController.createUsers))

userRouter.put('/',(userController.updateUsers) )

userRouter.delete('/', (userController.deleteUsers))

module.exports = userRouter;