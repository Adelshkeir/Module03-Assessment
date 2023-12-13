import usersController from "./usercontroller.js";
import express from "express"

const userRouter = express.Router();


userRouter.post('/', usersController.createUser);


userRouter.get('/', usersController.getAllUsers);

userRouter.get('/:id', usersController.findUserById);


userRouter.delete('/:id', usersController.deleteUser);



export default userRouter;