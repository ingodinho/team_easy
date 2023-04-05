import express, { Application, Response} from "express";
import cors from 'cors';
import morgan from "morgan";
import dotenv from "dotenv";
import "reflect-metadata";
import session, {SessionOptions} from "express-session";

dotenv.config({path: "src/config/.env"});

import {AppDataSource} from "./data-source";
import {userController} from "./controller/user-controller";

const app: Application = express();

const PORT = process.env.PORT || 9000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
const apiV1: string = "/api/v1";

// session for saving refresh-token

const sessionOptions: SessionOptions = {
    secret: process.env.SESSION_SECRET_KEY!,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: THIRTY_DAYS,
    }
};

app.use(session(sessionOptions));

// general middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({origin: [FRONTEND_URL], credentials: true}));

// controller
app.use(apiV1 + "/user", userController);

// error 404
app.use((_, res: Response) => {
    res.status(404).send("Sorry, URL not found!");
});

app.listen(PORT, (): void => console.log("Server startet on Port: ", PORT));

// init database-connection
AppDataSource.initialize()
    .then(()=> console.log("Database connection established"))
    .catch(e => console.log(e));
