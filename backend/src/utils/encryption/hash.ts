import * as crypto from "crypto";

const secret = process.env.HASH_SECRET_KEY;

export const createHash = (input:string) : string => {
    if(!secret) {
        throw new Error("environment variable is undefined");
    }
    return crypto.createHmac("sha256", secret)
        .update(input)
        .digest("hex");
}

export const createRandomHash = (): string => {
    if(!secret) {
        throw new Error("environment variable is undefined");
    }
    return crypto.createHmac("sha256", secret)
        .update(Math.random().toString())
        .digest("hex");
}
