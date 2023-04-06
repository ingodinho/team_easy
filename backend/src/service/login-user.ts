import {LoginCredentials, LoginResponse} from "../models/user-dtos";
import {userRepository} from "../repository/repositories";
import {createHash} from "../utils/encryption/hash";
import {createTokenFunction} from "../utils/token/create-token";

const createAccessToken = createTokenFunction("access");
const createRefreshToken = createTokenFunction("refresh");

export const loginUser = async (loginCredentials : LoginCredentials) : Promise <LoginResponse> => {
    const foundUser = await userRepository.findOneBy({email: loginCredentials.email});
    if(!foundUser) {
        throw new Error("No user with this email found");
    }

    const loginPasswordHash = createHash(loginCredentials.password + foundUser.passwordSalt);
    if(loginPasswordHash !== foundUser.passwordHash) {
        throw new Error("Wrong password");
    }

    const accessToken = createAccessToken(foundUser);
    const refreshToken = createRefreshToken(foundUser);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        userId: foundUser.id
    };
}
