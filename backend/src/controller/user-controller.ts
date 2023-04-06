import express, {Response, Request, Router} from "express";
import {registerUser} from "../service/user/register-user";
import {ILoginCredentials, IUserToRegister} from "../models/user-dtos";
import {loginUser} from "../service/user/login-user";
import {isAuthenticated} from "../utils/auth/auth-middleware";

export const userController: Router = express.Router();

userController.get("/", isAuthenticated, async (req: Request, res: Response) => {
    res.status(200).send("Ok");
})

userController.post("/register", async (req : Request, res : Response) => {
    const userData = req.body as IUserToRegister;
    try {
        const registeredUser = await registerUser(userData);
        res.status(200).send(registeredUser);
    } catch (e) {
        console.log("/user/register", e);
        res.status(400).json({msg: "Could not register new user"});
    }
})

userController.post("/login", async (req : Request, res : Response) => {
    const loginCredentials = req.body as ILoginCredentials;
    try {
        const loginData = await loginUser(loginCredentials);
        res.status(200).json({accessToken: loginData.accessToken, userId: loginData.userId});
    } catch (e) {
        console.log("/user/login", e);
        res.status(400).json({msg: "Login not successful"});
    }
})

// todo: delete cookie
userController.post("/logout", async (req : Request, res : Response) => {
})
