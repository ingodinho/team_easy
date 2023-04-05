import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";

interface AuthRequest extends Request {
    sub? : string;
}

const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

const _unauthorized = (res: Response) => {
    return res.status(401).json({success: false, msg: "Not Authorized, please login first"})
}
export const isAuthenticated = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.get("Authorization");
        console.log()
        if(!token) {
            return _unauthorized(res);
        }

        const [authType, accessToken] = token.split(" ");

        if(authType !== "Bearer") {
            return _unauthorized(res);
        }

        if(!TOKEN_SECRET_KEY) {
            throw new Error("Environment variable not initialized");
        }
        const decoded = jwt.verify(accessToken, TOKEN_SECRET_KEY);
        req.sub = typeof decoded.sub === "function" ? decoded.sub() : decoded.sub;
        next();

    } catch (e) {
        console.log("auth-middleware: ", e);
        return _unauthorized(res);
    }
}
