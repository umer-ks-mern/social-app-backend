import { Router } from "express";
import userController from "../controller/user.js";
import loginController from "../controller/auth.js";

const userRouter = new Router();

userRouter.get("/users", userController.getAll);
userRouter.get("/users/:search", userController.searchAll);
userRouter.get("/user/:id", userController.getSingle);

userRouter.post("/user", userController.create);
userRouter.put("/user/:id", userController.update);

userRouter.get("/user-delete/:id", userController.delete);
userRouter.post("/login", loginController.login);

export default userRouter;
