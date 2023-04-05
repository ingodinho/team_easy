import * as jwt from "jsonwebtoken";
import {User} from "../../entity/User";

const TEN_MINUTES = 10 * 60;
const ONE_WEEK = 60 * 60 * 24 * 7;
const secretTokenKey = process.env.TOKEN_SECRET_KEY;

interface TokenPayLoad {
    sub: number,
    iat: number,
    exp: number,
    type: string
}

export const createTokenFunction = (tokenType: string = "access") => {

    let duration : number;
    switch (tokenType) {
        case "access":
            duration = TEN_MINUTES;
            break;
        case "refresh":
            duration = ONE_WEEK;
            break;
        default:
            throw new Error("Wrong token-type was given");
    }

    return (user: User) : string => {
        const initiatedAt = Math.floor(Date.now() / 1000);
        const expiresAt = initiatedAt + duration;

        const tokenPayLoad : TokenPayLoad = {
            sub: user.id,
            iat: initiatedAt,
            exp: expiresAt,
            type: tokenType
        };

        if(!secretTokenKey) {
            throw new Error("Environment Variable not initialized");
        }
        return jwt.sign(tokenPayLoad, secretTokenKey, {algorithm: "HS256"});
    }
}
