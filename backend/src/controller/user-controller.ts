import express, {Response, Request, Router} from "express";
import {User} from "../entity/User";
import {registerUser} from "../service/register-user";

export const userController: Router = express.Router();

userController.get("/", async (req: Request, res: Response) => {
    res.status(200).send("Ok");
})

userController.post("/register", async (req: Request, res: Response) => {
    const data = req.body as User;
    const newUser = new User(data.userName, data.firstName, data.lastName, data.email, data.password);
    try {
        const registeredUser = await registerUser(newUser);
        res.status(200).json({data: registeredUser});
    } catch (e) {
        console.log("/user/register", e);
        res.status(400).json({msg: "Could not register new user"})
    }
})
