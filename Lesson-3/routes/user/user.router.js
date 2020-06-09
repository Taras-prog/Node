const  {Router} = require('express');

const userRouter = new Router();

const {userController} = require('../../controllers')

userRouter.get('/',(userController.getAllUsers))

userRouter.post('/',(userController.createUsers))

userRouter.put('/',(userController.updateUsers) )

userRouter.delete('/', (userController.deleteUsers))

module.exports = userRouter;